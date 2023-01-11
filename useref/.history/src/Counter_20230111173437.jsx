import React, { useReducer } from 'react'

function Counter() {
  const [number, dispatch] = useReducer(reducer, 0)
  return (
    <div>Counter</div>
  )
}

export default Counter