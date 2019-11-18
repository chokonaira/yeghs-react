import axios from 'axios';

const setAuthToken = (token) => {
  if (token) {
    // Apply to every request
    axios.defaults.headers.common.authorization = `Token ${token}`;
    axios.defaults.headers.common['Content-Type'] = 'application/json';
  } else {
    // Delete Auth Header
    delete axios.defaults.headers.common.authorization;
  }
};

export default setAuthToken;
