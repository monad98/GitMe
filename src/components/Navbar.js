import React from 'react';
import {UserBox} from "./UserBox";

const Navbar = ({user}) => (
  <nav id="mainNav" className="navbar navbar-default navbar-fixed-top navbar-inverse">
    <div className="container-fluid">
      {/*Brand and toggle get grouped for better mobile display */}
      <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a style={{color: '#8ef140'}} id="navGit" className="navbar-brand" href="/">GitME</a>
      </div>
      <div className="collapse navbar-collapse" id="myNavbar">
        <form className="navbar-form navbar-right" action="/search?_method=GET" role="search">
          <div className="form-group">
            <input id="search-input" name="qs" type="text" className="form-control" placeholder="Search"/>
          </div>
        </form>
        {user && <UserBox user={user} />}
      </div>
    </div>
  </nav>
);

export default Navbar;