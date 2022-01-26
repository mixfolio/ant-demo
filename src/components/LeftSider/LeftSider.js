import React from 'react';
import { Layout, Badge, Menu, } from 'antd';
// import { Menu,  MenuItem } from '../ui/Menu';




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
import { NavLink } from 'react-router-dom';

const { Sider } = Layout;
const {SubMenu} = Menu

const LeftSider = ({ collapsed }) => {
    return (
        <Sider width="256" trigger={null} theme="light" collapsible collapsed={collapsed}>
            <div
                style={{ height: '64px', background: '#7367f0' }}
                className="logo" />
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
            >
                <Menu.Item
                    key="1"
                    icon={<HomeOutlined />}

                >
                    <NavLink to="/home">Главная</NavLink>
                </Menu.Item>
                <Menu.Item key="2" icon={<CopyOutlined />}>

                    <NavLink to="/tables">Таблицы</NavLink>
                    <Badge count={9} />
                </Menu.Item>

                <Menu.Item key="3" icon={<SnippetsOutlined />}>
                    <NavLink to="/cards">Карточки</NavLink>
                </Menu.Item>
                <Menu.Item key="4" icon={<FileDoneOutlined />}>
                    <NavLink to="/forms">Формы</NavLink>
                </Menu.Item>
                <Menu.Item key="5" icon={<EnvironmentOutlined />}>
                    <NavLink to="/grid">Сетка</NavLink>
                </Menu.Item>
                <Menu.Item key="6" icon={<BankOutlined />}>
                    <NavLink to="/ui">UI-библиотека</NavLink>
                </Menu.Item>
                <SubMenu key="sub1" icon={<BookOutlined />} title="Компоненты">
                    <Menu.Item key="7" icon={<TeamOutlined />}>Кнопки</Menu.Item>
                    <Menu.Item key="8" icon={<BookOutlined />}>Формы</Menu.Item>
                </SubMenu>
                <Menu.Item key="9" icon={<TeamOutlined />}>Эксперты</Menu.Item>
                <Menu.Item key="10" icon={<BookOutlined />}>Справочники</Menu.Item>

            </Menu>
        </Sider>
    )
}

export default LeftSider
