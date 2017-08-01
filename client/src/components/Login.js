import React, { Component } from 'react'
import auth0 from 'auth0-js'

class Login extends Component {

  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        <h2>Log in</h2>
        <button onClick={this.goTo.bind(this, '/')}>Home</button>
        {
          !isAuthenticated() && (
              <button onClick={this.login.bind(this)}>Log In</button>
            )
        }
        {
          isAuthenticated() && (
              <button onClick={this.logout.bind(this)}>Log Out</button>
            )
        }
      </div>
    );
  }
}

export default Login
