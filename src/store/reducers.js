import { combineReducers } from '@reduxjs/toolkit'
import users from './slices/usersSlice'
import counter from './slices/counterSlice'
import app from './slices/app-slice';

export const combinedReducer = combineReducers({
  counter,
  users,
  app,
});