import React from 'react';
import '../styles/css/utils.css';
import '../styles/css/dashboard.css';

const ViewAccount = ({ accounts }) => {
  const {
    accountNumber, balance, holderEmail, phone, BVN 
  } = accounts;
  return (
    <div>
      <div className="wrap my-8">
        <div className="container">
          <div className="text-capitalize d-flex j-c-space-between a-i-center my-4">
            <h1>Bank Account Details</h1>
          </div>
          <div className="card  my-2">
            <div className="px-0 pb-2 my-2">
              <div className="container">
                <div className="my-1 d-flex justify-content a-i-center" />
                <div className="table-container">
                  <table>
                    <thead>
                      <tr>
                        <th>Account N0.</th>
                        <th>Acct Bal.</th>
                        <th>Holder Email</th>
                        <th>Phone</th>
                        <th>BVN</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{accountNumber}</td>
                        <td>{`N${balance}`}</td>
                        <td>{holderEmail}</td>
                        <td>{phone}</td>
                        <td>{BVN}</td>
                      </tr>
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

export default ViewAccount;
