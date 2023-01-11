import React from 'react'

function InputSample() {


    const onChange = () => {

    }
    const onReset = () => {
  
    }
  return (
    <div>
        <div>
            <input placeholder='이름' />
            <input placeholder='닉네임' onChange={onChange}/>
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