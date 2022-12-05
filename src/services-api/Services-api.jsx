import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '29878778-792a80536ef138b77329a15b8';

export default async function getImages(query, page) {
  const response = await axios.get(
    `${BASE_URL}?key=${API_KEY}&q=${query}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response;
}
