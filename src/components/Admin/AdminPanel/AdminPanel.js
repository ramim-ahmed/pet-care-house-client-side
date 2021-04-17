import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AddService from './AddService/AddService';
import MakeAdmin from './MakeAdmin/MakeAdmin';

const AdminPanel = () => {

    const [orderListRender, setOrderListRender] = useState(true);
    const [addServiceRender, setAddServiceRender] = useState(false);
    const [makeAdminRender, setMakeAdminRender] = useState(false);
    const [manageService, setManageService] = useState(false);
    const [orderList, setOrderList] = useState([]);
    const [manage, setManage] = useState([]);
    const [status, setStatus] = useState('');

    useEffect( () => {
    fetch('https://peaceful-everglades-65569.herokuapp.com/allOrderList')
         .then( res => res.json())
         .then( data => {
             setOrderList(data)
         })
    }, [])
    
    

    useEffect( () => {
    fetch('https://peaceful-everglades-65569.herokuapp.com/manageService')
        .then( res => res.json())
        .then( data => {
            setManage(data);
        })
    }, [])


    const handleOrderList = () => {
        setOrderListRender(true);
        setAddServiceRender(false);
        setMakeAdminRender(false);
        setMakeAdminRender(false);
    }

    const handleAddService = () => {
        setAddServiceRender(true);
        setOrderListRender(false);
        setMakeAdminRender(false);
        setManageService(false)
    }

    const handleMakeAdmin = () => {
        setMakeAdminRender(true);
        setOrderListRender(false);
        setManageService(false);
        setAddServiceRender(false);
    }

    
    const handleManage = () => {
        setManageService(true);
        setOrderListRender(false);
        setAddServiceRender(false);
        setMakeAdminRender(false)
    }
     
    const handleDelete = (id) => {
    fetch(`https://peaceful-everglades-65569.herokuapp.com/delete/${id}`)
        .then( res => res.json())
        .then( result => {
            if(result){
                const container = document.getElementById('container')
                container.style.display = 'none'
            }
        })
    }
    
    const statusUpdate = (id) => {

    fetch(`https://peaceful-everglades-65569.herokuapp.com/updateStatus/${id}`, {
            method : 'PATCH',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify({status : status})
        })
        .then( res => res.json())
        .then( result => {
            console.log(result);
        })
        
    }
   
    return (
        <div style={{paddingTop : '40px'}} className='admin-panel-container'>
            <Container>
                <Row>
                    <Col md = {3}>
                        <li className='bookingSideBar'>
                            <Link to ='/'> Back Home</Link>
                        </li>
                        <li className='bookingSideBar mt-3'>
                            <Link onClick = {handleOrderList} > Order List</Link>
                        </li>
                        <li className='mt-3 bookingSideBar'>
                            <Link onClick = {handleAddService}>Add Service</Link>
                        </li>
                        <li className='mt-3 bookingSideBar'>
                            <Link onClick = {handleMakeAdmin} >Make Admin</Link>
                        </li>
                        <li className='mt-3 bookingSideBar'>
                            <Link onClick = {handleManage}>Manage Services</Link>
                        </li>
                    </Col>
                   {
                       orderListRender &&  <Col className='admin-panel-col9' md = {9}>
                           <div className='mt-2'>
                            <h5>Order List</h5>
                           </div>
                        <Table striped bordered hover>
                             <thead>
                                 <tr>
                                     <th>Customer Name</th>
                                     <th>EmailId</th>
                                     <th>Service</th>
                                     <th>PaymentID</th>
                                     <th>Status</th>
                                 </tr>
                             </thead>
                             <tbody>
                                 {
                                     orderList.map( list => (
                                         <tr>
                                             <td><small>{list.name}</small></td>
                                             <td><small>{list.email}</small></td>
                                             <td><small>{list.title}</small></td>
                                             <td><small>{list.paymentId}</small></td>
                                             <td>
                                              <select
                                        onChange = {(e) => setStatus(e.target.value)}
                                               value = {status} >
                                                  <option value={list.status}>{list.status}</option>
                                                  <option value="On Going"> On Going </option>
                                                  <option value="Done"> Done</option>
                                              </select>
                                              <Button
                                              className="mt-2"
                                    onClick = {() => statusUpdate(list._id)}
                                               type = 'button'
                                                size = 'sm'
                                                >Change Status</Button>
                                            </td>
                                         </tr>
                                     ))
                                 }
                             </tbody>
                        </Table>
                       </Col>
                   }
                   {
                       addServiceRender &&  <Col className='admin-panel-col9' md = {9}>
                            <AddService/>
                       </Col>
                   }
                   {
                       makeAdminRender &&  <Col className='admin-panel-col9' md = {9}>
                            <MakeAdmin/>
                       </Col>
                   }
                   {
                       manageService &&  <Col className='admin-panel-col9' md = {9}>
                            <div className='mt-2'>
                                <h5>Manage Service</h5>
                           </div>
                        <Table striped bordered hover>
                             <thead>
                                 <tr>
                                     <th>Name</th>
                                     <th>Price</th>
                                     <th>Description</th>
                                     <th>Action</th>
                                 </tr>
                             </thead>
                             <tbody>
                                 {
                                     manage.map( list => (
                                         <tr id ='container'>
                                             <td><small>{list.title}</small></td>
                                             <td><small>${list.price}</small></td>
                                             <td><small>{list.description}</small></td>
                                             <td>
                                                 <Button 
                                                 onClick={ () => handleDelete(list._id)} 
                                                 type= 'button' 
                                                 size = 'sm'>Delete</Button>
                                             </td>
                                         </tr>
                                     ))
                                 }
                             </tbody>
                        </Table>
                       </Col>
                   }
                </Row>
            </Container>
        </div>
    );
};

export default AdminPanel;