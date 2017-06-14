import React from "react";

export const UserBox = ({user}) => (
  <div>
    <div className="text-center">
      <a href="/mypage"><img className=" navbar-right"  alt="Brand" src={user.photo} id="loginPhoto"/></a>
      <p className="navbar-text navbar-right">Signed in as <b>{user.name}</b></p>
    </div>
    <form className="navbar-form navbar-right text-center" role="search">
      <a href="/api/auth/logout" className="btn btn-danger">Log Out</a>
    </form>
  </div>
);

