import React from 'react'
import Btn from './Btn';

function Hello({color, name, isSpecial}) {
  return (
        <div style={{ color }}>{isSpecial && <b>*</b>} 안녕하세요 {name}
          <Btn/>
        </div>
  )
}

Hello.defaultProps = {
    name: '이름없음'
}

export default Hello;