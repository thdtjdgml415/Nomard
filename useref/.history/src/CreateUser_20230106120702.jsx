import React from 'react'

function CreateUser() {
  return (
    <div>
        <input name="username" placeholder='계정명' onChange={onChange} value={username}/>
        <input name="email" placeholder='이메일' onChange={onChange} value={드먀ㅣ}/>
    </div>
  )
}

export default CreateUser