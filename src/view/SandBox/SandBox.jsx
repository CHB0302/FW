import './SandBox.css'
import React from 'react'
import {  Navigate, Route, Routes, } from 'react-router-dom'
import SideMenu from '../../components/sandbox/sidemenu/SideMenu'
import TopHeader from '../../components/sandbox/topheader/TopHeader'
import Home from './home/Home'
import MsgCenter from './MsgCenter/MsgCenter'
import Nopermission from './nopermission/Nopermission'
import WorkCenter from './WorkCenter/WorkCenter'
import {Layout} from 'antd'
const { Content } = Layout;

export default function SandBox() {
  return (
    <Layout>
      <TopHeader/>
      <Layout>
        <SideMenu/>
        <Content
          className="site-layout-background"
          style={{
            padding: 8,
            margin: 0,
            minHeight: 280,
            overflow:'auto'
          }}
        >
          <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/workcenter" element={<WorkCenter/>}/>
            <Route path="/msgcenter" element={<MsgCenter/>}/>

            <Route path="/" element={<Navigate replace from="/" to="/home"/>}/>
            <Route path="*" element={<Nopermission/>}/>
          </Routes>
        </Content>
      </Layout>
    </Layout>
  )
}
