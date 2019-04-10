import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from "react-redux";

const privateRoute = ({component: Component, isAuth, ...rest}) => (
    <Route
        {...rest}
        render={(props) => isAuth
            ? (<Component {...props} />)
            : (<Redirect to={{pathname: '/login', state: {from: props.location}}} />)}
    />
);

const mapStateToProps = (state) => ({
    isAuth: !!state.user.token
});

export default connect(mapStateToProps)(privateRoute);