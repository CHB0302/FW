import React, { useEffect, useState }  from 'react'
import {List, Empty, Tabs,} from 'antd';
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
                <TabPane tab="公司新闻" key="G1">
                  <List
                    pagination={1}
                    className="demo-loadmore-list"
                    loading={initLoading}
                    itemLayout="horizontal"
                    dataSource={list}
                    renderItem={(item) => (
                      <List.Item >
                          <List.Item.Meta 
                            title="标题"
                            description="公司新闻详细内容"
                          />
                          <div style={{fontSize:12, marginRight:40}}>系统管理员</div>
                          <div style={{fontSize:12 }}>{moment().format("YYYY-MM-DD")}</div>
                      </List.Item>
                      )}
                    />
                </TabPane>
                <TabPane tab="通知公告" key="G2">
                  <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}/>
                </TabPane>
              </Tabs>
    </div>
  )
}
