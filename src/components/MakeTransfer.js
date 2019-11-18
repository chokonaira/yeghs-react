import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { makeTransfers, clearTransferCreatedState } from '../actions/transferActions';
import Loader from './loader';
import SideBar from './SideBar';
import '../styles/css/utils.css';
import '../styles/css/dashboard.css';


class MakeTransfer extends Component {
  constructor() {
    super();
    this.state = {
      amount: '',
      beneficiaryEmail: '',
      pin: '',
    };
  }

  componentDidUpdate() {
    const { MakeTransfer: { account, created }, history } = this.props;

    if (account.accountno && created) {
      this.props.clearTransferCreatedState();
      toast.success('Please check your phone for an OTP to complete');
      history.push('/dashboard');
    }
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { amount, beneficiaryEmail, pin } = this.state;
    const TransferData = {
      amount,
      beneficiaryEmail,
      pin,
    };
    this.props.makeTransfers(TransferData);
  }

  onChange = (event) => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { MakeTransfer: { loading }, history, } = this.props;

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
            <h1>Make a transfer</h1>
          </div>
          <div className="card d-flex flex-row j-c-center a-i-center h-50">
            <section className="wrapper d-flex flex-col j-c-center a-i-center">

              <div className="form-group">
                <p>Amount</p>
                <input
                  style={{ width: '348px' }}
                  type="number"
                  name="amount"
                  className="form-control"
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <p>Beneficiary Email</p>
                <input
                  style={{ width: '348px' }}
                  type="text"
                  name="beneficiaryEmail"
                  className="form-control"
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <p>Pin</p>
                <input
                  style={{ width: '348px' }}
                  type="number"
                  name="pin"
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

MakeTransfer.propTypes = {
  makeTransfers: PropTypes.func,
};

const mapStateToProps = state => ({
  auth: state.auth,
  account: state.account,
  MakeTransfer: state.MakeTransfer,
});

export default compose(
  withRouter, connect(mapStateToProps, { makeTransfers, clearTransferCreatedState }),
)(MakeTransfer);
