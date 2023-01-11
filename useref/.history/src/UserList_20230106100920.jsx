import React from 'react'

function UserList({user}) {
  return (
    <div>
        <b>{user.username}</b> <span>({user.email})</span>
    </div>
  );
}

export default UserList