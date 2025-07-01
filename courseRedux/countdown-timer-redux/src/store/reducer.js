import { SET_TIME, START_TIMER, STOP_TIMER, TICK, RESET_TIMER } from './actions';

const initialState = {
  initialTime: 0,
  timeLeft: 0,
  isRunning: false,
};

const timerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TIME:
      const minutes = Math.max(0, action.payload.minutes || 0);
      const seconds = Math.max(0, Math.min(59, action.payload.seconds || 0));
      const totalSeconds = minutes * 60 + seconds;
      return {
        ...state,
        initialTime: totalSeconds,
        timeLeft: totalSeconds,
        isRunning: false,
      };

    case START_TIMER:
      return {
        ...state,
        isRunning: true,
      };

    case STOP_TIMER:
      return {
        ...state,
        isRunning: false,
      };

    case TICK:
      return {
        ...state,
        timeLeft: Math.max(0, state.timeLeft - 1),
      };

    case RESET_TIMER:
      return {
        ...state,
        timeLeft: state.initialTime,
        isRunning: false,
      };

    default:
      return state;
  }
};

export default timerReducer;