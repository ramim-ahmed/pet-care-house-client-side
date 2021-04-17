import firebase from "firebase/app";
import "firebase/auth";
import { useContext } from "react";
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useHistory, useLocation } from "react-router";
import { userContext } from "../../App";
import loginBrand from '../../assets/logo-header.png';
import Footer from '../SharedComponents/Footer/Footer/Footer';
import Navigation from '../SharedComponents/Navigation/Navigation/Navigation';
import firebaseConfig from "./Firebase.config";
const Login = () => {
    
    if(!firebase.apps.length){
        firebase.initializeApp(firebaseConfig);
    }
    const history = useHistory();
    const location = useLocation();
    const [, setLoggedInUser] = useContext(userContext)
    const { from } = location.state || { from: { pathname: "/" } };   
    const handleGoogleSignIn =() => {
       const googleProvider = new firebase.auth.GoogleAuthProvider();
       firebase.auth()
       .signInWithPopup(googleProvider)
       .then((result) => {
       
         const {displayName, email} = result.user;
         const newSignInUser = {
             name : displayName,
             email : email
         }
         setLoggedInUser(newSignInUser);
         history.replace(from);
       })
       .catch((error) => {
         const errorMessage = error.message;
         console.log(errorMessage);
       });
     
    }

   

    return (
        <>
        <Navigation/>
        <Container>
            <Row className="login-row">
                <Col md = {12}>
                    <Card className="text-center" style={{width : '100%'}}>
                        <div>
                            <Card.Img style={{width : '180px'}} src = {loginBrand} fluid/>
                        </div>
                        <Card.Body className="mt-5">
                            <h4><strong>Login With</strong></h4>
                          <Button onClick = {handleGoogleSignIn} className="login-btn mt-3">
                              Continue With Google
                          </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </Container>
        <Footer/>
        </>
    );
};

export default Login;