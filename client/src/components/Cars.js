import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import AllCars from './AllCars'
import Car from './Car'

class CarList extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/cars' component={AllCars}/>
        <Route exact path='/cars/:id' component={Car}/>
      </Switch>
    )
  }
}

export default CarList
