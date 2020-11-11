import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route
        path={path}
        exact={exact}
        render={props => 
            !loggedIn ? <Component {...props} /> : <Redirect to='/discover' />
        }
    />
);

const Protected = ({ component: Component, loggedIn, ...rest }) => (
    <Route
        { ...rest }
        render={props =>
            !loggedIn ? (<Component {...props} />) : (<Redirect to='/login' />)
        }
    />
)

const mSTP = state => {
    return { loggedIn: Boolean(state.session.currentUser) };
};

export const ProtectedRoute = withRouter(connect(mSTP)(Protected));

export const AuthRoute = withRouter(connect(mSTP)(Auth));
