import React from 'react'

function UserList({users}) {
  return (
    <div>
        {
            users.map((user)=>(
                <User/>
            ))
        }
    </div>
  );
}

export default UserList