import React from 'react'

function InputSample() {
    const [text, setText] = useState('')
  return (
    <div>
        <div>
            <input/>
            <button>초기화</button>
        </div>
        <div>
            <b>값:</b>
        </div>
    </div>
  )
}

export default InputSample