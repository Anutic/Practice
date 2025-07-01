import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setTime } from '../store/actions';

const TimerInput = () => {
  const dispatch = useDispatch();
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    const parsedValue = value === '' ? '' : parseInt(value) || 0;
    if (name === 'minutes') {
      setMinutes(parsedValue);
    } else if (name === 'seconds') {
      if (parsedValue >= 0 && (parsedValue <= 59 || value === '')) {
        setSeconds(parsedValue);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setTime(parseInt(minutes) || 0, parseInt(seconds) || 0));
    setMinutes('');
    setSeconds('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        name="minutes"
        min="0"
        value={minutes}
        onChange={handleChange}
        placeholder="Minutes"
      />
      <input
        type="number"
        name="seconds"
        min="0"
        max="59"
        value={seconds}
        onChange={handleChange}
        placeholder="Seconds"
      />
      <button type="submit">Set Time</button>
    </form>
  );
};

export default TimerInput;