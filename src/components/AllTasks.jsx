import React, { useEffect } from 'react'
import Task from './Task'
import { Link} from 'react-router-dom'
import { useSelector } from 'react-redux'

const AllTasks = () => {
const tasks = useSelector(state=>state.tasks)
console.log("is this array",tasks)
const today = new Date()
let c_date = "0";
let c_month = "0";

//fot optimizing the dates and month with 0 prefix
if(today.getMonth>8)
{
  c_month = today.getDate()
}
else{
  let month = today.getMonth()
  c_month = c_month.concat(month)
}
if(today.getDate>9)
{
  c_date = today.getDate()
}
else{
  let date = today.getDate()
  c_date = c_date.concat(date)
}
//getting current date
const t_date = today.getFullYear()+"-0"+(today.getMonth()+1)+"-"+ c_date
console.log(t_date)

//comparing the dates to show the completed or not completed//
tasks.forEach((task)=>{
  if(task.date !== t_date)
  {
    //do nothing
  }
    else{
        task.completed = false
        localStorage.setItem("Tasks",tasks)
    } 
})

return (
    <>
    <div className='pl-5 pr-5 pt-4 pb-1'>
        <span className='font-bold text-[20px] text-white'>Today's Task</span>
    </div>
    <div className='p-1 h-[360px] overflow-scroll'>
        {
            tasks.map((task,key)=>{
                return<Link to="/view-task" key={key} state={{taskid:task.taskID}} ><Task task={
              {
                title:task.title,
                start_time:task.start_time,
                end_time:task.end_time,
                completed:task.completed
              }
            } ></Task></Link>
            })
        }  
    </div>

    </>
  )
}

export default AllTasks
