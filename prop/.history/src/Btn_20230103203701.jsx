import React, { useState } from 'react'

function Btn(props) {
  const {setFlag} = props
  const handleClickBtn= () => {
  
  }
  return (
    <button onClick={handleClickBtn.bind(this, flag)}>button</button>
  )
}

export default Btn