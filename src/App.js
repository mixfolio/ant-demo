import { Layout, Row, Menu, Badge, Avatar, Typography, Space ,} from "antd";
import {
  HomeOutlined,
  PieChartOutlined,
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  BellOutlined,
  SearchOutlined,
  GlobalOutlined,
  CopyOutlined,
  SnippetsOutlined,
  BookOutlined
} from '@ant-design/icons';

import React from "react";
import { AppDrawer } from "./components/AppDrawer";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";
const { Header, Sider, Content } = Layout;
const { Title } = Typography;


class App extends React.Component {
  state = {
    collapsed: true
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout
        style={{ height: "100%" }}
      >
        <Sider width="256" trigger={null} theme="light" collapsible collapsed={this.state.collapsed}>
          <div
            style={{ height: '64px', background: '#03265E' }}
            className="logo" />
          <Menu
            // theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
          // style={{ heigt: '100%' }}
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
            <Menu.Item key="4" icon={<PieChartOutlined />}>Акты</Menu.Item>
            <Menu.Item key="5" icon={<UserOutlined />}>ЗУ</Menu.Item>
            <Menu.Item key="6" icon={<UserOutlined />}>ОКС</Menu.Item>
            <Menu.Item key="7" icon={<UserOutlined />}>Эксперты</Menu.Item>
            <Menu.Item key="8" icon={<BookOutlined />}>Справочники</Menu.Item>

          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" >
            <Space size="middle">
              {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: this.toggle,
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
          <Content
            style={{ 
              padding: '0 24px ', 
              position: 'relative',
              overflow: 'hidden'  }}
          >
            <div className="map">
              <Row style={{ 
                justifyContent: 'space-between', 
                overflow: 'hidden auto',
                border: '1px solid red'}}>
                <LeftPanel/>
                {/* <RightPanel/>  */}
              </Row>
            <AppDrawer/>
                
              </div>

      





          </Content>



        </Layout>
      </Layout>
    );

  }

}

export default App;
