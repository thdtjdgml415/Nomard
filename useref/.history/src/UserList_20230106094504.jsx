import React from 'react'

function UserList({user}) {
  return (
    <div>
        <b>{user.username}</b>
    </div>
  )
}

export default UserList