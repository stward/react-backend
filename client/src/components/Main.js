import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Cars from './Cars'

class Main extends Component {
  render() {
    return (
      <div>
        <main>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/cars' component={Cars}/>
          </Switch>
        </main>
      </div>
    );
  }
}

export default Main
