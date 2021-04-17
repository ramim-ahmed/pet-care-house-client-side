import React, { useContext } from 'react';
import { Card, Form } from 'react-bootstrap';
import { userContext } from '../../../../App';
import PaymentProcess from '../PaymentProcess/PaymentProcess';

const Book = ({title, price, description}) => {

    const [loggedInUser, ] = useContext(userContext);

    const handlePayment = paymentId => {

        const bookDetails = {
            title : title,
            price : price,
            description : description,
            name : loggedInUser.name,
            email : loggedInUser.email,
            paymentId : paymentId,
            status : 'Pending'
        }

       fetch('https://peaceful-everglades-65569.herokuapp.com/addBook', {
           method : 'POST',
           headers : {'Content-Type' : 'application/json'},
           body : JSON.stringify(bookDetails)
       })
       .then( res => res.json())
       .then( result => {
           console.log(result);
       })
    }
    
    return (
        <Card style={{width : '500px'}}>
            <Card.Body>
                <h5>Book</h5>
                <Form > 
                    <Form.Group>
                        <Form.Control  name = 'name' type='text' defaultValue = {loggedInUser.name} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control  name = 'email' type='email' defaultValue = {loggedInUser.email} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control name = 'title' type='text' defaultValue = {title} />
                    </Form.Group>
                </Form>
                    <div>
                       <p><strong>Your Service Charged will be ${price}</strong></p>
                   </div>
                   <div className="mt-3">
                         <PaymentProcess handlePayment = {handlePayment}/>
                   </div>
                   
            </Card.Body>
        </Card>
    );
};

export default Book;