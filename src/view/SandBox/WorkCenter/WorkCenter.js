import React from 'react'
import { Card, Col, Row,  Empty,} from 'antd';
import './WorkCenter.css'
import { createFromIconfontCN } from '@ant-design/icons';
import News from '../../../components/news/News';
import Work from '../../../components/news/Work'
const MyIcon1 = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/c/font_3593276_yhpcio7l46e.js', // 在 iconfont.cn 上生成
});

export default function WorkCenter() {

  return (
    <div className="site-card-wrapper">
      <Row>
          <Col span={16}>
            <Card title="公司新闻" bordered={false} style={{minHeight: '342px'}}>
              <News/>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="快捷入口" bordered={false}>
              <div className='icon-list' >
                 <MyIcon1 type="icon-liuyanban-05" className='KJIcon'/>
                <div>内部留言</div>
              </div>
              <div className='icon-list' >
                 <MyIcon1 type="icon-chuchashenqingshenpiliucheng" className='KJIcon'/>
                <div>出差申请</div>
              </div>
              <div className='icon-list' >
                 <MyIcon1 type="icon-qingjiashenqing" className='KJIcon'/>
                <div>请假申请</div>
              </div>
              <div className='icon-list' >
                 <MyIcon1 type="icon-kaoqinguanli1" className='KJIcon'/>
                <div>考勤异常</div>
              </div>

              <div className='icon-list' >
                 <MyIcon1 type="icon-huiyixiangmu" className='KJIcon'/>
                <div>会议申请</div>
              </div>
              <div className='icon-list' >
                 <MyIcon1 type="icon-feiyongbaoxiao" className='KJIcon'/>
                <div>费用报销</div>
              </div>
              <div className='icon-list' >
                 <MyIcon1 type="icon-xinjian" className='KJIcon'/>
                <div>新建文档</div>
              </div>
              <div className='icon-list' >
                 <MyIcon1 type="icon-tongxunlu1" className='KJIcon'/>
                <div>通讯录</div>
              </div>

              <div className='icon-list' >
                 <MyIcon1 type="icon-weibo1" className='KJIcon'/>
                <div>我的微博</div>
              </div>
              <div className='icon-list' >
                 <MyIcon1 type="icon-a-lujing4237" className='KJIcon'/>
                <div>我的知识</div>
              </div>
              <div className='icon-list' >
                 <MyIcon1 type="icon-richeng" className='KJIcon'/>
                <div>我的日程</div>
              </div>
              <div className='icon-list' >
                 <MyIcon1 type="icon-gengduo2" className='KJIcon'/>
                <div>更多应用</div>
              </div>
            </Card>
          </Col>
      </Row>
      <Row>
      <Col span={16}>
        <Card title="代办中心" bordered={false} style={{minHeight: '342px'}}>
         <Work/>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="待阅中心" bordered={false} style={{minHeight: '342px'}}>
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}/>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col span={8}>
          <Card title="未读文档" bordered={false} style={{minHeight: '286px'}}>
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}/>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="常用下载" bordered={false} style={{minHeight: '286px'}}>
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}/>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="我的邮件" bordered={false} style={{minHeight: '286px'}}>
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}/>
          </Card>
        </Col>
      </Row>
  </div>
  )
}
