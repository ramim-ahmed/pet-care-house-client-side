import React from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import footerBrand from '../../../../assets/logo-footer.png';
const Footer = () => {
    return (
        <footer className="mt-5">
            <Container>
                <Row>
                    <Col>
                      <Card style={{height : '250px'}}>
                          <Card.Body className="d-flex justify-content-between align-items-center">
                              <div>
                                  <h6>exampleperson1212@gmail.com</h6>
                                  <h6>+888 02155555555</h6>
                              </div>
                              <div>
                                  <Image src={footerBrand} fluid />
                              </div>
                              <div>
                                <h6>991D invemess St.</h6>
                                <h6>Broklyn, NY 11204</h6>
                              </div>
                          </Card.Body>
                      </Card>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;