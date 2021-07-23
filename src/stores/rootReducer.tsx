import {combineReducers, Reducer} from 'redux';
import taskStateType from '../types/store/task/taskStateType';
import {TaskType} from '../types/store/task/taskTypes';
import taskReducer from './task/taskReducer';

interface rootReducerInterface {
  task: Reducer<taskStateType, any>;
}

const rootReducer = combineReducers<rootReducerInterface>({
  task: taskReducer,
});

export default rootReducer;
