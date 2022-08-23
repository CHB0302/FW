import React from 'react'
import { Layout } from 'antd';
import './TopHeader.css'
import RightMenu from './button/RightMenu';
import LeftMenu from './button/LeftMenu';
const { Header} = Layout;

export default function TopHeader() {
  return (
      <Header >
        <div className='headerBox'>

        {/* logo标题 */}
         <div className="logo" ><span className="logoname" >e-cology | 前端用户中心</span></div>

        {/* 左边菜单栏 */}
          <LeftMenu/>

        {/* 右边菜单栏 */}
          <RightMenu/>

         </div>
      </Header>
  )
}
