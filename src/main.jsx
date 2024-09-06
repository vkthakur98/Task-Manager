import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import CreateTask from './components/CreateTask.jsx'
import { Provider } from 'react-redux'
import { store } from './Store/store.js'

// const router = createBrowserRouter([
//   {
//     path:"/",
//     element:<App/>,
//     children:[
//       {
//         path:"create-task",
//         element:<CreateTask/>
//     }]
//   }
// ]) 

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App/>
  </Provider>,
)
