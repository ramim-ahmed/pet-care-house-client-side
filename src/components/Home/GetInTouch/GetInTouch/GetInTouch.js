import React from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';

const GetInTouch = () => {
    return (
        <Container className="mt-5">
            <Row >
               <Col className='getInTouch-card'>
                   <Card  style={{width : '600px'}}>
                       <Card.Title>
                       <h3 className='text-center'>Get In Touch</h3>
                       </Card.Title>
                       <Card.Body>
                           <Form>
                               <Form.Group>
                                   <div className='d-flex justify-content-between'> 
                                      <div>
                                      <Form.Control 
                                       type = 'text' 
                                       placeholder='Enter Name'/>
                                      </div>
                                      <div>
                                      <Form.Control 
                                       type = 'email' 
                                       placeholder='Email'/>
                                      </div>
                                   </div>
                               </Form.Group>
                               <Form.Group>
                                   <Form.Control
                                    type='number' 
                                    placeholder='phone Number' />
                               </Form.Group>
                               <Form.Group>
                                    <Form.Control placeholder='Message' as="textarea" rows={3} />
                               </Form.Group>
                               <Button className="getBtn"> Submit </Button>
                           </Form>
                       </Card.Body>
                   </Card>
               </Col>
            </Row>
        </Container>
    );
};

export default GetInTouch;