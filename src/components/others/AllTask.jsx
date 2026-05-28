import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
    const {userData,SetUserData}=useContext(AuthContext);
    // console.log(AuthData);
    
    return (
        <div id='tasklist' className='bg-[#1c1c1c] p-4 mt-5 '>
            <div className='flex py-2 px-4 mb-2 bg-red-400 justify-between text-xl rounded '>
                <h1 className='w-1/5 '>Employee Name</h1>
                <h3 className='w-1/5 '>New Task</h3>
                <h5 className='w-1/5 '>Active Task</h5>
                <h5 className='w-1/5 '>Completed Task</h5>
                <h5 className='w-1/5 '>Failed Task</h5>
            </div>
            
            <div id='tasklist' className=' '>
                {userData.map((elem,idx)=>{
                return <div key={idx}  className='flex py-2 px-4 mb-2 font-bold border-2 border-emerald-500 justify-between text-xl rounded '>
                <h1 className='w-1/5 text-white'>{elem.name}</h1>
                <h5 className='w-1/5 text-yellow-500'>{elem.taskNumber.newTask}</h5>
                <h3 className='w-1/5 text-blue-500'>{elem.taskNumber.active}</h3>
                <h5 className='w-1/5 text-green-400'>{elem.taskNumber.completed}</h5>
                <h5 className='w-1/5 text-red-500'>{elem.taskNumber.failed}</h5>
            </div>
            })}
            </div>
            
        </div>
    )
}

export default AllTask

   