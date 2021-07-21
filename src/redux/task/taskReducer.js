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

    case ACTIONS.TOGGLE_TASK: {
      //   let taskToUpdate = state.tasks.find(obj => obj.id === action.payload);
      //   console.log('-------------');
      //   let status =  !taskToUpdate.complete;
      //   console.log(taskToUpdate);

      let newTasks = [];

      state.tasks.forEach(item => {
        if (item.id === action.payload) {
          let newTask = {
            ...item,
            complete: !item.complete,
          };
          newTasks.push(newTask);
        } else {
          newTasks.push(item);
        }
      });

      return {
        ...state,
        tasks: newTasks,
      };
    }

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
