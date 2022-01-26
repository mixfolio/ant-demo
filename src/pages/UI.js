import { Space, } from 'antd'
import React from 'react'
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Form, FormItem } from '../components/ui/Form';
import { Checkbox } from '../components/ui/Checkbox';

import Icon from '@ant-design/icons';

import { ReactComponent as ArrowDownIcon } from '../assets/images/arrow-down-circle.svg';
import { ReactComponent as ApertureIcon } from '../assets/images/aperture.svg';
import MyButton from '../components/antd';

const UI = () => {
    return (
        <div>
            <Space direction='vertical' size='middle'>
                <Space size='middle'>
                    <MyButton tooltipTitle="Hello">MyButton</MyButton>
                    <Button size="large">Button</Button>
                    <Button>Button</Button>
                    <Button size="small">Button</Button>
                    <Button icon={<Icon component={ApertureIcon} />} size="large">Button</Button>
                    <Button icon={<Icon component={ApertureIcon} />}>Button</Button>
                    <Button icon={<Icon component={ApertureIcon} />} size="small">Button</Button>
                </Space>
                <Space size='middle'>
                    <Button type="primary" size="large">Button</Button>
                    <Button type="primary">Button</Button>
                    <Button type="primary" size="small">Button</Button>
                    <Button type="primary" icon={<Icon component={ApertureIcon} />} size="large">Button</Button>
                    <Button type="primary" icon={<Icon component={ApertureIcon} />}>Button</Button>
                    <Button type="primary" icon={<Icon component={ApertureIcon} />} size="small">Button</Button>
                </Space>
                <Space size='middle'>
                    <Button icon={<Icon component={ApertureIcon} />} size="large" />
                    <Button icon={<Icon component={ApertureIcon} />} />
                    <Button icon={<Icon component={ApertureIcon} />} size="small" />
                    <Button type="primary" icon={<Icon component={ApertureIcon} />} size="large" />
                    <Button type="primary" icon={<Icon component={ApertureIcon} />} />
                    <Button type="primary" icon={<Icon component={ApertureIcon} />} size="small" />
                </Space>
                <Space size='middle'>
                    <Input placeholder="Basic usage" />
                </Space>
                <Space size='middle'>
                    <Form layout="vertical">
                        <FormItem
                            label="Username"
                            name="username"
    
                        >
                            <Input />
                        </FormItem>

        

                        <FormItem >
                            <Checkbox>Запомнить меня</Checkbox>
                        </FormItem>

                        <FormItem >
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </FormItem>
                    </Form>
                </Space>
                <Space size='middle'>
                    <Checkbox >Checkbox</Checkbox>
                </Space>
            </Space>

            {/* <Space >
                <Button size="large">Large</Button>  
                <Button >Default</Button>  
                <Button size="small">Small</Button>  
            </Space>
            <br/>
            <br/>
            <Space >
                <Button type="primary" size="large">Large</Button>  
                <Button type="primary">Default</Button>  
                <Button type="primary" size="small">Small</Button>  
            </Space>
            <br/>
            <br/>
            <Space >
                <Button type="primary" icon={<Icon  component={ApertureIcon}/> } size="large">Button</Button>  
                <Button type="primary" icon={<Icon  component={ApertureIcon}/> }>Button</Button>  
                <Button type="primary" icon={<MessageOutlined/> } size="small">Button</Button>  
            </Space>
            <br/>
            <br/>
            <Space >
                <Button type="primary" icon={<Icon fill="none" component={ArrowDownIcon}/> } size="large"/>
                <Button  icon={<Icon  component={ApertureIcon}/> } ></Button>
                <Button type="primary" icon={<MessageOutlined/> } size="small"/> 
            </Space> */}
        </div>
    )
}

export default UI
