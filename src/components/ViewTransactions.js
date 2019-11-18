import React from 'react';
import '../styles/css/utils.css';
import '../styles/css/dashboard.css';
import SideBar from './SideBar';


const ViewTransaction = () => (
  <div>
    <SideBar />
    <div className="wrap my-4" id="main">

      <div className="container">

        <div className="text-capitalize d-flex j-c-space-between a-i-center">
          <h1 className="active">Transastion History</h1>
        </div>

        <div className="card  my-2">
          <div className="my-1 d-flex justify-content a-i-center">
            <form className="search-form" action="" method="post">
              <div className="input-group search">
                <input type="text" name="" value="" placeholder="Search Account..." className="search-btn" />
                <button type="submit" className="btn m-2 btn-primary">
                                        Search
                </button>
              </div>
            </form>

          </div>
          <div className="table-container">
            <table>
              <thead>

                <tr>
                  <th>#</th>
                  <th>DateTime</th>
                  <th>Type</th>
                  <th>Cashier</th>
                  <th>Amount</th>
                  <th>New Balance</th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>1/3/2019</td>
                  <td>Debit</td>
                  <td>Abimbola Adeku</td>
                  <td>N5000</td>
                  <td>N52500</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>4/3/2019</td>
                  <td>Credit</td>
                  <td>Bosede Oye</td>
                  <td>N2500</td>
                  <td>N50000</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>10/3/2019</td>
                  <td>Debit</td>
                  <td>Abimbola Adeku</td>
                  <td>N35000</td>
                  <td>N15000</td>
                </tr>

                <tr>
                  <td>4</td>
                  <td>15/3/2019</td>
                  <td>Credit</td>
                  <td>Bosede Oye</td>
                  <td>N5000</td>
                  <td>N20000</td>
                </tr>

              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  </div>
);

export default ViewTransaction;
