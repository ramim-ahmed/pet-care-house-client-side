import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const HeaderMainContent = () => {
    return (
        <div className = 'header-main-container'>
            <Container>
            <Row>
                <header>
                    <Col>
                        <Card>
                            <Card.Body>
                                <div>
                                    <h5>t is a long established fact that.</h5>
                                    <h1>A Warm Welcome to <br/> the pets care Society.</h1>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </header>
                </Row>
            </Container>
        </div>
    );
};

export default HeaderMainContent;