import React from 'react';
import { connect } from 'react-redux';

import { NavLink } from 'react-router-dom';
import '../styles/scss/Header.scss';

const Header = ({ auth }) => {
  const { user } = auth;
  let navItem = (
    <div className="nbar">
      <NavLink to="/signup" activeClassName="is-active" className="navlink">Signup</NavLink>
      <NavLink to="/login" activeClassName="is-active" className="navlink">Login</NavLink>
      <NavLink to="/about" activeClassName="is-active" className="navlink">About</NavLink>
    </div>
  );

  if (user.email) {
    navItem = (
      <div className="nbar">
        <NavLink to="/about" className="navlink" activeClassName="is-active">About</NavLink>
      </div>
    );
  }

  return (
    <header className="heado">
      <NavLink to="/" activeClassName="is-active" exact className="navlink"> YEGHS </NavLink>
      {navItem}
    </header>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Header);
