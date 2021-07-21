import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from './rootReducer';

export default store = createStore(rootReducer, applyMiddleware(reduxThunk));
