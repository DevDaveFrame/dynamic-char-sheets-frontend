import React, { Component } from 'react'
import { connect } from 'react-redux'
import CharSpells from '../components/CharSpells';
import CharEquipment from '../components/CharEquipment';

export const DynamicDisplay = () => {
  // We need some logic here to manage conditional rendering of components
  // hooks for local state, booleans for visibility of each component 
  // Maybe some logic that can handle the order/arrangement of each component?
  return (
    <div className="dynamic-display">
      <CharSpells />
      <CharEquipment />
    </div>
  )
}

const mapStateToProps = (state) => ({
  state
})

export default connect(mapStateToProps, mapDispatchToProps)(DynamicDisplay)
