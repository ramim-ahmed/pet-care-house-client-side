import { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Admin from "./components/Admin/Admin.js/Admin";
import Booking from "./components/Admin/Booking/Booking";
import Home from './components/Home/Home/Home';
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";


export const userContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <>
    <userContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
            <Route exact path = '/'>
              <Home/>
            </Route>
            <Route  path = '/home'>
              <Home/>
            </Route>
            <PrivateRoute  path = '/admin'>
             <Admin/>
            </PrivateRoute>
            <PrivateRoute  path = '/booking/:id'>
              <Booking/>
            </PrivateRoute>
            <Route  path = '/login'>
              <Login/>
            </Route>
        </Switch>
      </Router>
      </userContext.Provider>
    </>
  );
}

export default App;
