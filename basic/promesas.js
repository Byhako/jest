import axios from 'axios';

export const promesa = (url) => (
  axios.get(url)
    .then(({ data }) => data));
