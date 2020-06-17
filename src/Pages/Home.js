import React from 'react';

import HGI_corona_poster from '../Images/HGI_corona_poster.jpg';
import family from '../Images/family.jpg';
import health_garde from '../Images/health_garde.jpg';

 const Home = () => {
    return (
        <div >
           <div className="grid-container"></div>
           <div className="grid-item1">
               <img src={HGI_corona_poster} alt="Good Publicity" height="300" width="300" />
           </div>
           <div className="grid-item2">
               <img src={family} alt="family happy moment" height="300" width="380" />
           </div>
           <div className="section">
               <div className="section-item">
                   <h4>OUR PRODUCT COMMITMENT </h4>
                       <p>Manufacturing of our products have</p>
                       <p>received International Good</p>
                       <p>Manufacturing Practices (GMP)</p>
                       <p>registration which verifies that proper </p>
                       <p>methods, equipment, and controls is in</p>
                       <p>place to produce the highest quality</p>
                       <p>dietary supplement products.</p>
               </div>
               <div className="section-item1">
                   <img src={health_garde} alt="safety tips" width="700" height="250" />
                  
               </div>
           </div>
           
        </div>
    )
}


export default Home;