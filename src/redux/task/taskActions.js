import ACTIONS from './taskTypes';
import axios from 'axios';
import {response} from 'express';

export const addTask = task => {
  return {
    type: ACTIONS.ADD_TASK,
    payload: task,
  };
};

export const deleteTask = id => {
  return {
    type: ACTIONS.DELETE_TASK,
    payload: id,
  };
};

export const toggleTask = id => {
  return {
    type: ACTIONS.TOGGLE_TASK,
    payload: id,
  };
};

// export const asyncCall = () => {
//   return dispatch => {
//     dispatch({type: ACTIONS.API_LOADING});
//     axios
//       .get('https://jsonplaceholder.typicode.com/todos')
//       .then(response => {
//         data = response.data;
//         console.log('aici raspunsu: ');
//         console.log(data);
//         dispatch({type: ACTIONS.API_SUCCESS, payload: data});
//       })
//       .catch(err => {
//         console.log('eroare man: ');
//         console.log(err);
//         dispatch({type: ACTIONS.API_ERROR, payload: err});
//       });
//   };
// };
