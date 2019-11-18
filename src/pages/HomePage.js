import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/css/style.css';
import '../styles/css/utils.css';


export const YeghsHomePage = ({ auth: { user } }) => (
  <div className="conti">
    <div className="wrapper d-flex flex-col  a-i-center">
      <h2 className="get-started1">Smart Transfer...</h2>
      {
       user.email
         ? <Link to="/dashboard" className="get-started">Return to Dashboard</Link>
         : <Link to="/signup" className="get-started">Get Started</Link>
     }
    </div>
  </div>
);

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(YeghsHomePage);
