import React, { Component } from 'react'
import { connect } from 'react-redux'
import CharInfo from '../components/CharInfo';
import CharStats from '../components/CharStats';
import { DynamicDisplay } from './DynamicDisplay';

export const CharSheet = () => {
  return (
    <div>
      <div>
        <CharInfo />
        <CharStats />
      </div>
      <DynamicDisplay />
    </div>
  )
}

const mapStateToProps = (state) => ({
  state
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(CharSheet)
