import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startTimer, stopTimer, resetTimer } from '../store/actions';

const TimerDisplay = () => {
  const dispatch = useDispatch();
  const { timeLeft, isRunning } = useSelector((state) => ({
    timeLeft: state.timeLeft,
    isRunning: state.isRunning,
  }));

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <h1>{formatTime(timeLeft)}</h1>
      {!isRunning ? (
        <button onClick={() => dispatch(startTimer())}>Start</button>
      ) : (
        <button onClick={() => dispatch(stopTimer())}>Stop</button>
      )}
      <button onClick={() => dispatch(resetTimer())}>Reset</button>
    </div>
  );
};

export default TimerDisplay;