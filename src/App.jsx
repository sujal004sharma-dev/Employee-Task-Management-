import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'



const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  // const [userData, setUserData] = useState(null)
  const {userData,setUserData}= useContext(AuthContext)

  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')

    if (loggedInUser) {
      try {
        const parsed = JSON.parse(loggedInUser)
        setUser(parsed.role)
        setLoggedInUserData(parsed.data || null)
      } catch (err) {
        console.error('Failed to parse loggedInUser from localStorage', err)
        localStorage.removeItem('loggedInUser')
      }
    }
    
  },[])

  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
      return
    }

    const { employee } = getLocalStorage() || {}

    if (employee && Array.isArray(employee)) {
      const found = employee.find((e) => e.email === email && password === e.password)
      if (found) {
        setUser('employee')
        setLoggedInUserData(found)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: found }))
        return
      }
    }

    alert('Invalid Credentials')
  }




  return (
    
      <>
        {!user ? <Login handleLogin={handleLogin} /> : ''}
        {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null)}
      </>
    
  )
}

export default App
