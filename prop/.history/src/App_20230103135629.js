import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Btn from './Btn';

function App() {
  return (
    <Wrapper>
      <Hello name="react" color="red" isSpecial={true}/>
      <Btn/>
      <Hello color="pink"/>
    </Wrapper>
  );
}

export default App;
