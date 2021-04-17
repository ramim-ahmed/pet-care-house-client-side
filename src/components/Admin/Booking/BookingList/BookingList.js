import React from 'react';
import { Card } from 'react-bootstrap';

const BookingList = (props) => {
    const {_id, price, title, description, status} = props.item
    return (
        <div className = 'mt-4'>
            <div style={{width : '300px'}} className='bookingList-card d-flex'>
                <Card key = {_id} >
                <Card.Body className='text-center'>
                         <div className='d-flex justify-content-end mb-3'>
                            <h6 className='status'>{status}</h6>
                         </div>
                        <h4>{title}</h4>
                        <h4>${price}</h4>
                        <p>{description}</p>
                </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default BookingList;