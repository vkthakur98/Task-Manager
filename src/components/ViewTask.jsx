import React, { useEffect, useState } from 'react'
import {  useNavigate, useLocation, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { removeTask,markCompleted } from '../features/tasks/taskSlice'
import Pop from './Pop'
import Notification from "./Notification"

const ViewTask = () => {
    useEffect(()=>{
        current_task.completed?setMarkBtnText("fa-arrow-rotate-left"):setMarkBtnText("fa-check")
        current_task.completed?setBtnDisplay("hidden"):setBtnDisplay("flex")
    })

    const dispatch = useDispatch()

    const navigate = useNavigate()
    const { state } = useLocation()
    const [markBtnText,setMarkBtnText] = useState("fa-check")
    const [btnDisplay,setBtnDisplay] = useState("flex")
    const [display,setDisplay] = useState("hidden")
    const [n_state,setNstate] = useState(false)
    let current_task = new Object()
    let taskid = state.taskid
    console.log(taskid)

    const confirmData = (status) => {
        if(status)
        {
            dispatch(removeTask({taskid}))
            setDisplay("hidden")
            setNstate(true)
            setTimeout(()=>{
                setNstate(false)
            },5000)
        }
        else{
            setDisplay("hidden")
        }
      }

    const tasks = JSON.parse(localStorage.getItem("Tasks"))
    tasks.forEach(task => {
        if(task.taskID === state.taskid)
            {
                current_task = task;
            }        
    });
    const markAsCompleted = ()=>{
        dispatch(markCompleted({taskid}))
       markBtnText=="fa-check"?setMarkBtnText("fa-arrow-rotate-left"):setMarkBtnText("fa-check")
       markBtnText=="fa-check"?setBtnDisplay("hidden"):setBtnDisplay("flex")
    }

    const deleteTask = ()=>{
            setDisplay("flex")
     }

     let date_day = new Date(current_task.date)
     date_day = date_day.toString()
     date_day = date_day.substr(0,10)

  return (
    <>
    <div className='h-[100vh]'>
    <div className='p-4 flex justify-between align-middle font-sans text-[20px]'>
        <i className="fa fa-angle-left bg-[#262626] flex justify-center align-middle p-3 rounded-md text-gray-500" onClick={()=>navigate(-1)}></i>
        <h2 className='font-bold text-white'>Task Details</h2>
        <span></span>        
    </div>
    <div className='p-4 font-sans text-[25px] font-bold'>
        <h1 className='text-white'>{current_task.title}</h1>
    </div>
    <div className='p-4 flex justify-start align-middle'>
        <div className='flex justify-center bg-[#262626] rounded-[50%] w-[50px] p-3'><i className='fa fa-calendar text-blue-400 text-[25px]'></i></div><div><span className='text-gray-400 text-[20px] ml-3 text-center'>{`On ${date_day} at ${current_task.start_time}`}</span></div>
    </div>
    
    <div className=''>
        <div className='pt-2 pl-4 pr-4 pb-2 text-[20px] font-bold text-white'><h1>Overview</h1></div>
        <div className='pl-4 pr-4 text-[17px]  text-gray-200'>
            {current_task.description}
        </div>
    </div>
    <div className='flex justify-around'>
    <button onClick={()=>{markAsCompleted()}} className='p-2 rounded-[10px] w-[100px]  bg-blue-500 text-white text-[20px] mt-3'><i className={`fa ${markBtnText}`}></i></button> 
    <div className={`${btnDisplay} justify-center`}>
    <Link to="/update-task"  state={{task_data:current_task}}><button className='w-[100px] p-2 rounded-[10px] bg-blue-500 text-white text-[20px] mt-3'><i className='fa fa-pencil'></i></button></Link> 
    </div>
    <div className={`${btnDisplay} justify-center`}>
    <button onClick={()=>{deleteTask()}} className= 'w-[100px] p-2 rounded-[10px] bg-red-500 text-white text-[20px] mt-3'><i className='fa fa-trash'></i></button> 
    </div>
    </div>
    <Pop display={display} check={confirmData} ></Pop>
    <Notification msg={"Deleted successfully"} type={"Success"} show={n_state}></Notification>
    </div>
    </>
)
}

export default ViewTask


