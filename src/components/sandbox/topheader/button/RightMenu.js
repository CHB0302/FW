import React, { useRef,useState } from 'react'
import { Dropdown, Avatar, Menu, Space, Modal} from 'antd';
import Draggable from 'react-draggable';
import {
  UserOutlined,
  DownOutlined,
} from '@ant-design/icons';
import { createFromIconfontCN } from '@ant-design/icons';
import Msg from './modalcontent/Msg';
import Star from './modalcontent/Star'
const MyIcon3 = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/c/font_3598166_ymd5kgy50rs.js', // 在 iconfont.cn 上生成
});

export default function RightMenu() {

  const draggleRef = useRef(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible2, setIsModalVisible2] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [bounds, setBounds] = useState({
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  });

  const menu1 = (
    <Menu
      items={[
        {
          key: '1',
          label: "个性化设计",
          icon:<MyIcon3 type="icon-shezhi"/>
        },
        {
          key: '2',
          label: "密码设置",
          icon:<MyIcon3 type="icon-mima"/>
        },
        {
          key: '3',
          label: "主题中心",
          icon:<MyIcon3 type="icon-pifuzhuti"/>
        },
        {
          key: '4',
          label: "布局选择",
          icon:<MyIcon3 type="icon-buju"/>
        },
        {
          key: '5',
          danger: true,
          label:("退出"),
          icon:<MyIcon3 type="icon-tuichu"/>
        },
      ]}
      />     
    );

    const menu3 = (
      <Menu
        selectable
        defaultSelectedKeys={['1']}
        items={[
          {
            key: '1',
            label: '后端应用中心',
            icon:<MyIcon3 type="icon-yingyong"/>
          },
          {
            key: '2',
            label: '组织图表',
            icon:<MyIcon3 type="icon-fl-zuzhi"/>
          },
          {
            key: '3',
            label: '插件下载',
            icon:<MyIcon3 type="icon-menu_cjgl"/>
          },
          {
            key: '4',
            label: '授权信息',
            icon:<MyIcon3 type="icon-kechengshouquan"/>
          },
          {
            key: '5',
            label: '版本',
            icon:<MyIcon3 type="icon-menu_app_bbgl"/>
          },
        ]}
      />
    );
    
  
  const showModal1 = () => {
    setIsModalVisible(true);
  };

  const handleCancel1 = () => {
    setIsModalVisible(false);
  };

  const showModal2 = () => {
    setIsModalVisible2(true);
  };

  const handleCancel2 = () => {
    setIsModalVisible2(false);
  };

  const onStart = (_event, uiData) => {
    const { clientWidth, clientHeight } = window.document.documentElement;
    const targetRect = draggleRef.current?.getBoundingClientRect();

    if (!targetRect) {
      return;
    }

    setBounds({
      left: -targetRect.left + uiData.x,
      right: clientWidth - (targetRect.right - uiData.x),
      top: -targetRect.top + uiData.y,
      bottom: clientHeight - (targetRect.bottom - uiData.y),
    });
  };


  return (
    <div>
      {/* 右边菜单栏 */}
      <div className='rightmenu'>
            {/* 收藏与信息 */}
            <div className='star-menu-box'>
            <MyIcon3 type="icon-remind" className='msg-menu-icon' onClick={showModal1}/>
            <Modal 
              title={
                <div
                  style={{
                    width: '100%',
                    cursor: 'move',
                  }}
                  onMouseOver={() => {
                    if (disabled) {
                      setDisabled(false);
                    }
                  }}
                  onMouseOut={() => {
                    setDisabled(true);
                  }} 
                  onFocus={() => {}}
                  onBlur={() => {}} // end
                >
                  <MyIcon3 type="icon-remindfill" style={{paddingRight:'5px'}}/>
                  消息中心
                </div>
              }
              visible={isModalVisible} 
              onCancel={handleCancel1} 
              footer={null} 
              width={900}
              modalRender={(modal) => (
                <Draggable
                  disabled={disabled}
                  bounds={bounds}
                  onStart={(event, uiData) => onStart(event, uiData)}
                >
                  <div ref={draggleRef}>{modal}</div>
                </Draggable>
              )}
            >
              <Msg/>
            </Modal>
            <MyIcon3 type="icon-star-fill" className='star-menu-icon' onClick={showModal2}/>
            <Modal 
              title={
                <div
                  style={{
                    width: '100%',
                    cursor: 'move',
                  }}
                  onMouseOver={() => {
                    if (disabled) {
                      setDisabled(false);
                    }
                  }}
                  onMouseOut={() => {
                    setDisabled(true);
                  }} 
                  onFocus={() => {}}
                  onBlur={() => {}} // end
                >
                  <MyIcon3 type="icon-star" style={{paddingRight:'5px'}}/>
                  收藏夹
                </div>
              }
              visible={isModalVisible2} 
              onCancel={handleCancel2} 
              footer={null} 
              width={900}
              modalRender={(modal) => (
                <Draggable
                  disabled={disabled}
                  bounds={bounds}
                  onStart={(event, uiData) => onStart(event, uiData)}
                >
                  <div ref={draggleRef}>{modal}</div>
                </Draggable>
              )}
            >
              <Star/>
            </Modal>
            </div>

            {/* 更多按钮 */}
            <div className='moreMenuBox'>
              <Dropdown overlay={menu3} trigger={['click']}  >
                <MyIcon3 type="icon-more" className='moreMenuIcon'/>
              </Dropdown>
            </div>

            {/* 个人资料 */}
            <div className='avatarbox' style={{float:"right"}}>
                  <Avatar size="large" icon={<UserOutlined />}/>
                  <Dropdown overlay={menu1}>
                    {/* <a onClick={(e) => e.preventDefault()}> */}
                      <Space>
                      系统管理员
                        <DownOutlined />
                      </Space>
                    {/* </a> */}
                  </Dropdown>
            </div>
          </div>
    </div>
  )
}


