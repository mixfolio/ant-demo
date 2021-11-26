import React from 'react'
import { Card, List, Space } from 'antd';
import {
    AlignLeftOutlined,
    EyeOutlined,
    FilterOutlined,
    SearchOutlined,
} from '@ant-design/icons';

const data = [
    'КРТ',
    'Реиновация',
    'Водоохранные зоны',
    'Границы улично-дорожной сети',
    'Производственные зоны',
    'Промышленные зоны',
    'Районы',
    'Земельные участки',
    'Поручения',
    'Кадастровое деление',
];



const LeftPanel = () => {
    return (
        <Card bodyStyle={{ padding: "0" }} style={{ width: 360 }}>

            <List
                size="small"
                dataSource={data}
                renderItem={item =>
                    <List.Item style={{ display: 'flex' }}>
                        {item}
                        <Space style={{ fontSize: 16 }}>
                            <EyeOutlined />
                            <FilterOutlined />
                            <SearchOutlined />
                            <AlignLeftOutlined />
                        </Space>
                    </List.Item>}
            />
        </Card>
    )
}

export default LeftPanel
