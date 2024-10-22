import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../../config/apiConfig';

const fetchUser = async () => {
  const response = await axiosInstance.get('/Store/User');
  return response.data;
};

export const useFetchUser = () => {
  return useQuery(['fetchUser'], fetchUser, {
    staleTime: 60000, // Cache data for 1 minute
    onError: (error) => {
      console.error('Error fetching data:', error.message);
    },
  });
};
