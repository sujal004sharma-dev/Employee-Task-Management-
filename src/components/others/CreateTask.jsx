import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

    const {userData,setUserData}=useContext(AuthContext)

    const [title,setTitle] = useState('')
    const [date,setDate] = useState('')
    const [assignTo,setassignTo] = useState('')
    const [category,setCategory] = useState('')
    const [description,setDescription] = useState('')

    const [newTask,setNewTask] = useState({})

    const SubmitHandler = (e) => {
        e.preventDefault();

        // console.log(title , date, assignTo,category,description);
        setNewTask({ active: false, newTask: true, failed: false, completed: false, title, description, date, category })

        const data = userData
        
        data.forEach(function (elem) {
            if (assignTo == elem.name) {
                elem.tasks.push(newTask);
                console.log(elem);
                elem.taskNumber.newTask=elem.taskNumber.newTask+1;
                
            }
            
        })
        setUserData(data)
        console.log(data);


        setCategory('')
        setDate('')
        setDescription('')
        setTitle('')
        setassignTo('')


    }
    return (
        <div>
            <div className='bg-[#1c1c1c] mt-5 rounded p-5'>
                <form onSubmit={(e) => {
                    SubmitHandler(e)
                }} className='flex'>
                    <div className='w-1/2'>
                        <div>
                            <h3 className='text-xl font-bold text-gray-400 mb-0.5'>Task Title</h3>
                            <input
                                value={title}
                                onChange={(e) => {
                                    setTitle(e.target.value)
                                }}
                                className='text-l py-2 px-2 w-4/5 text-gray-300 outline-none rounded bg-transparent border border-gray-400 font-semibold' type="text" placeholder='Create a UI' />
                        </div>
                        <div>
                            <h3 className='text-xl font-bold text-gray-400 mb-0.5'>Date</h3>
                            <input
                                value={date}
                                onChange={(e) => {
                                    setDate(e.target.value)
                                }}
                                className='text-l py-2 px-2 w-4/5 text-gray-300 outline-none rounded bg-transparent border border-gray-400 font-semibold' type="date" placeholder='Enter the date' />
                        </div>
                        <div>
                            <h3 className='text-xl font-bold text-gray-400 mb-0.5'>Assign To</h3>
                            <input
                                value={assignTo}
                                onChange={(e) => {
                                    setassignTo(e.target.value)
                                }}
                                className='text-l py-2 px-2 w-4/5 text-gray-300 outline-none rounded bg-transparent border border-gray-400 font-semibold' type="text" placeholder='Enter the Candidate' />
                        </div>
                        <div>
                            <h3 className='text-xl font-bold text-gray-400 mb-0.5'>Category</h3>
                            <input
                                value={category}
                                onChange={(e) => {
                                    setCategory(e.target.value)
                                }}
                                className='text-l py-2 px-2 text-gray-300 w-4/5 outline-none rounded bg-transparent border border-gray-400 font-semibold' type="text" placeholder='Enter the Category' />
                        </div>
                    </div>
                    <div className='w-1/2'>
                        <h3 className='text-xl font-bold text-gray-400 mb-5'>Description</h3>
                        <textarea
                            value={description}
                            onChange={(e) => {
                                setDescription(e.target.value)
                            }}
                            className='w-full h-[70%] border-2 focus:outline-none focus:border-green-500 rounded-2xl placeholder:text-gray-400 p-3  font-bold' name="" id="" placeholder='Enter the detailed Description...'></textarea>
                        <button className='w-full bg-green-400 mt-2 py-2 rounded-2xl font-bold cursor-pointer transition-transform hover:scale-95 '>Create Task</button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default CreateTask
