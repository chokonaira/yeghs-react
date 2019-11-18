import React from 'react';
import PropTypes from 'prop-types';

const inputField = props => (
  <div>
    <p>{props.label}</p>
    <input
      className={props.classes}
      type={props.type}
      name={props.name}
      value={props.value}
      onChange={props.change}
    />
    <div className="invalid-feedback">{props.error}</div>
  </div>
);

inputField.propTypes = {
  value: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  classes: PropTypes.string.isRequired,
  error: PropTypes.string,
};

inputField.defaultProps = {
  error: '',
};

export default inputField;
