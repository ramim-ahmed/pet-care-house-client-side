import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import PhoneApp from '../../../../assets/Home/sec-2-right.png';
const UseApp = () => {

    return (
        <div className='use-app-container'>
            <Container>
                <Row className='use-app-row'>
                  <Col md = {6} xm = {12}>
                        <Card>
                            <Card.Body>
                                <div>
                                    <h1>You Can Locate Your
                                    Pets Using App</h1>
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eleifend lobortis consectetur. Nullam ut condimentum sem. Aenean sed ante vitae ante tincidunt rutrum sit amet id est. Nulla sed egestas mauris, eu molestie massa.
                                    </p>
                                    <div className='playStore-btn'>
                                       <Button className='app-Store-btn' size = 'sm'>GooglePlay</Button>
                                       <Button className='app-Store-btn appStore' size = 'sm'>AppPlay</Button>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                  </Col>
                  <Col md = {6} xm = {12}>
                    <div className='phone-ui'>
                        <img style = {{width : '250px'}}   src={PhoneApp} className='img-fluid' alt="" />
                    </div>
                  </Col>
                </Row>
            </Container>
        </div>
    );
};

export default UseApp;