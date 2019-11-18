import React from 'react';
import { withRouter } from 'react-router-dom';
import '../styles/css/utils.css';
import '../styles/css/dashboard.css';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { userAccount } from '../actions/accountActions';
import ViewAccount from './ViewAccount';
import SideBarMenu from './SideBar';


class Dashboard extends React.Component {
  componentDidMount() {

    const { getUserAccount } = this.props;
    getUserAccount();
    console.log(this.props, 'kkkkkkkkkkkkkkkkkkkkkkkkkk')
  }


  render() {
    const { accounts, history } = this.props;

    return (
      <div>
        <SideBarMenu history={history} />
        <ViewAccount accounts={accounts} />
      </div>
    );
  }
}

Dashboard.propTypes = {
  getUserAccount: propTypes.func.isRequired,
  match: propTypes.objectOf(propTypes.any),
};

const mapStateToProps = state => ({
  auth: state.auth,
  accounts: state.accounts.accounts,
  MakeTransfer: state.MakeTransfer,
  transfers: state.transfers,
});

export default compose(
  withRouter,
  connect(mapStateToProps, { getUserAccount: userAccount }),
)(Dashboard);
