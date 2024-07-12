import { useState } from 'react'
import './App.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './pages/Home';
import Wallet from './pages/Wallet';
import Members from './pages/Members';


function App() {
  const router=createBrowserRouter([
    {path:'/',element:<Wallet/>},
    {path:'/members',element:<Members/>},
    {path:'/home',element:<Home/>},
    
  ])

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
