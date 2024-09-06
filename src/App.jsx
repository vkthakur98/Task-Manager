import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateTask from "./components/CreateTask";
import HeasderTasks from "./components/HeasderTasks";
import ViewTask from "./components/ViewTask";
import UpdateTask from "./components/UpdateTask"

const App = () => {
  const task_data = localStorage.getItem("Tasks")
  if(!task_data)
  {
    localStorage.setItem("Tasks",JSON.stringify([]))
    window.location.reload()
  }
  return (
    <> 
      <BrowserRouter>
          <Routes>
            <Route path='/'   element={<HeasderTasks/>} >
          </Route>
            <Route path='/create-task'   element={<CreateTask/>} >
            </Route>
            <Route path='/view-task'   element={<ViewTask/>} >
            </Route>
            <Route path='/update-task'   element={<UpdateTask/>} >
            </Route>
          </Routes>
        </BrowserRouter>      
    </>
  );
};

export default App;
