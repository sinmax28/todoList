import ACTIONS from './taskTypes';

const initialState = {
  tasks: [],
};

export default taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case ACTIONS.DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(obj => obj.id != action.payload),
      };

    default:
      return state;
  }
};
