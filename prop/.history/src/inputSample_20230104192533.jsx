import React, { useEffect, useState } from 'react'

function InputSample() {
    const [inputs, setInputs] = useState({ name: '', nickname: ''})
    
    const {name, nickname} = inputs;
 

    const NameChangeHandle = (e) => {
        
        const {value, name} = e.target;
        console.log(e)
        setInputs({
            ...inputs,
            [name]: value
        });
    };
    useEffect(()=> {
        console.log(inputs)
    },[name])

    const onReset = () => {
        setInputs({
            name:'',
            nickname:'',
        })
    };

  return (
    <div>
        <div>
            <input name='name' placeholder='이름' onChange={NameChangeHandle} value={name} />
            <input name='nickname'placeholder='닉네임' onChange={NameChangeHandle} value={nickname}/>
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