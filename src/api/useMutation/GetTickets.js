import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../../config/apiConfig';

// Fetch groups data from the API
const fetchTickets = async () => {
  const response = await axiosInstance.post('/Store/GetTickets');
  return response.data; // Optionally transform the data if needed
};

// Custom hook to fetch Tickets
export const useFetchTickets = () => {
  return useQuery({
    queryKey: ['fetchTickets'], // Key to identify the query
    queryFn: fetchTickets, // Function to fetch data
    staleTime: 60000, // Cache data for 1 minute
    onError: (error) => {
      console.error('Error fetching data:', error.message);
      // Optionally, display a user-friendly message here
    },
  });
};
