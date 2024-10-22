import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../../config/apiConfig';

// Fetch groups data from the API
const fetchRelations = async () => {
  const response = await axiosInstance.post('/StoreTools/GetRelations');
  return response.data; // Optionally transform the data if needed
};

// Custom hook to fetch Relations
export const useFetchRelations = () => {
  return useQuery({
    queryKey: ['fetchRelations'], // Key to identify the query
    queryFn: fetchRelations, // Function to fetch data
    staleTime: 60000, // Cache data for 1 minute
    onError: (error) => {
      console.error('Error fetching data:', error.message);
      // Optionally, display a user-friendly message here
    },
  });
};
