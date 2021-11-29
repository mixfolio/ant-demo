import React from 'react';
import {Layout, Space, Badge, Avatar, Typography} from 'antd';
import {
    UserOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    BellOutlined,
    SearchOutlined,
    GlobalOutlined,
  
  } from '@ant-design/icons';
const {Header} = Layout;
const { Title } = Typography;

const AppHeader = ({toggle, collapsed}) => {
    return (
        <Header className="site-layout-background" >
            <Space size="middle">
                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: 'trigger',
                    onClick: toggle,
                })}
                <GlobalOutlined style={{ fontSize: 24 }} />
            </Space>
            <div className="user-profile">
                <Space>
                    <SearchOutlined style={{ fontSize: 24 }} />
                    <Badge count={5}>
                        <BellOutlined style={{ fontSize: 24 }} />
                    </Badge>
                    <Title level={5} type="secondary">Евсеев К.В.</Title>
                    <Avatar size="large" icon={<UserOutlined />} />
                </Space>
            </div>
        </Header>
    )
}

export default AppHeader
