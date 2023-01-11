import React, { useState } from 'react'

const handleClickBtn= () => {
  console.log(flag)
  setFlag(!flag)
}

function Btn() {
  const [flag, setFlag] = useState(false)
  return (
    <button onClick={handleClickBtn}>button</button>
  )
}

export default Btn