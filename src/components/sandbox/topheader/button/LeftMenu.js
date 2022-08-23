import React from 'react'
import { Button,Input,Select,Dropdown, Menu, Card } from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
const MyIcon3 = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/c/font_3598166_foo4hcw21ae.js', // 在 iconfont.cn 上生成
});
const { Option } = Select;
const { Search } = Input;

export default function LeftMenu() {

  let navigate = useNavigate()


  const menu2 = (
    <Menu
      selectable
      defaultSelectedKeys={['1']}
      items={[
        {
          key: '1',
          label: '设置',
          icon:<MyIcon3 type="icon-shezhi"/>
        },
      ]}
    />
  );

  
  const content = (
    <div style={{
      width:'565px',
      paddingTop:'10px',
    }}>
      <Card style={{
                      paddingTop: '10px', 
                      paddingRight: '0px', 
                      paddingBottom: '0px', 
                      paddingLeft: '0px'
                    }}>
          <div className='icon-menu' style={{background:'#6644EE'}}>
            <MyIcon3 type="icon-liuchengchaxun" className='MHIcon'/>
            <div style={{paddingTop:'10px'}}>我的流程</div>
          </div>
          <div className='icon-menu' style={{background:'#2C579B'}}>
            <MyIcon3 type="icon-a-HRrenshi-08" className='MHIcon'/>
            <div style={{paddingTop:'10px'}}>我的人事</div>
          </div>
          <div className='icon-menu' style={{background:'#df583a'}}>
            <MyIcon3 type="icon-zhishi" className='MHIcon'/>
            <div style={{paddingTop:'10px'}}>我的知识</div>
          </div>
          <div className='icon-menu' style={{background:'#df583a'}}>
            <MyIcon3 type="icon-kufangguanli-danganguanli" className='MHIcon'/>
            <div style={{paddingTop:'10px'}}>档案管理</div>
          </div>
          <div className='icon-menu' style={{background:'#0078d7'}}>
            <MyIcon3 type="icon-huiyishi-" className='MHIcon'/>
            <div style={{paddingTop:'10px'}}>我的会议</div>
          </div>
          <div className='icon-menu' style={{background:'#0078d7'}}>
            <MyIcon3 type="icon-baobiao1" className='MHIcon'/>
            <div style={{paddingTop:'10px'}}>我的报表</div>
          </div>
          <div className='icon-menu' style={{background:'#8b3e86'}}>
            <MyIcon3 type="icon-tiaochawenjuan" className='MHIcon'/>
            <div style={{paddingTop:'10px'}}>调查</div>
          </div>
          <div className='icon-menu' style={{background:'#008272'}}>
            <MyIcon3 type="icon-richengjilu" className='MHIcon'/>
            <div style={{paddingTop:'10px'}}>我的日程</div>
          </div>
      </Card>
    </div>
    );

  const onSearch = () => {

  }

  return (
    <div>
       {/* 左边菜单栏 */}
       <div className="left-menu">
            {/* 首页 */}
            <div className='homeIconBox'>
             <MyIcon3 type="icon-zhuye" className='homeIcon' onClick={()=> navigate('/home')}/>
            </div>
            {/* 门户 */}
            <div className='menuBox'>
              <Dropdown  className='popover' overlay={content}>
                <Button type="primary">
                  <div className='menuIconBox'>
                  <MyIcon3 type="icon-dapingmenhu" className='menuIcon'/>
                  </div>
                  <span className='title'>
                    门户
                  </span>
                </Button>
              </Dropdown>
            </div>
            {/* 设置 */}
            <div className='useMenuBox'>
              <Dropdown overlay={menu2} trigger={['click']}>
                <MyIcon3 type="icon-yingyongchengxu" className='useMenuIcon'/>
              </Dropdown>
            </div>
            {/* 搜索框 */}
            <div className='searchItemBox'>
              <Input.Group compact>
                <Select
                  defaultValue="微搜"
                  bordered={false}
                  style={{
                    width: '30%',
                    color:'white'
                  }}
                >
                  <Option value="1">微搜</Option>
                  <Option value="2">人员</Option>
                  <Option value="3">流程</Option>
                  <Option value="4">文档</Option>
                </Select>
                <Search 
                bordered={false}
                style={{ width: '70%',}}
                placeholder="请输入关键词搜索" onSearch={onSearch} enterButton />
              </Input.Group>
            </div>
        </div>
    </div>
  )
}

