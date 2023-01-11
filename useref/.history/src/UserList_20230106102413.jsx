import React from 'react'




function User() {
  return (
    <div>UserList</div>
  )
}




function UserList({users}) {
  return (
    <div>
        {
            users.map((user)=>(
                <User user={user} key={user.id}/>
            ))
        }
    </div>
  );
}

export default UserList