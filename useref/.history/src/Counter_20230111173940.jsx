import React, { useReducer } from 'react'


function reducer(state, action) {
  return (
    switch (action.type) {
      case 'INCREMENT' :
        return state + 1;
    }
  )
}





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
      <button onClick={onIncrease}></button>
      <button onClick={onDecrease}></button>
    </div>
  )
}

export default Counter