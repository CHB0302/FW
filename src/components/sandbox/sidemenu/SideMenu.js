import React, { useState } from 'react'
import { useNavigate,useLocation } from 'react-router-dom';
import {Layout, Menu } from 'antd';
import './SideMenu.css'
import {
  MessageOutlined,
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons';
const {Sider} = Layout;

export default function SideMenu(props) {

  let navigate = useNavigate()
  let location = useLocation()

  const [collapsed, setCollapsed] = useState(false);

  const  menuList = [
    {
      key: '/workcenter',
      icon: <UserOutlined />,
      title: '工作中心',
    },
    {
      key: '/msgcenter',
      icon: <MessageOutlined />,
      title: '信息中心',
    }
    ]

  const iconList = {
    "/workcenter":<UserOutlined/>,
    "/msgcenter":<MessageOutlined/>,
  }


  const renderMenu =(menuList)=>{
    return menuList.map(item=>{
      return <Menu.Item key={item.key} icon={iconList[item.key]} onClick={()=> navigate(item.key)}>{item.title}</Menu.Item>
    })
  }

    

  const selectKeys = [location.pathname]

  return (
    
    <Sider trigger={null} collapsible collapsed={collapsed} width={200} className="site-layout-background">
       
        <div>
           {/* 缩小放大边框 */}
           <div className='CollapsedTrigger' >
                          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                              className: 'trigger',
                              onClick: () => setCollapsed(!collapsed),
                            })}
                  </div>
        {/* 菜单栏 */}
        <div style={{display:"flex",height:"100%","flexDirection":"column"}}>
        <div style={{flex:1,"overflow":"auto"}}>
          <Menu
            theme="dark"
            mode="inline"
            selectedKeys={selectKeys}
            style={{ height: '100%', borderRight: 0 }}
           >   
           {renderMenu(menuList)}
          </Menu>
        </div>
        </div>
        </div>
        
      </Sider>

  
    )
}
