import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='flex justify-center items-center gap-2'>
      <div className='flex flex-col justify-center items-center  h-35 m-5 p-2 w-[25%] bg-yellow-400 rounded-xl'>
        <h1 className='font-bold text-4xl mb-5 px-2'>{data.taskNumber.newTask}</h1>
        <h3 className='font-bold text-2xl '>New Task</h3>
      </div>
      <div className='flex flex-col justify-center items-center  h-35 m-5 p-2 w-[25%] bg-blue-400 rounded-xl'>
        <h1 className='font-bold text-4xl mb-5 px-2'>{data.taskNumber.active}</h1>
        <h3 className='font-bold text-2xl '>Active</h3>
      </div>
      <div className='flex flex-col justify-center items-center  h-35 m-5 p-2 w-[25%] bg-green-500 rounded-xl'>
        <h1 className='font-bold text-4xl mb-5 px-2'>{data.taskNumber.completed}</h1>
        <h3 className='font-bold text-2xl '>Completed</h3>
      </div>
      <div className='flex flex-col justify-center items-center  h-35 m-5 p-2 w-[25%] bg-red-700 rounded-xl'>
        <h1 className='font-bold text-4xl mb-5 px-2'>{data.taskNumber.failed}</h1>
        <h3 className='font-bold text-2xl '>Failed</h3>
      </div> 
      
    </div>
  )
}

export default TaskListNumbers
