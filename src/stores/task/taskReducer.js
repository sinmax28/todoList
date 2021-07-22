import ACTIONS from './taskTypes';

const initialState = {
  tasks: [],
  todos: {
    data: [],
    loading: true,
    err: '',
  },
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

    case ACTIONS.TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(item => ({
          ...item,
          complete: item.id === action.payload ? !item.complete : item.complete,
        })),
      };

    // case ACTIONS.API_LOADING:
    //   return {
    //     ...state,
    //     todos: {
    //       loading: true,
    //       data: [],
    //       err: '',
    //     },
    //   };

    // case ACTIONS.API_SUCCESS:
    //   return {
    //     ...state,
    //     todos: {
    //       loading: false,
    //       data: action.payload,
    //       err: '',
    //     },
    //   };

    // case ACTIONS.API_ERROR:
    //   return {
    //     ...state,
    //     todos: {
    //       loading: false,
    //       data: [],
    //       err: action.payload,
    //     },
    //   };

    default:
      return state;
  }
};