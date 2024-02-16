import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import  cards from './cardData';

 

// creat each card content using the array below
const CreateCard = () => {

    return(
        <Container fluid>
          
            <Row className="justify-content-center mt-5"> {/* Change justify-content-end to justify-content-center */}
                <Col xs={12} md={12} lg={12} className="text-center"> {/* Add text-center class */}
                    <h3>Services</h3>
                    <h6>The Services we provide</h6>
                </Col>
            </Row>
           
            <Row className="justify-content-center">
            {cards.map(cards => (
                        <Col key={cards.id} lg={4} md={6} sm={12} className="mb-4">  
                            <Card style={{ backgroundColor: cards.bgcolor, textColor: cards.tcolor}}>
                                <Card.Img variant="top" src={cards.image}style={{ objectFit: 'cover', height: '200px'  }}/>
                                    <Card.Body>
                                    <Card.Title style={{ color: cards.titleColor }}>{cards.title}</Card.Title>
                                        <Card.Text style={{ color: cards.textColor }}>{cards.content}</Card.Text>
                                        <Button variant='primary'> go somewhere</Button>
                                    </Card.Body>
                            </Card>
                        </Col>
                    ))} 
            </Row>
        </Container>
    );
}
export default CreateCard;