import React, { useContext } from 'react'
import { UserContext } from '../contexts/UserContext';



const EditForm = () => {
  const { handleEdit, handleEditChange } = useContext(UserContext)
  return (
    <div>
      <form onSubmit={handleEdit}>
        <label> name:</label>
        <input type="text" name="name" onChange={(event) => { handleEditChange(event) }} />
        <label>email:</label>
        <input type="text" name="email" onChange={(event) => { handleEditChange(event) }} />
        <label>password:</label>
        <input type="text" name="password" onChange={(event) => { handleEditChange(event) }} />
        <input type="submit" value="edit user" />
      </form>
    </div>
  );
}

export default EditForm;