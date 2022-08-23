import { Layout, Input ,Menu, Tabs, Button, Empty} from 'antd';
import React from 'react';
import { createFromIconfontCN } from '@ant-design/icons';
import './Msg.css'
const MyIcon4 = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/c/font_3599420_jlv2tlrbhyh.js', // 在 iconfont.cn 上生成
});
const { TabPane } = Tabs;
const { Header, Content, Footer, Sider } = Layout;
const operations = <Button style={{border: 'none',height: '40px',padding: '0px 20px',boxShadow:'none'}}><MyIcon4 type="icon-search"/></Button>


export default function Msg() {

    const  menuList = [
        {
          key: '1',
          icon: <MyIcon4 type="icon-wodeliucheng"/>,
          title: '工作中心',
        },
        ]
    
    const iconList = {
        "1":<MyIcon4 type="icon-wodeliucheng"/>,
        }

    const renderMenu =(menuList)=>{
        return menuList.map(item=>{
            return <Menu.Item key={item.key} icon={iconList[item.key]}>{item.title}</Menu.Item>
        })
        }

    const onChange = (key) => {
        console.log(key);
        };

  return (
    <div>
        <Layout>
            <Sider
            style={{overflowY:'hidden',background:'#fff',padding:'12px 0px', borderRight: '1px solid #e2e2e2',height:'454px'}}
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
                console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}
            >
                <div style={{
                        padding: '4px 11px',
                        margin:'0px 0px 10px'
                    }}>
                    <Input placeholder="请输入关键字" suffix={<MyIcon4 type="icon-shaixuan"/>} 
                    />
                </div>
                <div style={{borderTop: '1px solid #e2e2e2',flex:1,"overflow":"auto"}}>
                    <Menu
                        defaultSelectedKeys="1"
                        theme="light"
                        style={{ height: '100%'}}
                    >   
                    {renderMenu(menuList)}
                    </Menu>
                </div>
            </Sider>
            <Layout>
            <Content>
                <Layout>
                    <Tabs tabBarExtraContent={operations} onChange={onChange} style={{background:'white'}}>
                        <TabPane tab="待处理" key="1" style={{background:'#f0f2f5', minHeight:'406px'}}>
                            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} style={{marginTop:'150px'}}/>
                        </TabPane>
                        <TabPane tab="全部" key="2" style={{background:'#f0f2f5', minHeight:'406px'}}>
                            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} style={{marginTop:'150px'}}/>
                        </TabPane>
                    </Tabs>
                </Layout>
            </Content>
            </Layout>
        </Layout>
    </div>
  )
}
