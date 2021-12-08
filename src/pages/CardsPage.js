import React from 'react';
import { Row, Col, Card, Typography , Divider, Avatar } from 'antd';
import { cards } from '../data/cards';
import avatar from '../assets/images/avatars/efimov.jpg';

const { Meta } = Card;
const {Title} = Typography;

const tabList = [
    {
        key: 'tab1',
        tab: 'Общая информация',
    },
    {
        key: 'tab2',
        tab: 'Команда проекта',
    },
    {
        key: 'tab3',
        tab: 'Статус проекта',
    },
    {
        key: 'tab4',
        tab: 'Границы и фактическое использование',
    },
    {
        key: 'tab5',
        tab: 'Организации',
    },
    {
        key: 'tab6',
        tab: 'Предложение по границам',
    },
]

const CardsPage = () => {
    return (
        <>
            <Row gutter={[24, 24]}>
                {cards.map(card =>
                    <Col
                        key={card.id}
                        xl={6}
                        lg={8}
                        md={12}
                        sm={12}
                    >
                        <Card
                            hoverable
                            cover={<img alt="example" src={card.image} />}
                        >
                            <Meta title={card.title} description={card.description} />
                        </Card>
                    </Col>
                )}
            </Row>
            <Divider />
            <Card
                title={<><Title level={4}>Октябрьское поле</Title></>}
                tabList={tabList}>
                <Card >
                    <Meta
                        avatar={<Avatar size={64} src={avatar} />}
                        title="Card title"
                        description="This is the description"
                    />
                </Card>
                <Card >
                    <Meta
                        avatar={<Avatar size={64} src={avatar} />}
                        title="Card title"
                        description="This is the description"
                    />
                </Card>


            </Card>
            <Divider />
        </>

    )
}

export default CardsPage
