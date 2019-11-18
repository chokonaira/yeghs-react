
// react libraries
import React from 'react';

// third party library
import { Route, Redirect } from 'react-router-dom';

// helpers
import AuthHelper from '../helpers/index';

/**
 * @desc renders header with links
 * @returns {object} route
 */
const AuthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (AuthHelper.validateToken()
      ? (
        <Component {...props} />
      )

      : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location },
          }}
        />
      ))
    }
  />
);

export default AuthenticatedRoute;
