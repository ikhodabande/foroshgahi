import React from 'react'
import { login } from '../../../store/slices/authslice/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
      // Perform login logic here (e.g., API call)
      console.log('first')
      dispatch(login());
      navigate("/profile")
  };

  return (
      <div className='absolute w-full h-screen z-20 bg-white '>
          <h2>Login</h2>
          <button  className='bg-logo' onClick={handleLogin}>Log In</button>
      </div>
  );
};
