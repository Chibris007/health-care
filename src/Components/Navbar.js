import React, { Component } from 'react';

import {FaAlignRight} from 'react-icons/fa';

import {Link} from 'react-router-dom';

import Logo from '../Images/Logo.png';



class Navbar extends Component {
    state={
        isOpen:false
    }
    handleToggle = () => {
        this.setState({isOpen:!this.state.isOpen});
    }
    render() {
        return (
            <div>
               <ul>
                  <li className="nav-info">
                     <Link to="/contact">CUSTOMER LOGIN</Link>
                  </li>
                  <li className="nav-info">
                     <Link to="/consult">CONSULTANT LOGIN</Link>
                  </li>
               </ul>   
               <nav className="Navbar">
                   <div className="nav-center">
                       <div className="nav-header">
                            <Link to="/">
                              <img src={Logo} alt="Health Garde" width="150px" height="150px" />
                            </Link>
                            <button type="button" className="nav-btn" onClick={this.handleToggle}>
                              <FaAlignRight className="nav-icon" />
                            </button>  
                        </div>
                        
                        <ul className={this.state.isOpen?"nav-links show-nav":"nav-links"}>
                           <li>
                              <Link to="/">Home</Link>
                           </li>
                           <li>
                              <Link to="/about">About Us</Link>
                           </li>
                           <li>
                              <Link to="/contact">Contact Us</Link>
                           </li>
                           <li>
                              <Link to="/events">Events</Link>
                           </li>
                           <li>
                              <Link to="/images">Images</Link>
                           </li>
                           <li>
                              <Link to="/join">Join Us</Link>
                           </li>
                           
                        </ul>
                   </div>               
               </nav>
            </div>
        );
    }
}

export default Navbar;

/* <ul className={this.state.isOpen?"nav-links show-nav":"nav-links"}>
                           <li>
                              <Link to="/">Home</Link>
                           </li>
                           <li>
                              <Link to="/about us">About Us</Link>
                           </li>
                           <li>
                              <Link to="/contact us">Contact Us</Link>
                           </li>
                           <li>
                              <Link to="/events">Events</Link>
                           </li>
                           <li>
                              <Link to="/images/:slug">Images</Link>
                           </li>
                           <li>
                              <Link to="/join us">Join Us</Link>
                           </li>
        
                        </ul>*/