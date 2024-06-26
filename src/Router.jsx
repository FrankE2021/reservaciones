import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Form from './Form'


const Router = () => {
  return (
    <>
    <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/form" element={<Form/>}/>
        <Route path="/" element={<Home/>}/>
    </Routes>
    </>
  )
}

export default Router
