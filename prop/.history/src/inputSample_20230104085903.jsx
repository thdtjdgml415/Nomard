import { getValue } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react'

function InputSample() {
    const [inputs, setInputs] = useState({ name: '', nickname: ''})

    const {name, nickname} = inputs;

    const onChange = (e) => {
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
            <input placeholder='이름' onChange={onChange} value={name} />
            <input placeholder='닉네임' onChange={onChange} valu={nickname}/>
            <button onClick={onReset}>초기화</button>
        </div>
        <div>
            <b>값:</b>
            이름(닉네임)
        </div>
    </div>
  )
}

export default InputSample