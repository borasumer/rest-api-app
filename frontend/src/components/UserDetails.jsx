import React from 'react'
import { Link } from 'react-router-dom'


const UserDetails = ({ user, handleDelete }) => {
  return (
    <div>
      <span>{user.name}</span>
      <button onClick={() => { handleDelete(user) }}>Delete</button>
      <Link to='/edit'>
        <button>Edit</button>
      </Link>
    </div>
  );
}

export default UserDetails;