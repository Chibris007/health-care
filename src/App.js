import React from 'react';

import {Route, Switch} from 'react-router-dom';

import './App.css';

import Navbar from './Components/Navbar';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import Consult from './Pages/Consult';
import Password from './Pages/Password';
import Error from './Pages/Error';
import Events from './Pages/Events';
import Home from './Pages/Home';
import Images from './Pages/Images';
import JoinUs from './Pages/JoinUs';
import Footer from './Components/Footer';


function App() {
  return ( 
     <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about/" component={AboutUs} />
          <Route exact path="/images/" component={Images} />
          <Route exact path="/join/" component={JoinUs} />
          <Route exact path="/events/" component={Events} />
          <Route exact path="/contact/" component={ContactUs} />
          <Route exact path="/consult/" component={Consult} />
          <Route exact path="/password/" component={Password} />
          <Route component={Error} />
          
        </Switch>
        <Footer />
    </>  
  );  
}

export default App;
