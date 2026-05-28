import React from 'react'

const CompleteTask = ({ data }) => {
    return (
        <div className=' shrink-0 h-full m-2 rounded-3xl p-4 flex flex-col justify-between   w-100 bg-pink-300'>
            <div className='flex justify-between font-bold  p-5 text-xl'>
                <h3 className='bg-red-500  px-2 py-1 rounded-xl'>{data.priority}</h3>
                <h4>{data.taskDate}</h4>
            </div>

            <div><h1 className=' font-bold text-4xl mt-5 mb-3'>{data.taskTitle}</h1>
                <p className=' font-semibold text-l'>{data.taskDescription}
                </p>
            </div>
            <div className='flex justify-center gap-5 mt-8 font-bold '>
                <button className='bg-green-500 rounded-3xl px-2 py-2 w-50  '>Mark as Completed</button>
            </div>


        </div>
    )
}

export default CompleteTask
