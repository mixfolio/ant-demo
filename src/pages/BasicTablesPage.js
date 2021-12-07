import React from 'react';
import {Table, Button} from 'antd';
const dataSource = [
    {
      key: '1',
      number: 1,
      name: 'КРТ №7 ОКТЯБРЬСКОЕ ПОЛЕ',
      stage: 'СМК по ЖК1 со встроенной поликлиникой',
      complectionDate: '20.09.2022',
      status: 'В процессе',
      type: 'Установленные',
    },
    {
      key: '2',
      number: 2,
      name: 'САО, РАЙОН ДМИТРОВСКИЙ, ПРОИЗВОДСТВЕННАЯ ЗОНА №46 "КОРОВИНО',
      stage: 'Утверждение ППТ МКА',
      complectionDate: '12.05.2023',
      status: 'В процессе',
      type: 'Установленные',
    },
  ];
  
  const columns = [
    {
      title: '№',
      dataIndex: 'number',
      key: 'number',
      sorter: (a, b) => a.number - b.number,
      filters: [
        { text: '', value: '' }
      ],
    },
    {
      title: 'Наименование проекта',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name - b.name,
      filters: [
        { text: '', value: '' }
      ],
      width: '30%'
    },
    {
      title: 'Этап',
      dataIndex: 'stage',
      key: 'stage',
      sorter: (a, b) => a.stage - b.stage,
      filters: [
        { text: '', value: '' }
      ],
      width: '25%'
    },
    {
      title: 'Дата завершения',
      dataIndex: 'complectionDate',
      key: 'complectionDate',
      sorter: (a, b) => a.complectionDate - b.complectionDate,
      filters: [
        { text: '', value: '' }
      ],
    },
    {
      title: 'Статус',
      dataIndex: 'status',
      key: 'status',
      sorter: (a, b) => a.status - b.status,
      filters: [
        { text: '', value: '' }
      ],
    },
    {
      title: 'Тип',
      dataIndex: 'type',
      key: 'type',
      sorter: (a, b) => a.type - b.type,
      filters: [
        { text: '', value: '' }
      ],
    },
  ];

const BasicTablesPage = () => {
    return (
        <>
        <div><Button type="primary">Добавить проект</Button></div>
            <Table 
                style={{ marginTop: 24  }}
                dataSource={dataSource} 
                columns={columns}
                size="small"
                scroll={{x:800}}
                />
        </>
    )
}

export default BasicTablesPage
