import React, { useState } from 'react'

function Btn() {
  const [flag, setFlag] = useState(false)
  const handleClickBtn= (flag) => {
  
    console.log(flag)
    setFlag(!flag)
  }
  return (
    <button onClick={handleClickBtn.bind(this, flag)}>button</button>
  )
}

export default Btn