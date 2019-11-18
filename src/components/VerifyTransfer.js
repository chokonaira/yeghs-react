import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  verifyTransfers,
  clearTransferCreatedState
} from '../actions/transferActions';
import Loader from './loader';
import SideBar from './SideBar';
import '../styles/css/utils.css';
import '../styles/css/dashboard.css';

class VerifyTransfer extends Component {
  constructor() {
    super();
    this.state = {
      OTP: ''
    };
  }

  componentDidUpdate() {
    const {
      verifyOTP: { verified },
      history
    } = this.props;

    if (verified) {
      this.props.clearTransferCreatedState();
      history.push('/dashboard');

      toast.success('Transfer completed succesfully');
    }
  }

  onSubmit = event => {
    event.preventDefault();
    const { OTP } = this.state;
    const VerifyData = {
      OTP
    };
    this.props.verifyTransfers(VerifyData);
  };

  onChange = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const {
      verifyOTP: { loading },
      history
    } = this.props;
    if (loading) {
      return (
        <div>
          <Loader />
        </div>
      );
    }

    return (
      <div>
        <SideBar history={history} />
        <div className="wrap my-8">
          <div className="text-capitalize d-flex j-c-space-between a-i-center my-4">
            <h1 className="ml-4">Verify OTP</h1>
          </div>
          <div className="card d-flex flex-row j-c-center a-i-center h-50">
            <section className="wrapper d-flex flex-col j-c-center a-i-center">
              <div className="form-group">
                <p>OTP</p>
                <input
                  style={{ width: '348px' }}
                  type="number"
                  name="OTP"
                  className="form-control"
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <button
                  style={{ width: '348px' }}
                  type="submit"
                  className="btn-default"
                  id="sign-up"
                  onClick={this.onSubmit}
                >
                  Send
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

VerifyTransfer.propTypes = {
  makeTransfers: PropTypes.func
};

const mapStateToProps = state => ({
  auth: state.auth,
  account: state.account,
  verifyOTP: state.verifyOTP
});

export default compose(
  withRouter,
  connect(mapStateToProps, { verifyTransfers, clearTransferCreatedState })
)(VerifyTransfer);
