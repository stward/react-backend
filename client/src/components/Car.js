import React, { Component } from 'react'
import $ from 'jquery'

class AllCars extends Component {
  state = {
    name: null,
    year: null,
    color: null
  }

  componentDidMount() {
    this.getCar()
  }

  getCar = () => {
    $.ajax({
      url: '/cars/' + this.props.match.params.id,
      method: 'GET'
    }).done((data) => {
      console.log(data)
      this.setState({name: data.name, year: data.year, color: data.color})
    })
  }

  render() {
    return (
      <div>
        <p>{this.state.name}</p>
        <p>{this.state.year}</p>
        <p>{this.state.color}</p>
      </div>
    )
  }
}

export default AllCars
