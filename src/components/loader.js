import React from 'react';
import PropTypes from 'prop-types';
import '../styles/scss/loader.scss';


const Loader = ({ loading }) => {
  let active;
  if (loading) {
    active = 'loader';
  } else {
    active = '';
  }
  return (
    <div className="loader-box">
      <div className={`${active} center`} />
      <h3 className="loader-text">Loading...</h3>
    </div>
  );
};

Loader.propTypes = {
  loading: PropTypes.bool,
};

Loader.defaultProps = {
  loading: '',
};

export default Loader;
