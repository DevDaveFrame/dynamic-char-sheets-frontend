import React, { Component } from 'react'
import { connect } from 'react-redux'
import CharEquipment from '../components/CharEquipment';
import CharInfo from '../components/CharInfo';
import CharSpells from '../components/CharSpells';
import CharStats from '../components/CharStats';

export const CharSheet = () => {
  return (
    <div>
      HELLO!
    </div>
  )
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(CharSheet)
