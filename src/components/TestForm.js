import React from 'react'
import { Form, Input, Space, Select, Button } from 'antd';
const { Option } = Select;

const field = {};
const TestForm = () => {

    /*  return <Row gutter={16}>
                 <Col span={12}>
                     <Form.Item label='field.name' name={`${field.key}_from`}>
                         <Input placeholder="от" />
                     </Form.Item>
                 </Col>
                 <Col span={12}>
                     <Form.Item name={`${field.key}_to`}>
                         <Input placeholder="до" />
                     </Form.Item>
                 </Col>
             </Row>; */
    return (
        <Form layout="vertical">

            <Form.Item>
                <Select defaultValue="lucy" >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>
                        Disabled
                    </Option>
                    <Option value="Yiminghe">yiminghe</Option>
                </Select>
            </Form.Item>
            <Form.Item label='Введите очень длинное имя пользователя'>
                <Space size="middle">
                    <Input placeholder="от" />
                    <Input placeholder="до" />
                </Space>
            </Form.Item>


            <Space align="end" size="middle">
                <Form.Item label='field.name' name={`${field.key}_from`}>
                    <Input placeholder="от" />
                </Form.Item>


                <Form.Item name={`${field.key}_to`}>
                    <Input placeholder="до" />
                </Form.Item>
            </Space>

            <Form.Item  >
                <Space size="middle">
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
                <Button htmlType="button" >
                    Reset
                </Button>
                <Button type="link" htmlType="button" >
                    Fill form
                </Button>
                </Space>
            </Form.Item>
        </Form>

    );
}

export default TestForm


