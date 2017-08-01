import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import AllCars from './AllCars'

class CarList extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/cars' component={AllCars}/>
      </Switch>
    )
  }
}

export default CarList
