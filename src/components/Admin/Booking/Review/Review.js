import axios from 'axios';
import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
const Review = () => {

    const [reviewData, setReviewData] = useState({});
    const [reviewSuccess, setReviewSuccess] = useState(false);
    const [imageURL, setImageURL] = useState('');

    const handleImageUpload = event => {

        const imageData = new FormData();

        imageData.set('key', '86468308d03edb3ab26827479053b75a');
        imageData.append('image', event.target.files[0]);
        
        axios.post('https://api.imgbb.com/1/upload', 
        imageData)

        .then(function (response) {
          setImageURL(response.data.data.display_url);
        })
        .catch(function (error) {
          console.log(error);
        });
      }
      
    
    const handleChangeReview = (e) => {
        const newReview = {...reviewData};
        newReview[e.target.name] = e.target.value;
        setReviewData(newReview)
    }

    const handleReviewSubmit = (e) => {
        e.preventDefault();
        const customerReviews = {...reviewData, imageURL : imageURL};

        fetch('https://peaceful-everglades-65569.herokuapp.com/addReview', {
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify(customerReviews)
        })
        .then( res => res.json())
        .then( result => {
            setReviewSuccess(result);
        })
    }
    
    return (
        <Card>
            <Card.Body>
                <h5>Review</h5>
                
                <Form onSubmit = {handleReviewSubmit}>
                    <Form.Group>
                        <Form.Control 
                            onChange = {handleChangeReview}
                            placeholder='Name' 
                            type = 'text' 
                            required
                            name = 'name'/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control 
                            onChange = {handleChangeReview}
                            placeholder='Country' 
                            type = 'text' 
                            required
                            name = 'country'/>
                    </Form.Group>
                    <Form.Group>
                            <Form.Control
                            onChange = {handleChangeReview}
                            name = 'comments'
                            required
                            placeholder='Comments'
                            as="textarea" 
                            rows={3} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                        onChange = {handleImageUpload}
                         type = 'file' />
                    </Form.Group>
                    <Button type = 'submit' size = 'sm'>Submit</Button>
                </Form>
                <br/>
                {
                    reviewSuccess && <p style={{color : 'green'}}>Thanks For Reviews!</p>
                }
            </Card.Body>
        </Card>
    );
};

export default Review;