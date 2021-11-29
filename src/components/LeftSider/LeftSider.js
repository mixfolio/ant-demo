import React from 'react';
import {Menu, Layout, Badge} from 'antd';
import {
    HomeOutlined,
    FileDoneOutlined,
    TeamOutlined,
    CopyOutlined,
    SnippetsOutlined,
    BookOutlined,
    EnvironmentOutlined,
    BankOutlined
  } from '@ant-design/icons';

  const { Sider} = Layout;

const LeftSider = ({collapsed}) => {
    return (
        <Sider width="256" trigger={null} theme="light" collapsible collapsed={collapsed}>
            <div
                style={{ height: '64px', background: '#03265E' }}
                className="logo" />
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
            >
                <Menu.Item
                    key="1"
                    icon={<HomeOutlined />}
                >
                    Главная
                </Menu.Item>
                <Menu.Item key="2" icon={<CopyOutlined />}>

                    Заявки
                    <Badge count={9} />
                </Menu.Item>

                <Menu.Item key="3" icon={<SnippetsOutlined />}>Поручения</Menu.Item>
                <Menu.Item key="4" icon={<FileDoneOutlined />}>Акты</Menu.Item>
                <Menu.Item key="5" icon={<EnvironmentOutlined />}>ЗУ</Menu.Item>
                <Menu.Item key="6" icon={<BankOutlined />}>ОКС</Menu.Item>
                <Menu.Item key="7" icon={<TeamOutlined />}>Эксперты</Menu.Item>
                <Menu.Item key="8" icon={<BookOutlined />}>Справочники</Menu.Item>

            </Menu>
        </Sider>
    )
}

export default LeftSider
