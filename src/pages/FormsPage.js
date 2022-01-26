import React from 'react';
import { Form, Row, InputNumber, Space, Select, Card } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
// import { Form } from '../components/ui/Form';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';

const { Option } = Select;

const FormsPage = () => {
    const field = {};
    return (
        <>
            {/* <Row>
            <Col> */}
            <Card
                title="Фильтр КРТ"
                extra={<CloseCircleOutlined style={{ fontSize: 24 }} />}>
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
                        <Space size="middle" style={{ width: '100%' }}>
                            <Input placeholder="от" />
                            <Input placeholder="до" />
                        </Space>
                    </Form.Item>

                    <Form.Item label="BirthDate" style={{ marginBottom: 0 }}>
                        <Form.Item
                            name="year"
                            rules={[{ required: true }]}
                            style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                        >
                            <Input placeholder="Input birth year" />
                        </Form.Item>
                        <Form.Item
                            name="month"
                            rules={[{ required: true }]}
                            style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
                        >
                            <Input placeholder="Input birth month" />
                        </Form.Item>
                    </Form.Item>


                    <Space align="end" size="middle" style={{ width: '100%' }}>
                        <Form.Item label='InputNumber' type='number' name={`${field.key}_from`}>
                            <InputNumber placeholder="от" />
                        </Form.Item>


                        <Form.Item name={`${field.key}_to`}>
                            <InputNumber placeholder="до" />
                        </Form.Item>
                    </Space>

                    <Form.Item  >
                        <Space size="middle">
                            <Button htmlType="button" >
                                Сбросить
                            </Button>
                            <Button type="primary" htmlType="submit">
                                Поиск
                            </Button>
                            <Button type="link" htmlType="button" >
                                Fill form
                            </Button>
                        </Space>
                    </Form.Item>
                </Form>
            </Card>
            {/* </Col>
        </Row> */}
            <Row>

                <Card>
                    Тестовая карточка
                </Card>
                <Card>
                    Тестовая карточка  Тестовая карточка
                </Card>
            </Row>
        </>
    )
}

export default FormsPage
