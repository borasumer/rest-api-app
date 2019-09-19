import React, { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import UserDetails from './UserDetails';



const UserList = () => {
  const { users, handleDelete, handleEdit, handleUserId } = useContext(UserContext)
  return (
    <div className="App">
      {users.map(user => {
        return <UserDetails key={user._id} user={user} handleDelete={handleDelete} handleEdit={handleEdit} handleUserId={handleUserId} />
      })}
    </div>
  );
}

export default UserList;