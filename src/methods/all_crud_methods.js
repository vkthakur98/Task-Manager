import { nanoid } from "@reduxjs/toolkit"
import { act } from "react"

export const addTaskToList = (state,action)=>{
    let task = {}
    task.taskID = nanoid()
    task.title = action.payload.Title
    task.date = action.payload.Date
    task.description = action.payload.Description
    task.completed = false
    task.start_time = action.payload.StartTime
    task.end_time = action.payload.EndTime
    state.tasks.push(task)
    localStorage.setItem("Tasks",JSON.stringify(state.tasks))
  }

  export const removeTaskFromList = (state,action)=>{
    state.tasks = state.tasks.filter((task)=>task.taskID!==action.payload.taskid)
    localStorage.setItem("Tasks",JSON.stringify(state.tasks))      
  }

  export const markAsCompleted = (state,action)=>{
    state.tasks.forEach(task=>{
      if(task.taskID === action.payload.taskid)
      {
          if(task.completed)
          {
              task.completed = false;
          }
          else
          {
              task.completed = true;
          }
      }
     })
     localStorage.setItem("Tasks",JSON.stringify(state.tasks)) 
  }

  export const updateTaskInList = (state,action)=>{
    
    state.tasks.forEach(task => {
      if(task.taskID == action.payload.taskid)
      {
        task.title = action.payload.Title
        task.date = action.payload.Date
        task.description = action.payload.Description
        task.start_time = action.payload.StartTime
        task.end_time = action.payload.EndTime     
      }
  });
  localStorage.setItem("Tasks",JSON.stringify(state.tasks)) 
  }

  