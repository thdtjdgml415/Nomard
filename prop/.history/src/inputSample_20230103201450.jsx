import React from 'react'

function InputSample() {
    const [text, setText] = useState('')
  return (
    <div>
        <div>
            <input onChange={onChange}/>
            <button>초기화</button>
        </div>
        <div>
            <b>값:{text}</b>
        </div>
    </div>
  )
}

export default InputSample