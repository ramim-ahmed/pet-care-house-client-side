import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { userContext } from '../../../App';
// import { servicesData } from '../../Home/OurServices/ServicesData/Services';
import Book from './Book/Book';
import BookingList from './BookingList/BookingList';
import Review from './Review/Review';

const Booking = () => {
    const [loggedInUser, ] = useContext(userContext)
    const {id} = useParams();
    // const serviceId = Number(id);
    const [bookingList, setBookingList] = useState([])
    const [bookRender, setBookRender] = useState(true);
    const [bookingListRender, setBookingListRender] = useState(false)
    const [reviewRender, setReviewRender] = useState(false)
    const [service, setService] = useState({});

    useEffect( () => {
        fetch(`https://peaceful-everglades-65569.herokuapp.com/book/${id}`)
        .then( res => res.json())
        .then( data => {
            setService(data)
        })
    }, [id]);
     
    useEffect( () => {

    fetch('https://peaceful-everglades-65569.herokuapp.com/bookingList/?email='+loggedInUser.email)
    .then( res => res.json())
    .then( data => {
        setBookingList(data)
    })

    }, [loggedInUser])

    const handleBook = () => {
        setBookRender(true)
        setBookingListRender(false);
        setReviewRender(false)
    }

    const handleBooking = () => {
        setBookingListRender(true);
        setBookRender(false);
        setReviewRender(false)
    }

    const handleReview = () => {
        setReviewRender(true);
        setBookRender(false);
        setBookingListRender(false);
    }
    return (
        <div style = {{paddingTop : '50px'}} className="booking-container">
            <Container>
                <Row>
                    <Col md = {3}>
                      <li className="bookingSideBar">
                          <Link to = '/'>Back Home</Link>
                      </li>
                      <li className="bookingSideBar mt-3">
                          <Link onClick = {handleBook}>Book</Link>
                      </li>
                      <li className="bookingSideBar mt-3">
                          <Link onClick  = {handleBooking}>Booking List</Link>
                      </li>
                      <li className="bookingSideBar mt-3">
                          <Link onClick = {handleReview}>Review</Link>
                      </li>
                    </Col>
                   {
                       bookRender && <Col className="booking-col9" md = {9}>
                       <Book description = {service.description} title = {service.title} price = {service.price}/>
                   </Col>
                   }
                   {
                       bookingListRender && <Col className="booking-col9" md = {9}>
                        <h5 className='mt-2'>Booking List</h5>
                        {
                            bookingList.map( item => (
                                <div className='d-flex'>
                                    <BookingList item = {item}/>
                                </div>
                            ))
                        }
                   </Col>
                   }
                   {
                       reviewRender && <Col className="booking-col9" md = {9}>
                        <Review/>
                   </Col>
                   }
                </Row>
            </Container>
        </div>
    );
};

export default Booking;