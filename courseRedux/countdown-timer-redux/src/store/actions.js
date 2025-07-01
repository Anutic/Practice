export const SET_TIME = 'SET_TIME';
export const START_TIMER = 'START_TIMER';
export const STOP_TIMER = 'STOP_TIMER';
export const TICK = 'TICK';
export const RESET_TIMER = 'RESET_TIMER';

let intervalId = null;

export const setTime = (minutes, seconds) => ({
  type: SET_TIME,
  payload: { minutes, seconds },
});

export const startTimer = () => (dispatch, getState) => {
  const { isRunning } = getState();
  if (!isRunning) {
    dispatch({ type: START_TIMER });
    intervalId = setInterval(() => dispatch(tick()), 1000);
  }
};

export const stopTimer = () => (dispatch) => {
  clearInterval(intervalId);
  dispatch({ type: STOP_TIMER });
};

export const resetTimer = () => (dispatch) => {
  clearInterval(intervalId);
  dispatch({ type: RESET_TIMER });
};

export const tick = () => (dispatch, getState) => {
  const { timeLeft } = getState();
  if (timeLeft > 0) {
    dispatch({ type: TICK });
  } else {
    dispatch(stopTimer());
  }
};