import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './greeting/greeting'
import { applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getGreeting } from "./greeting/greeting";

const store = configureStore({
  reducer: {
    greeting: greetingReducer,
  }},
  composeWithDevTools(applyMiddleware(thunk, logger)),
);
store.dispatch(getGreeting());
export default store;