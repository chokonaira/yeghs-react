import React, { Fragment } from 'react';
import '../styles/css/utils.css';
import '../styles/css/dashboard.css';

const ViewTransfer = ({ accounts: { accounts } }) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const { firstname, lastname } = user;
  return (
    <div>
      <div className="wrap my-8">
        <div className="container">
          <div className="text-capitalize d-flex j-c-space-between a-i-center my-4">
            <h1>All Account Transfers</h1>
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
                        <th>Full Name</th>
                        <th>Acct No.</th>
                        <th>Amount</th>
                        <th>Acct type</th>

                      </tr>
                    </thead>
                    <tbody>
                      {accounts.slice(0, 4).map((account, index) => (
                        <Fragment>
                          <tr>
                            <td>{index + 1}</td>
                            <td className="text-uppercase">
                              {firstname}
                              {' '}
                              {lastname}
                            </td>
                            <td>{account.accountno}</td>
                            <td>
                              {`N${account.openingbalance}`}
                            </td>
                            <td>
                              Savings
                              {`  ${account.type}`}
                            </td>
                          </tr>
                        </Fragment>
                      ))}

                    </tbody>
                  </table>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewTransfer;
