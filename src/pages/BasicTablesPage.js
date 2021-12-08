import React from 'react';
import { Row, Col, Table, Card, Divider, Button, Typography, Tabs, Avatar } from 'antd';
import irmaliev from '../assets/images/avatars/irmaliev.jpg'
import vypirailo from '../assets/images/avatars/vypirailo.jpg'
import efimov from '../assets/images/avatars/efimov.jpg'
import luzanov from '../assets/images/avatars/luzanov.jpg'

const { TabPane } = Tabs;

const { Text } = Typography;
const { Meta } = Card
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
    width: '30%',
    ellipsis: true
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

  function callback(key) {
    console.log(key);
  }
  return (
    <>
      <div><Button type="primary">Добавить проект</Button></div>
      <Table
        style={{ marginTop: 24 }}
        dataSource={dataSource}
        columns={columns}
        size="small"
        scroll={{ x: 800 }}
      />

      <Divider orientation="left">Детальная информация</Divider>
      <Card title="КРТ №7 ОКТЯБРЬСКОЕ ПОЛЕ">
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="Общая информация" key="1">
            Общая информация
            Content of Tab Pane 1

          </TabPane>
          <TabPane tab="Команда проекта" key="2">
            <Row gutter={24}>
              <Col md={8}>
                <Card >
                  <Meta
                    avatar={<Avatar size={64} src={vypirailo} />}
                    title="Выпирайло Александр Анатольевич"
                    description="Эксперт"
                  />
                </Card>
              </Col>
              <Col md={8}>
                <Card >
                  <Meta
                    avatar={<Avatar size={64} src={efimov} />}
                    title="Ефимов Николай Дмитриевич"
                    description="Эксперт"
                  />
                </Card>
              </Col>
              <Col md={8}>
                <Card >
                  <Meta
                    avatar={<Avatar size={64} src={luzanov} />}
                    title="Лузанов Андрей Владимирович"
                    description="Эксперт"
                  />
                </Card>
              </Col>
             
             
            </Row>
          </TabPane>
          <TabPane tab="Статус проекта" key="3">
            Content of Tab Pane 3
          </TabPane>
          <TabPane tab="Границы и фактическое использование" key="4">
            Content of Tab Pane 3
          </TabPane>
          <TabPane tab="Организации" key="5">
            Content of Tab Pane 3
          </TabPane>
          <TabPane tab="Предложение по границам" key="6">
            Content of Tab Pane 3
          </TabPane>
          <TabPane tab="Концепция развития" key="7">
            Content of Tab Pane 3
          </TabPane>
          <TabPane tab="Экономика" key="8">
            Content of Tab Pane 3
          </TabPane>
          <TabPane tab="Предложения по благоустройству" key="9">
            Content of Tab Pane 3
          </TabPane>
          <TabPane tab="Поручения" key="10">
            Content of Tab Pane 3
          </TabPane>
          <TabPane tab="Земельные участки" key="11">
            Content of Tab Pane 3
          </TabPane>
          <TabPane tab="Документы" key="12">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </Card>
    </>
  )
}

export default BasicTablesPage
