import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const OurServices = () => {

    const [servicesData, setServicesData] = useState([]);

    useEffect( () => {
        fetch('https://peaceful-everglades-65569.herokuapp.com/services')
        .then( res => res.json())
        .then( data => {
            setServicesData(data)
        })
    }, [setServicesData])
    
    return (
        <Container style={{paddingTop:'50px'}} className='mt-5'>
           <Row>
               <Col>
                    <div  className="mb-5">
                        <h3 className='text-center'>Our Services</h3>
                    </div>
               </Col>
           </Row>
            <Row className='services-card-row '>
               {
                   servicesData.map( item => (
                       <Link to = {`/booking/${item._id}`}>
                           <Col  className='text-center' md = {4}>
                                <Card className="services-card mt-3" style = {{width : '18rem'}}>
                                   <div>
                                   <Card.Img style ={{width : "180px"}} variant="top" src={item.photo} />
                                   </div>
                                    <Card.Body>
                                    <Card.Title>
                                        <h4>{item.title}</h4>
                                        <h5>${item.price}</h5>
                                    </Card.Title>
                                    <Card.Text>
                                        {item.description}
                                    </Card.Text>
                                </Card.Body>
                                </Card>
                           </Col>
                       </Link>
                   ))
               }
            </Row>
        </Container>
    );
};

export default OurServices;