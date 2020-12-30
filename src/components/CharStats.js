import React, { Component } from 'react'
import { connect } from 'react-redux'

export const CharStats = (props) => {
  return (
    <div id="stats-container">
      <div id="strength"></div>
      <div id="dexterity"></div>
      <div id="constitution"></div>
      <div id="wisdom"></div>
      <div id="intelligence"></div>
      <div id="charisma"></div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  character: state.character
})

export default connect(mapStateToProps)(CharStats)
