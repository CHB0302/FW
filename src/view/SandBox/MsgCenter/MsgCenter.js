import React from 'react'
import { Card, Col, Row, Empty,} from 'antd';
import './MsgCenter.css'
import News from '../../../components/news/News';
import { createFromIconfontCN } from '@ant-design/icons';
const MyIcon2 = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/c/font_3596994_jkrm293uzk.js', // 在 iconfont.cn 上生成
});

export default function MsgCenter() {

  const gridStyle = {
    height:'70px',
    width: '16.34%',
    textAlign: 'center',
    marginRight:'2px',
    marginLeft:'2px',
    marginTop:'2px',
    marginBottom:'2px',
    background:'#F3F7FC'
  };
 

  return (

    <div className="site-card-wrapper">
      <Row>
          <Col span={16}>
          <Row>
            <Card title="流程中心" bordered={false} style={{height:'58px',marginBottom:'8px'}}>
            </Card>
          </Row>
          <Row>
            <Card title="领导讲话" bordered={false} style={{minHeight:'400px', marginTop:'8px',marginBottom:'8px'}}>
              <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}/>
            </Card>
          </Row>
          <Row>
            <Card title="公司新闻" bordered={false} style={{marginTop:'8px'}}>
              <News/>
            </Card>
          </Row>
          </Col>

          <Col span={8}>
            <Row>
              <Card bordered={false} style={{height:'120px', marginBottom:'8px'}}>
                <div className='icon-list' style={{marginTop: '20px'}}>
                  <MyIcon2 type="icon-xinxi-xianxingyuankuang" className='KJIcon'/>
                  <div>信息参考</div>
                </div>
                <div className='icon-list' style={{marginTop: '20px'}}>
                  <MyIcon2 type="icon-XX_008" className='KJIcon'/>
                  <div>课题研究</div>
                </div>
                <div className='icon-list' style={{marginTop: '20px'}}>
                  <MyIcon2 type="icon-pinpaitemai" className='KJIcon'/>
                  <div>品牌素材</div>
                </div>
                <div className='icon-list' style={{marginTop: '20px'}}>
                  <MyIcon2 type="icon-xinxipilou1" className='KJIcon'/>
                  <div>信息披露</div>
                </div>
              </Card>
            </Row>
            <Row>
              <Card title="通知公告" bordered={false} style={{marginTop:'8px',marginBottom:'8px',minHeight: '300px'}}>
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}/>
              </Card>
            </Row>
            <Row>
              <Card title="规章制度" bordered={false} style={{marginTop:'8px',minHeight: '370px'}}>
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}/>
              </Card>
            </Row>
          </Col>
      </Row>

      <Row>
        <Col span={8}>
          <Card title="学习园地" bordered={false} style={{minHeight: '286px'}}>
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}/>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="行业动态" bordered={false} style={{minHeight: '286px'}}>
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}/>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="公司期刊" bordered={false} style={{minHeight: '286px'}}>
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}/>
          </Card>
        </Col>
      </Row>

      <Row>
          <Card title="相关链接" bordered={false} style={{height:'132px', marginTop:'8px' ,marginLeft: '8px', marginRight: '8px' }}>
            <Card.Grid style={gridStyle}>
              <a href='https://www.gov.cn/'>中央人民政府网</a>
            </Card.Grid>
            <Card.Grid style={gridStyle}>
              <a href='http://www.hqzxxww.com/'>全国性党建网站</a>
            </Card.Grid>
            <Card.Grid style={gridStyle}>
              <a href='https://www.shanghai.gov.cn/'>上海市人民政府网</a>
            </Card.Grid>
            <Card.Grid style={gridStyle}>
              <a href='https://fgw.sh.gov.cn/'>上海市发改革委</a>
            </Card.Grid>
            <Card.Grid style={gridStyle}>
              <a href='http://www.sheitc.sh.gov.cn/'>上海市经济信息化委</a>
            </Card.Grid>
            <Card.Grid style={gridStyle}>
              <a href='http://www.cbirc.gov.cn/'>上海市银保监局</a>
            </Card.Grid>
          </Card>
      </Row>
  </div>
  )
}
