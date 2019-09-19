import React from 'react'
import { Link } from 'react-router-dom'


const UserDetails = ({ user, handleDelete, handleUserId }) => {
  return (
    <div>
      <span>{user.name}</span>
      <button onClick={() => { handleDelete(user) }}>Delete</button>
      <Link to='/edit'>
        <button onClick={() => { handleUserId(user) }}>Edit</button>
      </Link>
    </div>
  );
}

export default UserDetails;