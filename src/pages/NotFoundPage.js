import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/css/style.css';
import '../styles/css/utils.css';


const NotFoundPage = () => (
  <div className="cont">
    <div className="wrapper d-flex flex-col  a-i-center">
      <h2 className="get-started1">PAGE NOT FOUND!</h2>
      <Link to="/">Go home</Link>
    </div>

  </div>
);

export default NotFoundPage;
