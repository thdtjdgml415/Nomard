import React, { useEffect, useState } from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Btn from './Btn';

function App() {
  const [click, setClick] = useState(true)
  onclick = (e) => {
    console.log(e)
  }
  return (
    <Wrapper>
      <Hello name="react" color="red" isSpecial={click}/>
      <Btn onclick ={onclick}/>
    </Wrapper>
  );
}

export default App;
