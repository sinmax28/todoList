import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducer from './rootReducer';
import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
// const store = createStore(persistedReducer, applyMiddleware(reduxThunk));

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});
export const persistor = persistStore(store);
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
