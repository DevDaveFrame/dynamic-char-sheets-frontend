import React from 'react'
import { connect } from 'react-redux'

export const CharEquipment = () => {
  return (
    <div>
      HELLO
    </div>
  )
}

const mapStateToProps = (state) => ({
  state
})


export default connect(mapStateToProps)(CharEquipment)
