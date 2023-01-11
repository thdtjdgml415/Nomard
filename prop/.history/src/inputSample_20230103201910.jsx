import React, {useState} from 'react'

function InputSample() {
    const [text, setText] = useState('')

    const onChange = (e) => {
        setText(e.target.value)
    }
    const onReset = () => {
        setText("")
    }
  return (
    <div>
        <div>
            <input onChange={onChange} value={text}/>
            <button onReset={onReset}>초기화</button>
        </div>
        <div>
            <b>값:{text}</b>
        </div>
    </div>
  )
}

export default InputSample