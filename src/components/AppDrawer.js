import React, { useState } from 'react';
import { Drawer, Button, Space } from 'antd';
import KrtTable from './KrtTable'

export const AppDrawer = () => {
    const [visible, setVisible] = useState(false);
  
    const showDrawer = () => {
      setVisible(true);
    };
  
  
    const onClose = () => {
      setVisible(false);
    };
  
    return (
      <>
        <Space>
          <Button style={{ margin: 24 }} type="primary" onClick={showDrawer}>
            Open Drawer
          </Button>
        </Space>
        <Drawer
          title="Данные слоя КРТ"
          placement='bottom'
          height="500px"
          onClose={onClose}
          visible={visible}
          getContainer={false}
          style={{ position: 'absolute' }}
          extra={
            <Space>
              <Button onClick={onClose}>Cancel</Button>
              <Button type="primary" onClick={onClose}>
                OK
              </Button>
            </Space>
          }
        >
          <KrtTable/>
        </Drawer>
      </>
    );
  };