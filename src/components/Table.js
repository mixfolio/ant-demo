import React from 'react';
import {Table} from 'antd';
import {users} from '../phonebook';

const columns = [
    {
        title: 'Управление',
        dataIndex: 'department',
        key: 'department',
    },
    {
        title: 'Отдел',
        dataIndex: 'unit',
        key: 'init',
    },
    {
        title: 'ФИО',
        dataIndex: 'names',
        key: 'names',
    },
    {
        title: 'Должность',
        dataIndex: 'post',
        key: 'post',
    },
    {
        title: 'Телефон',
        dataIndex: 'work_phone',
        key: 'work_phone',
    },
    {
        title: 'E-mail',
        dataIndex: 'work_mail',
        key: 'work_mail',
        render: text => <a href={users.work_mail}>{text}</a>
    },
];

const _Table = () => {
    return (
        <Table
            dataSource={users}
            columns={columns}
        />
    )
}

export default _Table;
