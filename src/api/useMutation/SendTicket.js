import { useMutation } from '@tanstack/react-query';
import axiosInstance from '../../config/apiConfig';

const sendTicket = async (newData) => {
  const response = await axiosInstance.post('/Store/SendTicket', newData);
  return response.data;  // Adjust this based on the actual API response structure
};

export const useSendTicket = () => {
  return useMutation({
    mutationFn: sendTicket,
    onSuccess: (data) => {
      console.log('Ticket sent successfully:', data); // Handle side effects here if needed
    },
    onError: (error) => {
      console.error('Error sending Ticket:', error.message); // Handle error display to users
    },
  });
};
