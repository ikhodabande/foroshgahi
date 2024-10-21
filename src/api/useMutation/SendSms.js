// src/api/useMutation/SendSms.js
import { useMutation } from '@tanstack/react-query';
import axiosInstance from '../../config/apiConfig';

const SendSms = async (newData) => {
  const response = await axiosInstance.post('/SendSms', newData);
  return response.data;
};

export const UseSendSms = () => {
  return useMutation(SendSms, {
    onSuccess: (data) => {
      console.log('Data submitted successfully:', data);
    },
    onError: (error) => {
      console.error('Error submitting data:', error.message);
    },
  });
};
