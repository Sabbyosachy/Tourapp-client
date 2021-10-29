
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Home/Header/Header';
import Footer from './Pages/Home/Footer/Footer';
import Service from './Pages/Home/Service/Service';
import Join from './Pages/Member/Join/Join';
import Notfound from './Pages/Notfound/Notfound';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        <Switch>
        <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
        
         <Route exact path="/service">
          <Service></Service>
         </Route>
         <Route exact path="/join">
           <Join></Join>
         </Route>
         <Route exact path="*">
           <Notfound></Notfound>
         </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
