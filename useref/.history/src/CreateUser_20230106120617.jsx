import React from 'react'

function CreateUser() {
  return (
    <div>
        <input name="username" placeholder='계정명' onChange={onChange}/>
    </div>
  )
}

export default CreateUser