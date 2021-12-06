import React from 'react';
import { Row, Col, Card } from 'antd';
import { cards } from '../data/cards';

const { Meta } = Card;

const CardsPage = () => {
    return (
        <Row gutter={[24, 24]}>
            {cards.map(card =>
                <Col 
                    key={card.id}
                    span={6}
                >
                    <Card
                        hoverable
                        cover={<img alt="example" src={card.image} />}
                    >
                        <Meta title={card.title} description={card.description}/>
                    </Card>
                </Col>
            )}
        </Row>
    )
}

export default CardsPage
