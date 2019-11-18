import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { loginUser } from '../actions/authActions';
import Loader from '../components/loader';
import '../styles/css/style.css';
import '../styles/css/utils.css';

export class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  componentDidUpdate() {
    const { auth, history } = this.props;
    if (auth.isAuthenticated) {
      history.push('/dashboard');
    }
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    const userData = {
      email,
      password,
    };
    this.props.loginUser(userData);
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { email, password } = this.state;
    const { errors, auth } = this.props;
    const { error } = errors;
    const { loading } = auth;

    if (loading) {
      return (
        <div>
          <Loader />
        </div>
      );
    }

    return (
      <div className="conti">
        <div className="wrapper d-flex flex-col j-c-center a-i-center">
          <div className="form-wrap">
            <h2 className="text-center">Login</h2>
          </div>
          <form className="col-sm-5 main-form" onSubmit={this.onSubmit} ref={this.formRef} noValidate>
            <div className="form-group">
              <p>Email:</p>
              <input
                type="email"
                className={classnames('form-control form-control-lg', {
                  // 'is-invalid': error.email,
                })}
                placeholder="Email Address"
                name="email"
                value={email}
                onChange={this.onChange}
              />
              {/* {error.email && (
              <div className="invalid-feedback">{error.email}</div>
              )} */}
            </div>
            <div className="form-group">
              <p>Password:</p>
              <input
                type="password"
                className={classnames('form-control form-control-lg', {
                  // 'is-invalid': error.password,
                })}
                placeholder="Password"
                name="password"
                value={password}
                onChange={this.onChange}
              />
              {/* {error.password && (
              <div className="invalid-feedback">{error.password}</div>
              )} */}
            </div>
            <input type="submit" value="Submit" id="submit" className="btn-default" />
            <div className="link">
              <p className="p">Dont have an account? </p>
              {' '}
              <Link to="/signup">Signup </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

LoginForm.propTypes = {
  loginUser: PropTypes.func,
  auth: PropTypes.object,
  errors: PropTypes.object,
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(LoginForm);
