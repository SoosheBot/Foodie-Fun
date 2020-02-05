import axios from 'axios';

export const axiosWithAuth = () => {
  console.log('axiosWithAuth is firing!');
  const token = localStorage.getItem('token');
  return axios.create({
    baseURL: 'https://foodiefunbw.herokuapp.com/', //change when provided
    headers: {
      authorization: token
    }
  });
};