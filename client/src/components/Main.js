import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Cars from './Cars'
import Login from './Login'
import Auth from '../auth/Auth'
import Callback from './Callback'

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

class Main extends Component {
  render() {
    return (
      <div>
        <main>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/cars' component={Cars} />
            <Route render={(props) => <Login auth={auth} />} />
            <Route path="/callback" render={(props) => {
              handleAuthentication(props);
              return <Callback />
            }}/>
          </Switch>
        </main>
      </div>
    );
  }
}

export default Main
