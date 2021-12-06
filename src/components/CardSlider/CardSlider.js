import React from 'react';
import { Card, Space, Carousel, Image, Tabs, Table } from 'antd';
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons';
import { files } from './data';

const { TabPane } = Tabs;



const CardSlider = () => {
    const dataSource = [
        {
            key: '1',
            name: '№',
            value: 32,
        },
        {
            key: '2',
            name: 'Название',
            value: 'Москворечье-Сабурово',
        },
        {
            key: '3',
            name: 'Округ',
            value: 'Южный',
        },
        {
            key: '4',
            name: 'Тип муниципального образования',
            value: 'Муниципальный округ',
        },
    
    ];
    
    const columns = [
        {
            title: 'Название',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Значение',
            dataIndex: 'value',
            key: 'value',
        },
    
    ];

    

    const contentStyle = {
        height: '240px',
        background: '#3d3d3d',
    };

    function onChange(a, b, c) {
        console.log(a, b, c);
    }

    const carouselRef = React.createRef();
    return (
        <Card
            bodyStyle={{ paddingTop: "0"}}
            title="Свойства" style={{ width: 320}}
            hoverable={true}
            extra={
                <Space>
                    <LeftCircleOutlined style={{ fontSize: 24 }} onClick={() => {
                        carouselRef.current.next();
                    }} />
                    <RightCircleOutlined style={{ fontSize: 24 }} onClick={() => {
                        carouselRef.current.prev();
                    }} />
                </Space>
            }

            cover={<Carousel
                afterChange={onChange}
                ref={carouselRef}
                dots={false}>

                <div>
                    <div style={contentStyle} >
                        <Image src={files[4]} width="100%" />
                    </div>
                </div>
                <div>
                    <div style={contentStyle} >
                        <Image src={files[1]} width="100%" />
                    </div>
                </div>
                <div>
                    <div style={contentStyle} >
                        <Image src={files[2]} width="100%" />
                    </div>
                </div>
                <div>
                    <div style={contentStyle} >
                        <Image src={files[3]} width="100%" />
                    </div>
                </div>
                <div>
                    <div style={contentStyle} >
                        <Image src={files[4]} width="100%" />
                    </div>
                </div>


            </Carousel>}
        // tabList={tabList}
        >



            {/* <Meta title="Europe Street beat" description="www.instagram.com" /> */}
            <Tabs defaultActiveKey="1"
            // type="card"
            // onChange={callback}
            >
                <TabPane tab="Описание 1" key="1">
                    <Table
                        scroll={{ x:"max-content" }}
                        size='small'
                        pagination={false}
                        dataSource={dataSource}
                        columns={columns} />
                </TabPane>
                <TabPane tab="Описание 2" key="2">
                    Content of Tab Pane 2
                </TabPane>
            </Tabs>
        </Card>
    )
}

export default CardSlider
