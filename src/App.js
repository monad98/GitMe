import React, {Component} from "react";
import PropTypes from 'prop-types'
import { Route } from 'react-router';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
// import { withRouter } from 'react-router'
// import { NavLink } from 'react-router-dom'
import './App.css';
import {getUser} from "./helper/index";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount () {
    getUser().then(user => {
      console.log(user);
      this.setState({ user });
    }, () => {
      this.setState({ user: null });
    });
  }

  render() {
    return (
      <div>
        <Navbar user={this.state.user} />
        <Route path="/" render={({user}) => <Home user={this.state.user} />} />
        <Footer />
      </div>
    );
  }
}

export default App;