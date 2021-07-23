import ACTIONS from './taskTypes';
import {TaskType} from '../../types/store/task/taskTypes';
import actionType from '../../types/store/task/actionType';
import taskStateType from '../../types/store/task/taskStateType';

const initialState: taskStateType = {
  tasks: [],
  todos: {
    data: [],
    loading: true,
    err: '',
  },
};

const taskReducer = (state = initialState, action: actionType) => {
  switch (action.type) {
    case ACTIONS.ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case ACTIONS.DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((obj: TaskType) => {
          if (typeof action.payload === 'number') {
            return obj.id !== action.payload;
          }
          return true;
        }),
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

export default taskReducer;
