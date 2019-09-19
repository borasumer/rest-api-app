import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'


export const UserContext = createContext()

const UserContextProvider = (props) => {

  const [users, setUsers] = useState([])
  const [user, setUser] = useState([])
  const [userEdit, setUserEdit] = useState([])


  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('http://localhost:5000/api/users')
      try {
        response ? (setUsers(response.data)) : (console.log('there is no response'))
      } catch (err) {
        throw err
      }
    }
    fetchData();
  }, []);
  const handleChange = (event) => {
    event.persist();
    setUser({ ...user, [event.target.name]: event.target.value })
    console.log(user)
  }
  const handleEditChange = (event) => {
    event.persist();
    setUserEdit({ ...userEdit, [event.target.name]: event.target.value })
    console.log(userEdit)
  }

  const handleSubmit = () => {
    axios.post('http://localhost:5000/api/users', user)
  }
  const handleDelete = (user) => {
    axios.delete(`http://localhost:5000/api/users/${user._id}`)
  }
  const handleEdit = (user) => {
    axios.put(`http://localhost:5000/api/users/${user._id}`, user)
      .then(response => {
        alert(response)
      })
      .catch(err => {
        alert(err)
      })
  }

  return (
    <UserContext.Provider value={{ users, setUsers, handleChange, handleSubmit, handleDelete, handleEdit, handleEditChange }}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;