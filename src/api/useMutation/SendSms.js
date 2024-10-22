import { useMutation } from '@tanstack/react-query';
import axiosInstance from '../../config/apiConfig';

const sendSms = async (newData) => {
  const response = await axiosInstance.post('/Store/SendSms', newData);
  return response.data;  // Adjust this based on the actual API response structure
};

export const useSendSms = () => {
  return useMutation({
    mutationFn: sendSms,
    onSuccess: (data) => {
      console.log('SMS sent successfully:', data); // Handle side effects here if needed
    },
    onError: (error) => {
      console.error('Error sending SMS:', error.message); // Handle error display to users
    },
  });
};
