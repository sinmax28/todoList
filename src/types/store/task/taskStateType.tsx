import {TaskType} from './taskTypes';

export default interface taskStateType {
  tasks: TaskType[];
  todos: {
    data: any;
    loading: boolean;
    err: string;
  };
}
