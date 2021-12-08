import React from 'react';
import { Form, Input, Checkbox, Row, Button } from 'antd';


const Login = () => {
    // const onFinish = (values: any) => {
    //   console.log('Success:', values);
    // };

    // const onFinishFailed = (errorInfo: any) => {
    //   console.log('Failed:', errorInfo);
    // };

    return (
        <>
            {/* <div style={{ height:64, background: 'gray' }}></div> */}
            <Form
                layout="vertical"
            // name="basic"
            // labelCol={{ span: 8 }}
            // wrapperCol={{ span: 16 }}
            // initialValues={{ remember: true }}
            // onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            // autoComplete="off"
            >
                <Form.Item
                    label="Логин"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Пароль"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>
                <Row justify="space-between">
                    <Form.Item name="remember" valuePropName="checked" >
                        <Checkbox>Запомнить меня</Checkbox>
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked" >
                        <Button type="link" htmlType="button" >Забыли пароль</Button>
                    </Form.Item>
                </Row>

                <Form.Item style={{ margin: 0 }}>
                    <Button block size="large" type="primary" htmlType="submit">
                        Войти
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default Login
