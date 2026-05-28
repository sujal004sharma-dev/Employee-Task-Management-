import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
    return (
        <div id='tasklist' className=' flex items-center overflow-x-auto flex-nowrap w-full h-[50%] py-5  mt-10'>
            {data.tasks.map((elem,idx)=>{

                if(elem.activeTask){
                    return <AcceptTask key={idx} data={elem}/>
                }   
                if(elem.newTask){
                    return <NewTask key={idx} data={elem}/>
                }             
                if(elem.completed){
                    return <CompleteTask key={idx} data={elem}/>
                }
                if(elem.failed){
                    return <FailedTask key={idx}data={elem}/>
                }

            })}      

        </div>
    )
}

export default TaskList

