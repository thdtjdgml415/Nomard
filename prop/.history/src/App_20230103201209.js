import React, { useEffect, useState } from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Btn from './Btn';
import InputSample from './inputSample';

function App() {
  const [click, setClick] = useState(true)
  onclick = () => {
    setClick((current) => !current)
  }
  return (
    <Wrapper>
      <Hello name="react" color="red" isSpecial={click}/>
      <Btn onclick ={onclick}/>
      <InputSample/>
    </Wrapper>
  );
}

export default App;
