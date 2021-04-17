import axios from 'axios';
import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
const AddService = () => {

    const [photo, setPhoto] = useState('');
    const [addServiceInfo, setAddServiceInfo] = useState({});
    const [addServiceSuccess, setAddServiceSuccess] = useState(false)
    const handleImageUpload = event => {

        const imageData = new FormData();

        imageData.set('key', '86468308d03edb3ab26827479053b75a');
        imageData.append('image', event.target.files[0]);
        
        axios.post('https://api.imgbb.com/1/upload', 
        imageData)

        .then(function (response) {
            setPhoto(response.data.data.display_url);
        })
        .catch(function (error) {
          console.log(error);
        });
      }
    
    const handleServiceChange = (e) => {
      const newAddService = {...addServiceInfo}
      newAddService[e.target.name] = e.target.value;
      setAddServiceInfo(newAddService)
    }

    const handleAddServiceSubmit = (e) =>{
        e.preventDefault();
       const services = {...addServiceInfo, photo : photo};

       fetch('https://peaceful-everglades-65569.herokuapp.com/addService', {
           method : 'POST',
           headers : {'Content-Type' : 'application/json'},
           body : JSON.stringify(services)
       })
       .then( res => res.json())
       .then( result => {
           setAddServiceSuccess(result)
       })
       
    }
    return (
        <Card>
            <Card.Body>
                <h5>Add Service</h5>
                <Form onSubmit = {handleAddServiceSubmit}>
                    <Form.Group>
                        <Form.Control 
                        onChange = {handleServiceChange}
                        type='text' 
                        placeholder='Service Name' 
                        required
                        name = 'title' />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control 
                         onChange = {handleServiceChange}
                        name = 'price' 
                        type='number' 
                        required
                        placeholder='Price' />
                    </Form.Group>
                    <Form.Group>
                    <Form.Control 
                    onChange = {handleServiceChange}
                    name = 'description' 
                    placeholder='Description' 
                    required
                    as="textarea" rows={3} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control 
                        onChange = {handleImageUpload}
                        required 
                        type = 'file'/>
                    </Form.Group>
                    <Button type = 'submit'>Save</Button>
                </Form>
                <br/>
                {
                    addServiceSuccess && <h6 style = {{color : 'green'}}> Service Saved Successfully!</h6>
                }
            </Card.Body>
        </Card>
    );
};

export default AddService;