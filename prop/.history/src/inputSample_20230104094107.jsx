import { getValue } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react'

function InputSample() {
    const [inputs, setInputs] = useState({ name: '', nickname: ''})
    
    const {name, nickname} = inputs;
 

    const NameChangeHandle = (e) => {
        const {value, name} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };
    const onReset = () => {
        setInputs({
            name:'',
            nickname:'',
        })
    };
  return (
    <div>
        <div>
            <input placeholder='이름' onChange={NameChangeHandle} value={name} />
            <input placeholder='닉네임' onChange={NameChangeHandle} value={nickname}/>
            <button onClick={onReset}>초기화</button>
        </div>
        <div>
            <b>값:</b>
            {name}({nickname})
        </div>
    </div>
  )
}

export default InputSample