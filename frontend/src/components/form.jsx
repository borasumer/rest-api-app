import React, { useContext } from 'react'
import { UserContext } from '../contexts/UserContext';

const Form = () => {

  const { handleChange, handleSubmit } = useContext(UserContext)

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label> name:</label>
        <input type="text" name="name" onChange={(event) => { handleChange(event) }} />
        <label>email:</label>
        <input type="text" name="email" onChange={(event) => { handleChange(event) }} />
        <label>password:</label>
        <input type="text" name="password" onChange={(event) => { handleChange(event) }} />
        <input type="submit" value="Add user" />
      </form>
    </div>
  );
}

export default Form;