import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery'

class AllCars extends Component {
  state = {
    cars: []
  }

  componentDidMount() {
    this.getCars()
  }

  getCars = () => {
    $.ajax({
      url: '/cars',
      method: 'GET'
    }).done((data) => {
      this.setState({cars: data})
    })
  }

  render() {
    return (
      <ul>
        {this.state.cars.map(car => (
          <li key={car._id}>
            <Link to={'/cars/${car._id}'}>{car.name}</Link>
          </li>
        ))}
      </ul>
    )
  }
}

export default AllCars
