import { createSlice,nanoid } from "@reduxjs/toolkit";
import { addTaskToList,removeTaskFromList,markAsCompleted, updateTaskInList } from "../../methods/all_crud_methods";



const initialState = {
    tasks:JSON.parse(localStorage.getItem("Tasks"))
}

export const taskSlice = createSlice({
   name:"Task",
   initialState:initialState,
   reducers:{
    addTask:addTaskToList,
    removeTask:removeTaskFromList,
    markCompleted:markAsCompleted,
    updateTask:updateTaskInList
   } 
})

export const {addTask,removeTask,markCompleted,updateTask} = taskSlice.actions
export default taskSlice.reducer
