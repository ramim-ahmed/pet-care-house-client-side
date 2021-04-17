import React from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import whoImg from '../../../../assets/Home/sec-1-left.png';
const WhoWeAre = () => {
    return (
        <Container>
            <Row className='who-container'>
                <Col md = {6} xs = {12}>
                    <Card>
                        <Card.Body>
                        <Image src={whoImg} fluid />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md = {6} xs = {12}>
                         <Card>
                            <Card.Body>
                                <div>
                                    <h5>Who We Are ?</h5>
                                    <h1>We love your pet 
                                    just as you do .</h1>
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eleifend lobortis consectetur. Nullam ut condimentum sem. Aenean sed ante vitae ante tincidunt rutrum sit amet id est. Nulla sed egestas mauris, eu molestie massa.
                                    </p>
                                </div>
                            </Card.Body>
                        </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default WhoWeAre;