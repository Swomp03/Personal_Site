import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.tsx'
import './index.css'

import Home from './components/Home.tsx'
import GameSelect from './components/GameSelect.tsx'
import Projects from './components/Projects.tsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home/>,
    errorElement: <div>404 Not Found</div>
  },
  {
    path:'/hobbies',
    element: <GameSelect/>
  },
  {
    path:'/projects',
    element: <Projects/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
