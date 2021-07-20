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

      //   console.log(state.tasks);
      return {
        ...state,
        tasks: newTasks,
      };
    }

    default:
      return state;
  }
};
