import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/cars'>Cars</Link></li>
            <li><Link to='/login'>Log In</Link></li>
          </ul>
        </nav>
        <h1>Car Dealership</h1>
      </header>
    )
  }
}

export default Header
