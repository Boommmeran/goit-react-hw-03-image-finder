import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '33080528-fff048daf9c61a3271b838112';

export const fetchImages = async (searchQuery, page) => {
  const response = await axios.get(
    `?q=${searchQuery}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data;
};