import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';

const MakeAdmin = () => {
    
     const [adminEmail, setAdminEmail] = useState('');
    const [adminAddSuccess, setAdminAddSuccess] = useState(false)
     const makeAdminChange = (e) => {
         setAdminEmail(e.target.name = e.target.value )
     }

    const handleMakeAdminSubmit = (e) => {
       e.preventDefault();
        const admin = {admin : adminEmail}
       fetch('https://peaceful-everglades-65569.herokuapp.com/addAdmin', {
           method : 'POST',
           headers : {'Content-Type' : 'application/json'},
           body : JSON.stringify(admin)
       })
       .then( res => res.json())
       .then( result => {
            setAdminAddSuccess(result);
       })
    }
    return (
        <Card style={{width : '500px'}}>
            <Card.Body>
                <h5>Make Admin</h5>
                <Form onSubmit = {handleMakeAdminSubmit}>
                    <Form.Group>
                        <Form.Control 
                        onChange = {makeAdminChange}
                        required 
                        type = 'Email' 
                        placeholder='Add Email'  />
                    </Form.Group>
                    <Button size = 'sm' type = 'submit'>Submit</Button>
                </Form>
                <br/>
                {
                    adminAddSuccess && <h6 style = {{color : 'green'}}>Admin Add Successfully !</h6>
                }
            </Card.Body>
        </Card>
    );
};

export default MakeAdmin;