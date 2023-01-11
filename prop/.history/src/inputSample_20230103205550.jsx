import React, {useState} from 'react'

function InputSample() {
    const [text, setText] = useState('')

    const onChange = (e) => {

    }
    const onReset = () => {
  
    }
  return (
    <div>
        <div>
            <input placeholder='이름' />
            <input placeholder='닉네임' onChange={onChange} value={text}/>
            <button onClick={onReset}>초기화</button>
        </div>
        <div>
            <b>값:{text}</b>
        </div>
    </div>
  )
}

export default InputSample