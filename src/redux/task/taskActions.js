import ACTIONS from './taskTypes';

export const addTask = task => {
  return {
    type: ACTIONS.ADD_TASK,
    payload: task,
  };
};

export const deleteTask = id => {
  return {
    type: ACTIONS.DELETE_TASK,
    payload: id,
  };
};
