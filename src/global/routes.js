import React from "react";
import {
     useRoutes,
} from "react-router-dom";

import HomePage from "../pages/home-page/home-page.component";
import ShopPage from "../pages/shop/shop.component";
import SignInSignUpComponent from "../pages/sign-in-sign-up/sign-in-sign-up.component";
export default function RoutesDta() {
    let routes = useRoutes([
        { path: "/", element: <HomePage /> },
        { path: "/shop", element: <ShopPage /> },
        { path: "/signin", element: <SignInSignUpComponent /> },
         // ...
    ]);
    return routes;
}

