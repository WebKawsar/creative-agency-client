import React, { createContext, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Pages/Home';
import Login from './Pages/Login';
import ServiceList from './Components/ServiceList/ServiceList';
import Review from './Components/Review/Review';
import AdminServiceList from './Pages/AdminServiceList';
import AddService from './Pages/AddService';
import MakeAdmin from './Pages/MakeAdmin';
import AddOrder from './Pages/AddOrder';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainDashboard from './Pages/MainDashboard';



export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});
  return (
          <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
          <Router>
            <Switch>
              <Route path="/home">
                <Home></Home>
              </Route>
              <Route path="/login">
                <Login></Login>
              </Route>
              <PrivateRoute exact path="/dashboard">
                <MainDashboard></MainDashboard>
              </PrivateRoute>

              <PrivateRoute path="/dashboard/order/:serviceId">
                <AddOrder></AddOrder>
              </PrivateRoute>
              <PrivateRoute path="/dashboard/services">
                <ServiceList></ServiceList>
              </PrivateRoute>
              <Route path="/dashboard/review">
                <Review></Review>
              </Route>



              <Route path="/dashboard/addService">
                <AddService></AddService>
              </Route>
              <Route path="/dashboard/makeAdmin">
                <MakeAdmin></MakeAdmin>
              </Route>
              <Route path="/dashboard/adminServiceList">
                <AdminServiceList></AdminServiceList>
              </Route>



              <Route exact path="/">
                <Home></Home>
              </Route>
            </Switch>
          </Router>
        </UserContext.Provider>
  );
}

export default App;
