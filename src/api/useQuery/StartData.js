import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../../config/apiConfig';

// Fetch groups data from the API
const fetchStartData = async () => {
  const response = await axiosInstance.post('/Store/StartData2');
  return response.data; // Optionally transform the data if needed
};

// Custom hook to fetch StartData
export const useFetchStartData = () => {
  return useQuery({
    queryKey: ['fetchStartData'], // Key to identify the query
    queryFn: fetchStartData, // Function to fetch data
    staleTime: 60000, // Cache data for 1 minute
    onError: (error) => {
      console.error('Error fetching data:', error.message);
      // Optionally, display a user-friendly message here
    },
  });
};
