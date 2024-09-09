import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateTask from "./components/CreateTask";
import HeasderTasks from "./components/HeasderTasks";
import ViewTask from "./components/ViewTask";
import UpdateTask from "./components/UpdateTask"
import { getToken } from "firebase/messaging";
import { messaging } from "./firebase-conf/firebase";

const App = () => {
  const task_data = localStorage.getItem("Tasks")
  async function requestPermission()
  {
      const permission = await Notification.requestPermission()
      if(permission === "granted")
      {
        const token = await getToken(messaging,
          {vapidKey:
          "BLucLK0nUCqnLNaDUs9JJPMqtif7wuHAIBaNnHHaI1MRLVODrk9e7jiZjhkXudaFT9OhVh7T9BEorDaQwK7G6P0"})
        alert(token)
      }
      else if(permission === "denied"){
        alert("You denied notification permission")
      }
  }

  useEffect(()=>{
      requestPermission()
  })
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
