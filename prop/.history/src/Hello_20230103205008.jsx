import React, { useState } from 'react'
import Btn from './Btn';

function Hello({color, name}) {
  const [flag, setFlag] = useState(false)

 
  return (
        <div style={{ color }}>{flag && <b>*</b>} 안녕하세요
         {name}
          <Btn setFlag={setFlag} flag={flag}/>
        </div>
  )
}

Hello.defaultProps = {
    name: '이름없음'
}

export default Hello;