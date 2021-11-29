import React, { useState } from "react";
import { Layout, Row} from "antd";
import  AppDrawer from "./components/AppDrawer/AppDrawer";
import LeftPanel from "./components/LeftPanel/LeftPanel";
import RightPanel from "./components/RightPanel";
import LeftSider from "./components/LeftSider";
import AppHeader from "./components/AppHeader";
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
    <Layout
      style={{ height: "100%" }}
    >
     <LeftSider collapsed={collapsed}/>
      <Layout className="site-layout">
       <AppHeader  toggle={toggle} collapsed={collapsed}/>
        <Content
          style={{
            padding: '0 24px ',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div className="map">
            <Row style={{
              justifyContent: 'space-between',
              overflow: 'hidden auto',
            }}>
              <LeftPanel showDrawer={showDrawer}/>
              <RightPanel />
            </Row>
           
            <AppDrawer visible={visible} onClose={onClose}/>
          </div>







        </Content>



      </Layout>
    </Layout>
  );

}

export default App;
