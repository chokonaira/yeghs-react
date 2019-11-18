import React from "react";
import { withRouter } from "react-router-dom";
import "../styles/css/utils.css";
import "../styles/css/dashboard.css";
import { compose } from "redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { connect } from "react-redux";
import { userTransfers } from "../actions/transferActions";
import Loader from "./loader";
import SideBar from "./SideBar";

class ViewTransactions extends React.Component {
  componentDidMount() {
    const { getUserTransfers } = this.props;
    console.log(this.props, "trasfers..........");

    getUserTransfers();
    // console.log(transfers, 'transfers')
  }

  render() {
    const { transfers, loading } = this.props;

    if (loading) {
      return (
        <div>
          <Loader />
        </div>
      );
    }

    return (
      <div>
        <SideBar />
        <div className="wrap my-8">
          <div className="container">
            <div className="text-capitalize d-flex j-c-space-between a-i-center my-4">
              <h1>Account Transaction Details</h1>
            </div>
            <div className="card  my-2">
              <div className="px-0 pb-2 my-2">
                <div className="container">
                  <div className="my-1 d-flex justify-content a-i-center" />
                  <div className="table-container">
                    <table>
                      <thead>
                        <tr>
                          <th>Acct ID</th>
                          <th>Account N0.</th>
                          <th>Amount</th>
                          <th>Beneficiary Email</th>
                          <th>Transaction Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {transfers.map(transfer => (
                          <tr>
                            <td>{transfer._id}</td>
                            <td>{transfer.accountNumber}</td>
                            <td>{transfer.amount}</td>
                            <td>{transfer.beneficiaryEmail}</td>
                            <td>{transfer.transactionDate}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SideBar />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth,
  account: state.account,
  transfers: state.transfers.transfers,
  loading: state.transfers.loading,
});

export default compose(
  withRouter,
  connect(mapStateToProps, { getUserTransfers: userTransfers })
)(ViewTransactions);
