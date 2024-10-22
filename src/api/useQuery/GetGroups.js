import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../../config/apiConfig';

// Fetch groups data from the API
const fetchGroups = async () => {
  const response = await axiosInstance.get('/GetGroups');
  return response.data; // Optionally transform the data if needed
};

// Custom hook to fetch groups
export const useFetchGroups = () => {
  return useQuery({
    queryKey: ['fetchGroups'], // Key to identify the query
    queryFn: fetchGroups, // Function to fetch data
    staleTime: 60000, // Cache data for 1 minute
    onError: (error) => {
      console.error('Error fetching data:', error.message);
      // Optionally, display a user-friendly message here
    },
  });
};
