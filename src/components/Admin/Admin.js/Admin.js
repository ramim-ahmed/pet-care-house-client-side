import { useContext, useEffect, useState } from 'react';
import { userContext } from '../../../App';
import AdminPanel from '../AdminPanel/AdminPanel';
import Booking from '../Booking/Booking';


const Admin = () => {
    const [isAdmin, setIsAdmin] = useState(false);

    const [loggedInUser, ] = useContext(userContext)

    useEffect( () => {
        fetch('https://peaceful-everglades-65569.herokuapp.com/isAdmin', {
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify({email : loggedInUser.email})
        })
        .then( res => res.json())
        .then( result => {
            setIsAdmin(result);
        })
        
    }, [loggedInUser]);

    return (
      <>
       {
           isAdmin ? <> <AdminPanel /> </> : <> <Booking/> </>
       }
      </>
    );
};

export default Admin;