import React, { useState } from 'react'

function Btn(props) {
  const {flag, setFlag} = props
  const handleClickBtn= () => {
    // console.log(flag)
    setFlag(!flag)
  }
  return (
    <button onClick={handleClickBtn}>button</button>
  )
}

export default Btn