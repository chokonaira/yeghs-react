
import jwt from 'jsonwebtoken';


const AuthHelper = {
  decodeToken(token) {
    let decoded = {};
    try {
      decoded = jwt.decode(token);
    } catch (error) {
      decoded = {
        error: error.message,
      };
    }
    return decoded;
  },

  validateToken() {
    const token = localStorage.getItem('jwtToken');
    if (!token) {
      return false;
    }
    const decoded = AuthHelper.decodeToken(token);
    if (decoded.error) {
      return false;
    }
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime || decoded.exp === undefined) {
      return false;
    }
    return true;
  },
};

export default AuthHelper;
