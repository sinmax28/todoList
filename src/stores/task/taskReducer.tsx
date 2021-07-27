// import ACTIONS from './taskTypes';
import {TaskType} from '../../types/store/task/taskTypes';
// import actionType from '../../types/store/task/actionType';
import taskStateType from '../../types/store/task/taskStateType';

import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../store';
// import { TaskType } from '../../types/store/task/taskTypes';

const initialState: taskStateType = {
  tasks: [],
  todos: {
    data: [],
    loading: true,
    err: '',
  },
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TaskType>) => {
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter(item => item.id !== action.payload);
    },
    toggleTask: (state, action: PayloadAction<number>) => {
      state.tasks.forEach(item => {
        if (item.id == action.payload) {
          item.complete = !item.complete;
        }
      });
    },
  },
});

//   state: taskStateType = initialState,
//   action: actionType,
// ): taskStateType => {
//   switch (action.type) {
//     case ACTIONS.ADD_TASK:
//       return {
//         ...state,
//         tasks: [...state.tasks, action.payload as TaskType],
//       };

//     case ACTIONS.DELETE_TASK:
//       return {
//         ...state,
//         tasks: state.tasks.filter((obj: TaskType) => {
//           if (typeof action.payload === 'number') {
//             return obj.id !== action.payload;
//           }
//           return true;
//         }),
//       };

//     case ACTIONS.TOGGLE_TASK:
//       return {
//         ...state,
//         tasks: state.tasks.map(item => ({
//           ...item,
//           complete: item.id === action.payload ? !item.complete : item.complete,
//         })),
//       };

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

//     default:
//       return state;
//   }
// };
export const {addTask, deleteTask, toggleTask} = taskSlice.actions;
export default taskSlice.reducer;
