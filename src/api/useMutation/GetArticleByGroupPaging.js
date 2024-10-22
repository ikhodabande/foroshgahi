import { useMutation } from '@tanstack/react-query';
import axiosInstance from '../../config/apiConfig';

const GetArticleByGroupPaging = async (newData) => {
  const response = await axiosInstance.post('/Store/GetArticleByGroupPaging', newData);
  return response.data;  // Adjust this based on the actual API response structure
};

export const useGetArticleByGroupPaging = () => {
  return useMutation({
    mutationFn: GetArticleByGroupPaging,
    onSuccess: (data) => {
    },
    onError: (error) => {
    },
  });
};
