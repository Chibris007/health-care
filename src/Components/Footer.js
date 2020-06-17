import React from 'react';

import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io";

const Footer = () => {
    return (
        <>
            <div className="flex-container">
               
                <div className="flex-items1">            
                        <h4>Our product commitment</h4>
                    <div>    
                        Manufacturing of our products have received International Good Manufacturing
                        Practices (GMP) registration which verifies that proper methods, equipment, and 
                        controls is in place to produce the highest quality dietary supplement products.
                    </div>    
                        <div className="flex-link">
                            <a href="learn more">Learn More >></a>
                        </div>                       
                </div>
                
                <div className="flex-items2">
                <h4>Social Networking</h4>
                        Stay connected with us 
                    <div className="flex-icons">
                        <a href="https://www.facebook.com/abosedeojo.olugboye">
                        <FiFacebook className="facebook" />
                        </a>
                        
                        <a href="twitter">
                        <FiTwitter className="twitter" />
                        </a>

                        <a href="instagram">
                        <IoLogoInstagram  className="instagram" />
                        </a>
                        
                    </div>    
                 
                </div>
                <div className="flex-items3">
                   
                    <div className="flex-div">
                        <a href="terms">
                            WEBSITE TERMS & CONDITIONS
                        </a>
                    </div>
                                     
                    <div className="flex-div">
                        <a href="privacy">
                            PRIVACY POLICY OF GARDE
                        </a>
                    </div>
                    <div className="flex-div">
                        <a href="policy">
                            REFUND & SHIPPING POLICY
                        </a>
                    </div>
                    
                    <div className="flex-div">
                        <a href="procedures">
                            POLICIES & PROCEDURES
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex-footer">
                <span className="span">&copy;2020 HealthGarde</span>
            </div>
        </>
    );
}

export default Footer;

