import React from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import petImg from '../../../../assets/Home/sec-3-right.png';
const ChoseServices = () => {
    return (
        <div className='chose-service-container'>
            <Container>
               <Row className='chose-services-row'>
               <Col md = {6} xs = {12}>
                         <Card>
                            <Card.Body>
                                <div>
                                    <h1>Chose The Services That You Want From Us.</h1>
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eleifend lobortis consectetur. Nullam ut condimentum sem. Aenean sed ante vitae ante tincidunt rutrum sit amet id est. Nulla sed egestas mauris, eu molestie massa.
                                    </p>
                                </div>
                            </Card.Body>
                        </Card>
                </Col>
                <Col md = {6} xs = {12}>
                    <Card>
                        <Card.Body>
                        <Image src={petImg} fluid />
                        </Card.Body>
                    </Card>
                </Col>
               </Row>
            </Container>
        </div>
    );
};

export default ChoseServices;