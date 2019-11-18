import React from 'react';
import jwtDecode from 'jwt-decode';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Header from '../components/Header';
import YeghsHomePage from '../pages/HomePage';
import YeghsSignupPage from '../pages/SignupPage';
import YeghsLoginPage from '../pages/LoginPage';
import YeghsAboutPage from '../pages/AboutPage';
import NotFoundPage from '../pages/NotFoundPage';
import DashboardPage from '../pages/DashboardPage';
import MakeTransfer from '../components/MakeTransfer';
import ViewTransactions from '../components/ViewTransactions';
import VerifyTransfer from '../components/VerifyTransfer';
import AuthenticatedRoute from './AuthenticatedRoute';
import setAuthToken from '../utils/setAuthToken';
import { setCurrentUser } from '../actions/authActions';
import store from '../store';

const token = localStorage.jwtToken;
let loggedInUser = {};

if (token !== undefined) {
  setAuthToken(token);
  const decoded = jwtDecode(token);
  loggedInUser = store.dispatch(setCurrentUser(decoded));
}

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <ToastContainer />
      <Switch>
        <Route path="/" component={YeghsHomePage} exact />
        <Route path="/signup" component={YeghsSignupPage} exact />
        <Route path="/login" component={YeghsLoginPage} exact />
        <Route path="/about" component={YeghsAboutPage} exact />
        <AuthenticatedRoute path="/dashboard" component={DashboardPage} />
        <AuthenticatedRoute path="/transfer" component={MakeTransfer} />
        <AuthenticatedRoute path="/verify" component={VerifyTransfer} />
        <AuthenticatedRoute path="/transactions" component={ViewTransactions} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
