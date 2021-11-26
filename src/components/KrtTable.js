import React from 'react';
import { Table, Select} from 'antd';
import { krt } from '../krt_data';
const {Option } = Select;


const columns = [
    {
        title: '№',
        dataIndex: 'id',
        key: 'id',
 
    },
    {
        title: 'Кадастровый номер',
        dataIndex: 'kadastr',
        key: 'kadastr',
    },
    {
        title: 'Количество объектов культурного наследия',
        dataIndex: 'culture',
        key: 'culture',
    },
    {
        title: 'Разположение ЗУ в границах особо охраняемой территории и ее наименование',
        dataIndex: 'zu_protect',
        key: 'zu_protect',
    },
    {
        title: 'Эксперт',
        dataIndex: 'expert',
        key: 'expert',
        render: expert => (
            <span>


                <Select defaultValue="Выпирайло А.А." style={{ width: 160 }} >
                    <Option value="Лузанов А.В.">Лузанов А.В.</Option>
                    <Option value="Путилов С.Э.">Путилов С.Э.</Option>
                    <Option value="Яремчук С.В.">Яремчук С.В.</Option>
                    <Option value="Графов А.М.">Графов А.М.</Option>
                    <Option value="Евсеев К.С.">Евсеев К.С.</Option>
                    <Option value="Епремян С.Е.">Епремян С.Е.</Option>
                    <Option value="Ирмалиев Р.Э.">Ирмалиев Р.Э.</Option>
                    <Option value="Ефимов Н.Д.">Ефимов Н.Д.</Option>
                    <Option value="Сипулин А.А.">Сипулин А.А.</Option>
                </Select>


            </span>
        ),
    },
    {
        title: 'Расположение ЗУ в границах культурного слоя и его наименование',
        dataIndex: 'zu_culture',
        key: 'zu_culture',

    },
    {
        title: 'Комментарии',
        dataIndex: 'comment',
        key: 'comment',

    },
    {
        title: 'Кадастровые номера ОКС',
        dataIndex: 'oks',
        key: 'oks',

    },
    {
        title: 'Дата создания',
        dataIndex: 'date',
        key: 'date',

    },
];
const KrtTable = () => {
    return (
        <Table
            size="small"
            dataSource={krt}
            columns={columns}
        />
    );
}

export default KrtTable
