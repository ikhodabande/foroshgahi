import { useMutation } from '@tanstack/react-query';
import axiosInstance from '../../config/apiConfig';

const GetArticleByGroup = async (newData) => {
  const response = await axiosInstance.post('/Store/GetArticleByGroup', newData);
  return response.data;  
};

export const useGetArticleByGroup = () => {
  return useMutation({
    mutationFn: GetArticleByGroup,
    onSuccess: (data) => {
    },
    onError: (error) => {
    },
  });
};
