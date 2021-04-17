import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import TestiPNG from '../../../../assets/Home/testimonial.png';
// import { testimonialData } from '../TestimonialData/TestimonialData';
const Testimonial = () => {
    const [testimonialData, setTestimonialData] = useState([]);
    useEffect( () => {

        fetch('https://peaceful-everglades-65569.herokuapp.com/reviews')
        .then( res => res.json())
        .then( data => {
            setTestimonialData(data)
        })

    }, [])
    return (
        <Container className='mt-5'>
            <Row>
                <Col>
                <Card className='text-center'>
                    <Card.Body>
                        <div className="testImg">
                            <Image style={{width : "120px"}} src={TestiPNG} fluid />
                        </div>
                        <div  className="mt-5">
                            <h3>Our Clients Testimonials</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eleifend lobortis consectetur.</p>
                        </div>
                    </Card.Body>
                 </Card>
                </Col>
            </Row>
            <Row>
                {
                    testimonialData.map( testi => (
                        <Col md = {4} xs = {12}>
                          <Card className="testi-card">
                              <Card.Body>
                                  <div>
                                      <p>{testi.comments}</p>
                                  </div>
                                  <div className="d-flex">
                                      <div>
                                          <Image style={{width: '50px'}} src = {testi.imageURL} fluid/>
                                      </div>
                                      <div className="ml-4">
                                          <h5><strong>{testi.name}</strong></h5>
                                          <p><strong>{testi.country}</strong></p>
                                      </div>
                                  </div>
                              </Card.Body>
                          </Card>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    );
};

export default Testimonial;