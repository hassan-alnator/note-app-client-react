import React, { Component, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import Routes from "./Routes";
import { Auth } from "aws-amplify";


import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      isAuthenticating: true
    };
  }

  async componentDidMount() {
    try {
      await Auth.currentSession();
      this.userHasAuthenticated(true);
    }
    catch(e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }
  
    this.setState({ isAuthenticating: false });
  }
  

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }

  handleLogout = async event => {
    await Auth.signOut();
  
    this.userHasAuthenticated(false);

    this.props.history.push("/login");
  }
  

  render() {

    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };

    return (
      !this.state.isAuthenticating &&
      <div className="App container">
        <Link to="/">Scratch</Link>
        {this.state.isAuthenticated ? <Link onClick={this.handleLogout}>Logout</Link> :
          <Fragment>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
          </Fragment>}
        <hr />
        <Routes childProps={childProps} />
      </div>
    );
  }
}

export default withRouter(App);
