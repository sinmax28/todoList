import taskStateType from './taskStateType';
import {TaskType} from './taskTypes';

export default interface actionType {
  type: string;
  payload?: TaskType | number | string;
}
