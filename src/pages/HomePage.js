import React from 'react';
import {Row, Card} from 'antd';
import LeftPanel from '../components/LeftPanel/LeftPanel';
import TestForm from '../components/TestForm';
import RightPanel from '../components/RightPanel';
import CardSlider from '../components/CardSlider/CardSlider';
import AppDrawer from '../components/AppDrawer/AppDrawer';

const HomePage = () => {
  return (
    <div className="map">
      <Row style={{
        justifyContent: 'space-between',
        overflow: 'hidden auto',
      }}>
        <LeftPanel 
          // showDrawer={showDrawer} 
        />
        <Card>
          <TestForm />

        </Card>
        <CardSlider />
        <RightPanel />
      </Row>

      <AppDrawer 
        // visible={visible} 
        // onClose={onClose} 
        />
    </div>
  );
}

export default HomePage
