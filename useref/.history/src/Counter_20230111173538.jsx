import React, { useReducer } from 'react'

function Counter() {
  const [number, dispatch] = useReducer(reducer, 0);

  const onIncrease = () => {
    dispatch({ type: 'INCREMENT'})
  }
  return (
    <div>Counter</div>
  )
}

export default Counter