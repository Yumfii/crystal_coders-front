import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import toast, { Toaster } from 'react-hot-toast';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import './WaterForm.module.css';

import { AiOutlineMinusCircle } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
import axiosInstance from '../../redux/water/operations';

// import { updateWaterProgress, updateWaterList, updateCalendar } from '../redux/actions';

const WaterForm = ({ mode = 'add', initialData = null, onClose }) => {
  const dispatch = useDispatch();
  const [waterAmount, setWaterAmount] = useState(50);
  const [time, setTime] = useState(new Date().toISOString().substring(11, 16));

  const schema = Yup.object().shape({
    amount: Yup.number()
      .required('Amount of water is required')
      .min(50, 'Amount must be at least 50ml')
      .max(5000, 'Amount cannot exceed 5000ml'),
    time: Yup.string().required('Time is required'),
  });

  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    resolver: yupResolver(schema),

    defaultValues: {
      amount: waterAmount,
      time: time,
    },
  });

  useEffect(() => {
    if (mode === 'edit' && initialData) {
      axiosInstance.get(`api/water/${initialData.id}`)

        .then(response => {
          const data = response.data;
          setValue('amount', data.amount);
          setValue('time', data.time);
          setWaterAmount(data.amount);
          setTime(data.time);
        })
        .catch(error => {
          toast.error(
            `Error fetching data: ${
              error.response ? error.response.data.message : error.message
            }`
          );
        });
    }
  }, [mode, initialData, setValue]);

  const updateWaterAmountBackend = async newAmount => {
    try {
      await axiosInstance.put('/water/update', { amount: newAmount });
      // dispatch(updateWaterProgress({ amount: newAmount }));
      // dispatch(updateWaterList({ amount: newAmount }));
      // dispatch(updateCalendar({ amount: newAmount }));
      toast.success('Water amount updated successfully!');
    } catch (error) {
      toast.error(
        `Error: ${error.response ? error.response.data.message : error.message}`
      );
    }
  };

  const incrementWater = () => {
    const newAmount = Math.min(waterAmount + 50, 5000);
    setWaterAmount(newAmount);
    setValue('amount', newAmount);
    updateWaterAmountBackend(newAmount);
  };

  const decrementWater = () => {
    const newAmount = Math.max(waterAmount - 50, 50);
    setWaterAmount(newAmount);
    setValue('amount', newAmount);
    updateWaterAmountBackend(newAmount);
  };

  const handleManualInputChange = e => {
    const newAmount = Number(e.target.value);
    if (newAmount >= 50 && newAmount <= 5000) {
      setWaterAmount(newAmount);
      setValue('amount', newAmount);
      updateWaterAmountBackend(newAmount);
    }
  };

  const onSubmit = async data => {
    try {
      const url = mode === 'edit' ? `/water/${initialData.id}` : '/water';
      const method = mode === 'edit' ? 'put' : 'post';

      await axiosInstance({
        method: method,
        url: url,
        data: data,
      });

      // dispatch(updateWaterProgress(data));
      // dispatch(updateWaterList(data));
      // dispatch(updateCalendar(data));

      toast.success('Water entry saved successfully!');
      onClose();
    } catch (error) {
      toast.error(
        `Error: ${error.response ? error.response.data.message : error.message}`
      );
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="water-form">
      <Toaster position="top-right" reverseOrder={false} />
      <h3 style={{ marginBottom: 20 }} className="title">
        {mode === 'edit' ? 'Correct entered data' : 'Choose a value'}
      </h3>

      <div className="form-group">
        <p className="title2">Amount of water:</p>
        <br />
        <div
          className="input-group"
          style={{
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
          }}
        >
          <button
            type="button"
            onClick={decrementWater}
            className="circle-btn"
            style={{ backgroundColor: 'transparent' }}
          >
            <AiOutlineMinusCircle
              style={{
                color: '#555555',
                fontSize: '43px',
                cursor: 'pointer',
                transition: 'color 0.3s',
              }}
              onMouseOver={e =>
                (e.currentTarget.style.color = 'var(--light-green-hover)')
              }
              onMouseOut={e => (e.currentTarget.style.color = '#555555')}
            />
          </button>

          <div
            className="water-amount-panel"
            style={{
              fontSize: '15px',
              fontFamily: 'Poppins',
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: '22.4px',
              color: '#FFF',
              backgroundColor: '#323F47',
              borderRadius: '30px',
              padding: '20px 11px',
              display: 'flex',
              justifyContent: 'center',
              height: '43px',
              alignItems: 'center',
            }}
          >
            {waterAmount} ml
          </div>

          <button
            type="button"
            onClick={incrementWater}
            className="circle-btn"
            style={{ backgroundColor: 'transparent' }}
          >
            <AiOutlinePlusCircle
              style={{
                color: '#555555',
                fontSize: '43px',
                cursor: 'pointer',
                transition: 'color 0.3s',
              }}
              onMouseOver={e =>
                (e.currentTarget.style.color = 'var(--light-green-hover)')
              }
              onMouseOut={e => (e.currentTarget.style.color = '#555555')}
            />
          </button>
        </div>
        {errors.amount && (
          <p className="error-message">{errors.amount.message}</p>
        )}
      </div>

      <div className="form-group">
        <label
          style={{ marginBottom: 8, marginTop: '16px', display: 'block' }}
          className="title2"
        >
          Recording time:
        </label>
        <input
          className="input"
          {...register('time')}
          type="time"
          value={time}
          onChange={e => setTime(e.target.value)}
          style={{
            padding: '16px 16px',
            alignItems: 'flex-start',
            borderRadius: '15px',
            width: '100%',
            border: '1px solid rgba(47, 47, 47, 0.15)',
            display: 'block',
            boxSizing: 'border-box',
            marginBottom: '24px',
            color: '#2F2F2F',
            fontFamily: 'Poppins',
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '24px',
            letterSpacing: '-0.16px',
            transition: 'border-color var(--animation)',
          }}
          onMouseOver={e =>
            (e.currentTarget.style.border = '1px solid #555555')
          }
          onMouseOut={e =>
            (e.currentTarget.style.border = '1px solid rgba(47, 47, 47, 0.15)')
          }
        />
        {errors.time && <p className="error-message">{errors.time.message}</p>}
      </div>

      <h3 style={{ marginBottom: 20 }} className="title">
        Enter the value of water used:
      </h3>
      <div className="form-group">
        <input
          className="input"
          {...register('amount')}
          type="number"
          value={waterAmount}
          onChange={handleManualInputChange}
          style={{
            padding: '16px 16px',
            alignItems: 'flex-start',
            borderRadius: '15px',
            width: '100%',
            border: '1px solid rgba(47, 47, 47, 0.15)',
            display: 'block',
            boxSizing: 'border-box',
            marginBottom: '24px',
            color: '#2F2F2F',
            fontFamily: 'Poppins',
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '24px',
            letterSpacing: '-0.16px',
            transition: 'border-color var(--animation)',
          }}
          min="50"
          max="5000"
          step="1"
          onMouseOver={e =>
            (e.currentTarget.style.border = '1px solid #555555')
          }
          onMouseOut={e =>
            (e.currentTarget.style.border = '1px solid rgba(47, 47, 47, 0.15)')
          }
        />
        {errors.amount && (
          <p className="error-message">{errors.amount.message}</p>
        )}
      </div>

      <button
        type="submit"
        style={{
          backgroundColor: 'var(--light-green)',
          color: '#323F47',
          border: 'none',
          padding: '0.75rem 1.5rem',
          cursor: 'pointer',
          borderRadius: '30px',
          transition: 'background-color var(--animation)',
        }}
        onMouseOver={e =>
          (e.currentTarget.style.backgroundColor = 'var(--light-green-hover)')
        }
        onMouseOut={e =>
          (e.currentTarget.style.backgroundColor = 'var(--light-green)')
        }
      >
        Save
      </button>
    </form>
  );
};

export default WaterForm;
