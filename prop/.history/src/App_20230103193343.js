import React, { useEffect, useState } from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Btn from './Btn';

const [click, setClick] = useState("true")
function App() {
  onclick = () => {

  }
  return (
    <Wrapper>
      <Hello name="react" color="red" isSpecial={true}/>
      <Btn onclick ={onclick}/>
    </Wrapper>
  );
}

export default App;
