import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import ToDo from '../pages/ToDo'
import TodoList from '../pages/TodoList'

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<LandingPage/>} />
            <Route path='/todolist' element={<ToDo/>} />
            <Route path='/listado' element={<TodoList/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter