import React, { useState, useRef } from 'react'

function InputSample() {
    const [inputs, setInputs] = useState({ name: '', nickname: ''})
    const nameInput = useRef();
    
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
        nameInput.current.focus()
    };

  return (
    <div>
        <div>
            <input name='name' placeholder='이름' onChange={NameChangeHandle} value={name} ref={nameInput}/>
            <input name='nickname'placeholder='닉네임' onChange={NameChangeHandle} value={nickname} ref={nameInput}/>
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