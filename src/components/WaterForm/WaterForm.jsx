import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import toast, { Toaster } from 'react-hot-toast';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import './WaterForm.module.css';
import axios from 'axios';

import { updateWaterProgress, updateWaterList, updateCalendar } from '../redux/actions';

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
      axios.get(`/api/water/${initialData.id}`)
        .then(response => {
          const data = response.data;
          setValue('amount', data.amount);
          setValue('time', data.time);
          setWaterAmount(data.amount);
          setTime(data.time);
        })
        .catch(error => {
          toast.error(`Error fetching data: ${error.response ? error.response.data.message : error.message}`);
        });
    }
  }, [mode, initialData, setValue]);

  const updateWaterAmountBackend = async (newAmount) => {
    try {
      await axios.put('/api/water/update', { amount: newAmount });
      dispatch(updateWaterProgress({ amount: newAmount }));
      dispatch(updateWaterList({ amount: newAmount }));
      dispatch(updateCalendar({ amount: newAmount }));
      toast.success('Water amount updated successfully!');
    } catch (error) {
      toast.error(`Error: ${error.response ? error.response.data.message : error.message}`);
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

  const handleManualInputChange = (e) => {
    const newAmount = Number(e.target.value);
    if (newAmount >= 50 && newAmount <= 5000) {
      setWaterAmount(newAmount);
      setValue('amount', newAmount);
      updateWaterAmountBackend(newAmount);
    }
  };

  const onSubmit = async (data) => {
    try {
      const url = mode === 'edit' ? `/api/water/${initialData.id}` : '/api/water';
      const method = mode === 'edit' ? 'put' : 'post';

      await axios({
        method: method,
        url: url,
        data: data,
      });

      dispatch(updateWaterProgress(data));
      dispatch(updateWaterList(data));
      dispatch(updateCalendar(data));

      toast.success('Water entry saved successfully!');
      onClose();
    } catch (error) {
      toast.error(`Error: ${error.response ? error.response.data.message : error.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="water-form">
      <Toaster position="top-right" reverseOrder={false} />
      <h3 className="title">{mode === 'edit' ? 'Correct entered data' : 'Choose a value'}</h3>

      <div className="form-group">
        <div className="input-group">
          <p className="title2">Amount of water:</p><br />
          <button type="button" onClick={decrementWater} className="btn">-</button>
          <div className="water-amount-panel">{waterAmount} ml</div>
          <button type="button" onClick={incrementWater} className="btn">+</button>
        </div>
        {errors.amount && <p className="error-message">{errors.amount.message}</p>}
      </div>

      <div className="form-group">
        <label className="title2">Recording time (hh:mm):</label>
        <input className="input"
          {...register('time')}
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        {errors.time && <p className="error-message">{errors.time.message}</p>}
      </div>

      <h3 className="title">Enter the value of water used</h3>
      <div className="form-group">
        <input className="input"
          {...register('amount')}
          type="number"
          value={waterAmount}
          onChange={handleManualInputChange}
        />
        {errors.amount && <p className="error-message">{errors.amount.message}</p>}
      </div>

      <button type="submit" className="btn-submit">Save</button>
    </form>
  );
};

export default WaterForm;
