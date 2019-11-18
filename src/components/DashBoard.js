import React from 'react';
import { withRouter } from 'react-router-dom';
import '../styles/css/utils.css';
import '../styles/css/dashboard.css';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { userTransfers } from '../actions/transferActions';
import ViewTransfer from './ViewTransfer';
import SideBarMenu from './SideBar';


class Dashboard extends React.Component {
  componentDidMount() {
    const { auth: { user: { email } }, getUserAccounts } = this.props;
    getUserAccounts(email);
  }

  render() {
    const { accounts, MakeTransfer, history } = this.props;
    console.log(this.props);
    return (
      <div>
        <SideBarMenu history={history} />
        <ViewTransfer accounts={accounts} />
      </div>
    );
  }
}

Dashboard.defaultProps = {
  match: { },
};

Dashboard.propTypes = {
  userAccounts: propTypes.func.isRequired,
  match: propTypes.objectOf(propTypes.any),
};

const mapStateToProps = state => ({
  auth: state.auth,
  accounts: state.accounts,
  MakeTransfer: state.MakeTransfer,
});

export default compose(
  withRouter,
  connect(mapStateToProps, { getUserAccounts: userTransfers }),
)(Dashboard);
