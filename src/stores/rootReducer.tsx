import {combineReducers, Reducer} from 'redux';
import taskStateType from '../types/store/task/taskStateType';
import {TaskType} from '../types/store/task/taskTypes';
import taskReducer from './task/taskReducer';

const rootReducer = combineReducers({
  task: taskReducer,
});

export default rootReducer;
