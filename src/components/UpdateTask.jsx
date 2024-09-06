import React, { useState } from 'react'
import { json, useNavigate, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { updateTask } from '../features/tasks/taskSlice'

const CreateTask = () => {
  const dispatch = useDispatch()
  const {state} = useLocation()
  const navigate = useNavigate()
  const taskid = state.task_data.taskID
  const [Title,setTitle] = useState(state.task_data.title)
  const [Date,setDate] = useState(state.task_data.date)
  const [Description,setDescription] = useState(state.task_data.description)
  const [StartTime,setStartTime] = useState(state.task_data.start_time)
  const [EndTime,setEndTime] = useState(state.task_data.end_time)
  let Tasks = [];
  let TaskData = localStorage.getItem("Tasks")
  if(!TaskData)
    {

    }
    else{
      Tasks = JSON.parse(TaskData)
    }         
  const saveTask = ()=>{ 
    dispatch(updateTask({taskid,Title,Description,Date,StartTime,EndTime}))
  }
  return (
    <>
    <div className='p-4 flex justify-between align-middle font-sans text-[20px]'>
        <i className="fa fa-angle-left bg-gray-200 flex justify-center align-middle p-3 rounded-md text-gray-500" onClick={()=>navigate(-1)}></i>
        <h2 className='font-bold'>Update Existing Task</h2>
        <span></span>        
    </div>
    <div>
      <div className='p-4 font-sans'><br></br>
      <p className='text-[20px] font-bold ]'>Task Title</p>
      <input value={Title} onChange={(e)=>{setTitle(e.target.value)}}  type="text" className='p-4 rounded-[20px] border w-[90vw] border-gray-200 mt-4' placeholder='Coding' />
      <p className='text-[20px] font-bold ] mt-4'>Category</p>
        <button className='mt-3 p-2 bg-blue-400 w-[100px] text-white rounded-[20px] font-bold'>Daily</button>
      <p className='text-[20px] font-bold ] mt-4'>Date</p>
      <input value={Date} type='date' onChange={(e)=>{setDate(e.target.value)}} className='p-4 rounded-[20px] border w-[90vw] border-gray-200 mt-4' ></input>
      <div className='flex justify-between align-middle'>
      <div>
      <p className='text-[18px] font-bold ] mt-4'>Start Time</p>
      <input type='time' onChange={(e)=>{setStartTime(e.target.value)}} className='p-2 rounded-[17px] border w-[40vw] border-gray-200 mt-4' value={StartTime} ></input>
      </div>
      <div>
      <p className='text-[18px] font-bold ] mt-4'>End Time</p>
      <input type='time' onChange={(e)=>{setEndTime(e.target.value)}} className='p-2 rounded-[17px] border w-[40vw] border-gray-200 mt-4' value={EndTime} ></input>
      </div>
      </div>
      <p className='text-[20px] font-bold ] mt-4'>Description</p>
      <textarea  onChange={(e)=>{setDescription(e.target.value)}}  className='p-4 rounded-[20px] border w-[90vw] border-gray-200 mt-4' placeholder='type some description about this particular task' value={Description}></textarea>
      <button onClick={()=>{saveTask()}} className='p-3 w-[90vw] rounded-[30px] bg-blue-500 text-white text-[20px]'>Update Task</button>
      </div>
    </div>
    </>
    
  )
}

export default CreateTask
