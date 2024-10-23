import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../../config/apiConfig';

// Fetch groups data from the API
const fetchNotifications = async () => {
  const response = await axiosInstance.post('/StoreTools/GetNotifications');
  return response.data; // Optionally transform the data if needed
};

// Custom hook to fetch Notifications
export const useFetchNotifications = () => {
  return useQuery({
    queryKey: ['fetchNotifications'], // Key to identify the query
    queryFn: fetchNotifications, // Function to fetch data
    staleTime: 60000, // Cache data for 1 minute
    onError: (error) => {
      console.error('Error fetching data:', error.message);
      // Optionally, display a user-friendly message here
    },
  });
};
