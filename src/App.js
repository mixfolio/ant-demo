import React, { useState } from "react";
import { Layout} from "antd";
import LeftSider from "./components/LeftSider";
import AppHeader from "./components/AppHeader";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
const { Content } = Layout;


const App = () => {

  const [collapsed, setCollapsed] = useState(true)

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };


  const onClose = () => {
    setVisible(false);
  };

  return (
    <BrowserRouter>
    <Layout
      style={{ minHeight: "100%" }}
    >
      <LeftSider collapsed={collapsed} />
      <Layout className="site-layout">
        <AppHeader toggle={toggle} collapsed={collapsed} />
        <Content
          style={{
            padding: '0 24px ',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <AppRouter />
        </Content>
      </Layout>
    </Layout>
    </BrowserRouter>
  );

}

export default App;
