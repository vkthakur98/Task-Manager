import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const Banner = () => {
  const tasks = useSelector(state=>state.tasks)
  const completed_tasks = tasks.filter((task)=>task.completed===true)
  let completed_percentage = 0;
  if(completed_tasks.length==0)
  completed_percentage = 0
  completed_percentage = Math.ceil((completed_tasks.length/tasks.length)*100)
  const [percent,setPercent] = useState(`w-[${completed_percentage}%]`)
  useEffect(()=>{
    setPercent(`w-[${completed_percentage}%]`)
  },[completed_tasks])

  return (
    <>
    <div className='flex justify-center align-middle font-sans'><br></br>
    <div className="bg-gradient-to-r from-[#03396c] to-[#005b96] h-[150px] w-[92vw] rounded-md p-5">
    <h1 className='text-[20px] text-white font-bold'>Today's progress summary</h1>
    <span className='text-white'>{`${tasks.length} tasks`}</span>
    <div className='flex justify-between align-middle mt-2 text-white'>
     <span>Progress</span><span>{`${completed_percentage}%`}</span>   
    </div>
    <div className='h-2 w-[100%] bg-[#b4b4e1] rounded-md mt-2'>
        <div className={`h-2 ${percent}  bg-white rounded-md`}>
    </div>
    </div>   
    </div>
    </div>
    </>
  )
}

export default Banner
