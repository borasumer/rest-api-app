import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'


export const UserContext = createContext()

const UserContextProvider = (props) => {

  const [users, setUsers] = useState([])
  const [user, setUser] = useState([])
  const [currentUserId, setCurrentUserId] = useState([])

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
  console.log('user', user)
  const handleSubmit = () => {
    axios.post('http://localhost:5000/api/users', user)
  }
  const handleDelete = (user) => {
    axios.delete(`http://localhost:5000/api/users/${user._id}`)
  }
  const handleUserId = (user) => {
    setCurrentUserId(user._id)
  }
  const handleEdit = () => {
    alert(currentUserId)
    axios.put(`http://localhost:5000/api/users/${currentUserId}`, user)
      .then(response => {
        alert(response)
      })
      .catch(err => {
        alert(err)
      })
  }

  return (
    <UserContext.Provider value={{ users, setUsers, handleChange, handleSubmit, handleDelete, handleEdit, handleUserId }}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;