import React from 'react';
import { Row,} from 'antd';
import { Input } from './ui/Input';
import { Checkbox } from './ui/Checkbox';
import { Button } from './ui/Button';
import { Form, FormItem } from './ui/Form';


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
                <FormItem
                    label="Логин"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </FormItem>

                <FormItem
                    label="Пароль"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    {/* <Input.Password /> */}
                    <Input />
                </FormItem>
                <Row justify="space-between">
                    <FormItem name="remember" valuePropName="checked" >
                        <Checkbox>Запомнить меня</Checkbox>
                    </FormItem>

                    <FormItem name="remember" valuePropName="checked" >
                        <Button type="link" htmlType="button" >Забыли пароль</Button>
                    </FormItem>
                </Row>

                <FormItem style={{ margin: 0 }}>
                    <Button block size="large" type="primary" htmlType="submit">
                        Войти
                    </Button>
                </FormItem>
            </Form>
        </>
    );
};

export default Login
