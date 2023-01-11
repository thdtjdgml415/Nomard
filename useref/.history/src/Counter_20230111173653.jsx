import React, { useReducer } from 'react'

function Counter() {
  const [number, dispatch] = useReducer(reducer, 0);

  const onIncrease = () => {
    dispatch({ type: 'INCREMENT'})
  }

  const onDecrease = () => {
    dispatch({type: 'DECREMENT'})
  }
  return (
    <div>
      <h1>{number}</h1>
    </div>
  )
}

export default Counter