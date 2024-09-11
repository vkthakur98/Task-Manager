import React from 'react'

const Pop = ({display,check}) => { 
   function handleYes(){
    check(true)
   }

   function handleNo()
   {
    check(false)
   }

  return (
    <div className={`${display} justify-center align-middle animate-jump-in`}>
    <div className='bg-[#f0d7d7] w-[90vw] rounded-md'>
      <h1 className='p-2 text-[20px] text-black'>Do you really want to delete?</h1>
      <div className='flex justify-evenly align-middle p-2'>
        <button className='p-2 bg-[#f0d7d7] border border-red-500 text-red-500 rounded-md w-[100px]' onClick={handleYes}  >Yes</button><button className='text-white p-2 bg-red-500 rounded-md w-[100px]' onClick={handleNo} >No</button>
        </div>
    </div>
    </div>
  )
}
export default Pop
