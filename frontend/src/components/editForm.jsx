import React, { useContext } from 'react'
import { UserContext } from '../contexts/UserContext';



const EditForm = () => {
  const { handleEdit, handleChange } = useContext(UserContext)
  return (
    <div>
      <form onSubmit={handleEdit}>
        <label> name:</label>
        <input type="text" name="name" onChange={(event) => { handleChange(event) }} />
        <label>email:</label>
        <input type="text" name="email" onChange={(event) => { handleChange(event) }} />
        <label>password:</label>
        <input type="text" name="password" onChange={(event) => { handleChange(event) }} />
        <input type="submit" value="edit user" />
      </form>
    </div>
  );
}

export default EditForm;