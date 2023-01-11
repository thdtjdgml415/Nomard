import React, { useState } from 'react'


function Btn() {
  const [flag, setFlag] = useState(false)
  const handleClickBtn= () => {
    console.log(flag)
    setFlag(!flag)
  }
  return (
    <button onClick={handleClickBtn()}>button</button>
  )
}

export default Btn