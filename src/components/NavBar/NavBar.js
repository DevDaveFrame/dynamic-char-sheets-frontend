import React from 'react'
import { connect } from 'react-redux'
import './NavBar.css'

export const NavBar = () => {
  return (
    <nav>
      <ul className="nav-list">
        <li className="nav-item"><a href="#">Home</a></li>
        <li className="nav-item"><a href="#">Characters</a></li>
        <li className="nav-item"><a href="#">Profile</a></li>
        <li className="nav-item"><a href="#">About</a></li>
      </ul>
    </nav>
  )
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
