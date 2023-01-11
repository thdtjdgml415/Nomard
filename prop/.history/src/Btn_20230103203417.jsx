import React, { useState } from 'react'

function Btn() {
  const handleClickBtn= (flag) => {
  
    console.log(flag)
    setFlag(!flag)
  }
  const [flag, setFlag] = useState(false)
  return (
    <button onClick={handleClickBtn.bind(this, flag)}>button</button>
  )
}

export default Btn