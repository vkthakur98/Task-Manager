import React from 'react'

const Task = (props) => {
  const date = new Date()
  let i_class = props.task.completed?"fa-check-circle text-green-500":"fa-angle-right text-gray-500";  
  return (
    <>
    <div className='flex justify-between align-middle p-4 rounded-md bg-white'>
    <div className='flex justify-between align-middle'>
    <img src="https://www.shutterstock.com/image-vector/clipboard-pen-single-flat-color-260nw-236072971.jpg" alt="" height={30} width={50} />
      <div className='ml-2'>
        <h1 className='font-bold text-[17px]'>{props.task.title}</h1>
        <span className='text-gray-500'>{`${props.task.start_time} - ${props.task.end_time}`}</span>
      </div>
    </div>
    <div className=' content-center '>
      <i className={`fa ${i_class}`}></i>
    </div>
    </div>
    </>
  )
}

export default Task
