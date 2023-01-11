import React, { useState } from 'react'

const handleClickBtn= (flag) => {

  console.log(flag)
  setFlag(!flag)
}
function Btn() {
  const [flag, setFlag] = useState(false)
  return (
    <button onClick={handleClickBtn.bind(this, flag)}>button</button>
  )
}

export default Btn