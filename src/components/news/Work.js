import React, { useEffect, useState }  from 'react'
import {  Avatar, List, Empty, Tabs, Skeleton,} from 'antd';
import moment from 'moment'
const { TabPane } = Tabs;
const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;

export default function News() {

    const [list, setList] = useState([]);
    const [initLoading, setInitLoading] = useState(true);
    useEffect(() => {
      fetch(fakeDataUrl)
        .then((res) => res.json())
        .then((res) => {
          setInitLoading(false);
          setList(res.results);
        });
    }, []);
  
  
    const onChange = (key) => {
      console.log(key);
    };

  return (
    <div>
         <Tabs defaultActiveKey="1" onChange={onChange}>
            <TabPane tab="全部" key="D1">
              <List
                pagination={3}
                className="demo-loadmore-list"
                loading={initLoading}
                itemLayout="horizontal"
                dataSource={list}
                renderItem={(item) => (
                  <List.Item>
                    <Skeleton avatar title={false} loading={item.loading} active>
                      <List.Item.Meta 
                        avatar={<Avatar src={item.picture.large} />}
                        title="标题"
                        description="待办事项详细内容"
                      />
                      <div style={{fontSize:12, marginRight:40}}>系统管理员</div>
                      <div style={{fontSize:12 }}>{moment().format("YYYY-MM-DD")}</div>
                    </Skeleton>
                  </List.Item>
                  )}
                />
            </TabPane>
            <TabPane tab="财务" key="D2">
              <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}/>
            </TabPane>
            <TabPane tab="人事" key="D3">
              <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}/>
            </TabPane>
            <TabPane tab="经营计划" key="D4">
              <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}/>
            </TabPane>
            <TabPane tab="风控" key="D5">
              <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}/>
            </TabPane>
          </Tabs>
    </div>
  )
}
