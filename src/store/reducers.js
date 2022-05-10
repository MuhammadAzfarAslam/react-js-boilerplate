import { combineReducers } from '@reduxjs/toolkit'
import users from './slices/usersSlice'
import counter from './slices/counterSlice'
import appSlice from './slices/app-slice';

export const combinedReducer = combineReducers({
  counter,
  users,
  appSlice,
});