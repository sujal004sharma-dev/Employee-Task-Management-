import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'

const AdminDashboard = (props) => {
    // console.log({data});
    
    return (
        <div className='w-full h-screen p-7'>
            <Header changeUser={props.changeUser} data={props.data} />
            <CreateTask data={props.data}/>
            <AllTask data={props.data}/>           

        </div>
    )
}

export default AdminDashboard
