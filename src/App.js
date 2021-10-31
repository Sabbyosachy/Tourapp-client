
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Home/Header/Header';
import Footer from './Pages/Home/Footer/Footer';
import Notfound from './Pages/Notfound/Notfound';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/Shared/PrivateRoute/PrivateRoute';
import Login from './Pages/Login/Login';
import Service from './Pages/Home/Service/Service';
import ManageOrders from './Pages/ManageOrders/ManageOrders';
import MyOrders from './Pages/MyOrders/MyOrders';
import AddNewService from './Pages/AddNewService/AddNewService';




function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
      <Header/>
        <Switch>
        <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute exact path="/services/:serviceId">
         <Service></Service>
          </PrivateRoute>
         <Route exact path="/login">
           <Login></Login>
         </Route>
         <Route exact path="/myorders">
          <MyOrders></MyOrders>
         </Route>
         <Route exact path="/manageorders">
          <ManageOrders></ManageOrders>
         </Route>
         <Route exact path="/addnewservice">
          <AddNewService></AddNewService>
         </Route>
         <Route exact path="*">
           <Notfound></Notfound>
         </Route>
        </Switch>
        <Footer/>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
