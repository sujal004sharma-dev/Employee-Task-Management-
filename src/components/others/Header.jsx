import React, { useState } from 'react'

const Header = (props) => {

  // const [username, setUsername] = useState('')

  // if(!data){
  //   setUsername('Admim')
  // }
  // else{
  //   setUsername(data.name)
  // }

  const logOut=()=>{
    localStorage.setItem('loggedInUser','');
    props.changeUser('')//this will clear the setUser to ''  empty which will open the login page which doesnt require reload jo nicche likha h yeh nhi karna padega
    // window.location.reload();

  }
  
  return (
    <div className='flex items-start justify-between p-5  m-5 '>
      <h1 className='text-xl font-semibold'>Hello<br/> <span className='text-2xl font-semibold'> 
        Username 🤗</span></h1>
      <button onClick={logOut} className='bg-red-600 rounded-3xl font-bold transition-transform hover:scale-95 px-3 py-1 cursor-pointer'>Logout</button>
    </div>
  )
}

export default Header
