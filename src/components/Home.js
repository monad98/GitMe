import React from "react";
import PropTypes from 'prop-types'
import logo from '../assets/img/gitme.png';
import Carousel from './Carousel';
import {login} from '../helper';
const performRedirect = (path) => (
  window.location.href = path
);




export default class Home extends React.Component{

  constructor(props) {
    super(props);
  }
  handleClick() {
    performRedirect('/api/auth/github');
  }

  render() {
    const {user} = this.props;
    console.log(user);
    if (user) console.log("USER: " + user.name);
    return (
      <div>
        <div id="gitMeImage" className="container-fluid text-center">
          <img src={logo} alt="logo"/>
          <br/>
          {
            !user &&
            <a id="loginSubmitButton" className="btn btn-lg btn-success" href="/api/auth/github">
              <i className="fa fa-github" aria-hidden="true"></i>  Login with Github
            </a>
          }
        </div>
        <Carousel/>
      </div>
  );
  }
}
Home.propTypes = {
};
