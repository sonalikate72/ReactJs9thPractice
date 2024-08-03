import React, { useEffect, useState } from "react";
import UseAuth from "../Custom-hook/UseAuth";
import { useNavigate } from "react-router-dom";

function withAuthentication(WraapedComponenet) {
  return () => {
    const isAuthenticated = UseAuth();
    // const navigate = useNavigate();
    // const [isAuth,setAuth] = useState(false);
    // useEffect(() => {
    //     const token = localStorage.getItem('token');
    //     if (token) {
    //         setAuth(true)
    //     } else {
    //         setAuth(false)
    //     }
    // }, [navigate]);

    return isAuthenticated ? (
      <WraapedComponenet></WraapedComponenet>
    ) : (
      <div>You are not Authorized</div>
    );
  };
}

const Hoc = () => {
  return <div><h2> I am Authenticated Componenet</h2></div>;
};

export const AuthenticatedComponenet = withAuthentication(Hoc);
