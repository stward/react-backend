import React, { Component } from 'react'
import $ from 'jquery'

class AllCars extends Component {
  state = {
    car: null
  }

  componentDidMount() {
    this.getCar()
  }

  getCar = () => {
    $.ajax({
      url: '/cars',
      method: 'GET'
    }).done((data) => {
      this.setState({cars: data})
    })
  }

  render() {
    return (
      <div>
        {this.state.cars.map(car =>
          <div key={car._id}>{car.name}</div>
        )}
      </div>
    )
  }
}

export default AllCars
