import React from 'react'
import { Row, Col, Card, Divider, Typography } from 'antd'
import Login from '../components/Login';
import aprLogo from '../assets/images/apr-logo-2.svg';

const {Meta} = Card;

const {Title} = Typography;

const GridPage = () => {
    const style = { background: '#0092ff', color: '#fff', padding: 16, textAlign: 'center' };
    return (
        <>
            <Divider orientation="left">Отступ между колонками статичный</Divider>
            <Row gutter={16}>
                <Col span={6}>
                    <div style={style}>col-6</div>
                </Col>
                <Col span={6}>
                    <div style={style}>col-6</div>
                </Col>
                <Col span={6}>
                    <div style={style}>col-6</div>
                </Col>
                <Col span={6}>
                    <div style={style}>col-6</div>
                </Col>

            </Row>
            <Divider orientation="left">Отступ между колонками адаптивный</Divider>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col span={6}>
                    <div style={style}>col-6</div>
                </Col>
                <Col span={6}>
                    <div style={style}>col-6</div>
                </Col>
                <Col span={6}>
                    <div style={style}>col-6</div>
                </Col>
                <Col span={6}>
                    <div style={style}>col-6</div>
                </Col>
            </Row>

            <Card style={{ marginTop: 24 }}>
                <Divider orientation="left">Адаптивная ширина колонок</Divider>
                <Row gutter={[24, 24]}>
                    <Col xs={24} md={12} lg={6}>
                        <div style={style}>col-6</div>
                    </Col>
                    <Col xs={24} md={12} lg={6}>
                        <div style={style}>col-6</div>
                    </Col>
                    <Col xs={24} md={12} lg={6}>
                        <div style={style}>col-6</div>
                    </Col>
                    <Col xs={24} md={12} lg={6}>
                        <div style={style}>col-6</div>
                    </Col>
                </Row>
            </Card>
            <Divider orientation="left">Колонки со сдвигом</Divider>
            <Row justify="center" align="middle" style={{ height:600 }}>
                <Card
                    cover={
                        <Row  justify="center" align="middle" style={{ background: '#03265E', height: 64 }}>
                            <img src={aprLogo} />
                        </Row>}
                    // title={<Title level={5} style={{ color:'#fff' }} >Вход в систему</Title>}
                    headStyle={{ background: '#03265E', color: '#fff' }}
                    style={{ width:400 }}
                >
                    <Meta title={<Title level={4} style={{ marginBottom: 16, textAlign:'center' }}  >Вход в систему</Title>}/>
                    <Login/>
                </Card>
            </Row>
        </>
    )
}

export default GridPage
