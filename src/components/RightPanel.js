import React from 'react'
import { Card, Space, Table } from 'antd';
import {
    LeftCircleOutlined,
    RightCircleOutlined,
    CloseCircleOutlined
} from '@ant-design/icons';


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



const RightPanel = () => {
    return (
        <Card bodyStyle={{ padding: "0" }} style={{ width: 320 }}>

            <div style={{ padding: 16, display: 'flex', justifyContent: "space-between"}}>
                <Space >
                    <LeftCircleOutlined style={{ fontSize: 24 }} />
                    <RightCircleOutlined style={{ fontSize: 24 }} />
                </Space>
                <h3>Информация 1/2</h3>
                <CloseCircleOutlined style={{ fontSize: 24 }} />
            </div>

            <Table
                size='small'
                pagination={false}
                dataSource={dataSource}
                columns={columns} />
        </Card>
    )
}

export default RightPanel
