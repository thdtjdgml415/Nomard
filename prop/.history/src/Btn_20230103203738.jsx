import React, { useState } from 'react'

function Btn(props) {
  const {setFlag} = props
  const handleClickBtn= () => {
    setFlag()
  }
  return (
    <button onClick={handleClickBtn}>button</button>
  )
}

export default Btn