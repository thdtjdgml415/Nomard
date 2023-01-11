import React, { useState } from 'react'

function Counter() {
    const [number, setNumber] = useState(0);

    const onIncrease = () => {
        setNumber(prevNumber)
    }
  return (
    <div>Counter</div>
  )
}

export default Counter