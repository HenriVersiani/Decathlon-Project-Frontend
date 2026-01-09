import { useState } from 'react'
import {Route, Routes} from "react-router"
import Home from './pages/Home'
import Login from './pages/Login'
import Dashboard from './pages/DashBoard'
import Register from './pages/Register/index,'
import UserDetail from './pages/UserDetail'
import UserLoggedDetail from './pages/UserLoggedDetail'
import EditUser from './pages/EditUser'

function App() {

  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/user/id/:id' element={<UserDetail/>}></Route>
        <Route path='/userLoggedDetail/id/:id' element={<UserLoggedDetail/>}></Route>
        <Route path='/edit/:id' element={<EditUser/>}></Route>
    </Routes>
  )
}

export default App
