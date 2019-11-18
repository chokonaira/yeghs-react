import axios from 'axios';

const axiosWithAuth = () => {
  const token = localStorage.getItem('jwtToken');
  return axios.create({
    baseURL: 'https://yeghs.herokuapp.com/',
    headers: {
      'Content-Type': 'application/json',
      token,
    },
  });
};

export default axiosWithAuth;
