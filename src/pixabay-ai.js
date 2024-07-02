import axios from 'axios';

export const BASE_URL = 'https://pixabay.com/api/';

const API_KEY = '43079941-e5e991934da9723ea56a17ec5';

export const getAPI = async (query, page) => {
  const url = `${BASE_URL}?query=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

  const response = await axios.get(url);

  return response.data;
};
