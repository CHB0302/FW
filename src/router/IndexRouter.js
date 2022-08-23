import React from 'react'
import { HashRouter, Navigate, Route, Routes, } from 'react-router-dom'
import Login from '../view/login/Login'
import SandBox from '../view/SandBox/SandBox'

export default function IndexRouter() {
  return (
    <HashRouter>
        <Routes>
            <Route path="/login" element={<Login/>}/>
            {/* <Route path="/" element={<SandBox/>}/> */}
            <Route path="/*" element={
            localStorage.getItem("token")?
            <SandBox/>:
            <Navigate to='/home'/>
            } />
        </Routes>
    </HashRouter>
  )
}
