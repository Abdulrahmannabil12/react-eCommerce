import React from "react";
import {
     useRoutes,
     Navigate,
} from "react-router-dom";
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { selectCurrentUser } from '../Redux/user/user.selectors.js';
import HomePage from "../pages/home-page/home-page.component";
import ShopPage from "../pages/shop/shop.component";
import SignInSignUpComponent from "../pages/sign-in-sign-up/sign-in-sign-up.component";
 function RoutesDta({ currentUser }) {
       let routes = useRoutes([
          { path: "/", element: <HomePage /> },
          { path: "/shop", element: <ShopPage /> },
           { path: "/signin", element: <> {currentUser ? <Navigate to='/' /> : <SignInSignUpComponent />} </> },
          // ...
     ]);

     return routes;
}

const mapStateToProps = createStructuredSelector({
     currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(RoutesDta);
