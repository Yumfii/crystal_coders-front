import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import toast, { Toaster } from 'react-hot-toast';
import * as Yup from 'yup';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import './WaterForm.module.css';

const baseURL = 'https://crystal-coders-back.onrender.com';

const WaterForm = ({ onClose, onAfterAction }) => {
  const [waterAmount, setWaterAmount] = useState(50);

  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  const [time, setTime] = useState(getCurrentTime());


  const schema = Yup.object().shape({
    volume: Yup.number()
      .required('Amount of water is required')
      .min(50, 'Amount must be at least 50ml')
      .max(5000, 'Amount cannot exceed 5000ml'),
    time: Yup.string().required('Time is required'),
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      volume: waterAmount,
      time: time,
    },
  });

  const incrementWater = () => {
    setWaterAmount(prevAmount => Math.min(prevAmount + 50, 5000));
    setValue('volume', Math.min(waterAmount + 50, 5000));
  };

  const decrementWater = () => {
    setWaterAmount(prevAmount => Math.max(prevAmount - 50, 50));
    setValue('volume', Math.max(waterAmount - 50, 50));
  };

  const handleManualInputChange = e => {
    const newAmount = Number(e.target.value);
    if (newAmount >= 50 && newAmount <= 5000) {
      setWaterAmount(newAmount);
      setValue('volume', newAmount);
    }
  };

  const onSubmit = async data => {
    try {
      const token = localStorage.getItem('authToken');

      const response = await fetch(`${baseURL}/water`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          volume: waterAmount,
          time: data.time,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || response.statusText);
      }

      toast.success('Water entry saved successfully!');
      onClose(); // Закрываем форму, обновление произойдет в WaterList
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="water-form">
      <Toaster position="top-right" reverseOrder={false} />
      <h3 style={{ marginBottom: 20 }} className="title">
        Choose a value
      </h3>

      <div className="form-group">
        <p className="title2">Amount of water:</p>
        <br />
        <div className="input-group" style={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
          <button type="button" onClick={decrementWater} className="circle-btn" style={{ backgroundColor: 'transparent' }}>
            <AiOutlineMinusCircle style={{ color: '#555555', fontSize: '43px', cursor: 'pointer', transition: 'color 0.3s' }} />
          </button>

          <div className="water-amount-panel" style={{ fontSize: '15px', fontWeight: 700, lineHeight: '22.4px', color: '#FFF', backgroundColor: '#323F47', borderRadius: '30px', padding: '20px 11px', display: 'flex', justifyContent: 'center', height: '43px', alignItems: 'center' }}>
            {waterAmount} ml
          </div>

          <button type="button" onClick={incrementWater} className="circle-btn" style={{ backgroundColor: 'transparent' }}>
            <AiOutlinePlusCircle style={{ color: '#555555', fontSize: '43px', cursor: 'pointer', transition: 'color 0.3s' }} />
          </button>
        </div>
        {errors.volume && <p className="error-message">{errors.volume.message}</p>}
      </div>

      <div className="form-group">
        <label style={{ marginBottom: 8, marginTop: '16px', display: 'block' }} className="title2">
          Recording time:
        </label>
        <input
          className="input"
          {...register('time')}
          type="time"
          value={time}
          onChange={e => setTime(e.target.value)}
          style={{ padding: '16px 16px', borderRadius: '15px', width: '100%', border: '1px solid rgba(47, 47, 47, 0.15)', marginBottom: '24px' }}
        />
        {errors.time && <p className="error-message">{errors.time.message}</p>}
      </div>

      <h3 style={{ marginBottom: 20 }} className="title">
        Enter the value of water used:
      </h3>
      <div className="form-group">
        <input
          className="input"
          {...register('volume')}
          type="number"
          value={waterAmount}
          onChange={handleManualInputChange}
          style={{ padding: '16px 16px', borderRadius: '15px', width: '100%', border: '1px solid rgba(47, 47, 47, 0.15)', marginBottom: '24px' }}
          min="50"
          max="5000"
          step="1"
        />
        {errors.volume && <p className="error-message">{errors.volume.message}</p>}
      </div>

      <button
        type="submit"
        style={{ backgroundColor: 'var(--light-green)', color: '#323F47', border: 'none', padding: '0.75rem 1.5rem', cursor: 'pointer', borderRadius: '30px', transition: 'background-color var(--animation)' }}
      >
        Save
      </button>
    </form>
  );
};

export default WaterForm;
