import { Layout, Input ,Menu, Button, Empty,PageHeader ,Select } from 'antd';
import React from 'react';
import './Star.css'
import { PlusOutlined,MenuOutlined } from '@ant-design/icons';
const {  Content,  Sider } = Layout;
const { Option } = Select;
const { Search } = Input;


export default function Star() {

    const  menuList1 = [
        {
          key: '1',
          title: '我的收藏',
        },
        ]

    const selectBefore = (
        <Select defaultValue="全部" className='quanbuleixing'>
            <Option value="quanbu">全部</Option>
            <Option value="wendang">文档</Option>
            <Option value="liucheng">流程</Option>
            <Option value="xiangmu">项目</Option>
            <Option value="kehu">客户</Option>
            <Option value="xiaoxi">消息</Option>
            <Option value="qita">其他</Option>
        </Select>
        );

    const renderMenu =(menuList1)=>{
        return menuList1.map(item=>{
            return <Menu.Item key={item.key} >{item.title}</Menu.Item>
        })
        }

    const onClick = (key) => {
        console.log(key);
        };

    const onSearch = () => {

    }

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
                    <MenuOutlined />
                    全部目录
                    <Button icon={<PlusOutlined />} style={{float:'right',fontSize:'30px',marginTop:'-5px'}}/>
                </div>
                <div style={{borderTop: '1px solid #e2e2e2',flex:1,"overflow":"auto"}}>
                    <Menu
                        defaultSelectedKeys="1"
                        theme="light"
                        style={{ height: '100%'}}
                    >   
                    {renderMenu(menuList1)}
                    </Menu>
                </div>
            </Sider>
            <Layout>
            <Content>
                <Layout>
                    <PageHeader style={{height:'61px',background:'#fff'}}>
                        <Button icon={<PlusOutlined />} onClick={onClick}>
                            添加
                        </Button>
                        <Search
                            addonBefore={selectBefore}
                            placeholder="请输入关键词搜索"
                            allowClear
                            onSearch={onSearch}
                            style={{
                                width: 304,
                                paddingLeft: '50px'
                            }}
                        />
                        <Button style={{height:'32px',float:'right', right:'10px'}}>
                            删除
                        </Button>
                        <Button style={{height:'32px',float:'right', right:'20px'}}>
                            移动
                        </Button>
                    </PageHeader>
                    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} style={{marginTop:'150px'}}/>
                </Layout>
            </Content>
            </Layout>
        </Layout>
    </div>
  )
}
