import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const ProApp = () => {
    return (
        <div style={{marginTop : '160px'}} className="proApp-container">
            <Container>
                <Row className='pro-app-row'>
                    <Col>
                    <Card>
                            <Card.Body>
                                <div className='text-center'>
                                    <h1>Want To Test Our Pro App?</h1>
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eleifend lobortis consectetur. Nullam ut condimentum sem. Aenean sed ante vitae ante tincidunt rutrum sit amet id est. Nulla sed egestas mauris, eu molestie massa.
                                    </p>
                                    <Button className='app-Store-btn appStore' size = 'sm'>Contact Us</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ProApp;