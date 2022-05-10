import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { setToken } from 'store/slices/app-slice';

const View = () => {
  const dispatch = useDispatch();
  const loginHandler = () => {
    dispatch(setToken("new Date.now()"));
  }
  
  return (
    <div>Login
      <button onClick={loginHandler}>Login</button>
    </div>
  )
}

export default View