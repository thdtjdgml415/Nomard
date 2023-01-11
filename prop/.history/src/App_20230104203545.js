import React, { useEffect, useState } from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import InputSample from './InputSample';

function App() {
  return (
    <Wrapper>
      <Hello name="react" color="red"/>
      <InputSample />
      <User/>
    </Wrapper>
  );
}

export default App;
