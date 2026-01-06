import { useState } from 'react'
import {Route, Routes} from "react-router"
import Home from './pages/Home'
import Login from './pages/Login'
import Dashboard from './pages/DashBoard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
    </Routes>
  )
}

export default App
