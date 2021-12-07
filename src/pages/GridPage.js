import React from 'react'
import { Row, Col, Card, Divider } from 'antd'

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
            </Card>
        </>
    )
}

export default GridPage
