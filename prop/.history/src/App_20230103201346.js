import React, { useEffect, useState } from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Btn from './Btn';
import InputSample from './InputSample';

function App() {
  const [click, setClick] = useState(true)
  const [text, setText] = useState('')
  onclick = () => {
    setClick((current) => !current)
  }
  return (
    <Wrapper>
      <Hello name="react" color="red" isSpecial={click}/>
      <Btn onclick ={onclick}/>
      <InputSample onChange={onChange}/>
    </Wrapper>
  );
}

export default App;
