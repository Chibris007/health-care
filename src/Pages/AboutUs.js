import React from 'react';

import mama from '../Images/mama.jpg';

const AboutUs = () => {
    return (
        <>
           <div className="about-container">
               <div className="flex-item-one">
                  <img src={mama} alt="The Able Mama" />
               </div>
               <div className="flex-item-two">
                   <h1>Health Garde Product</h1>
                   <p>I can’t keep calm let’s go NATURAL, LETS BOOST OUR IMMUNITY, DETOXIFICATION IS A NECESSITY LETS PROTECT OURSELVES AGAINST BACTERIA,VIRUSES , FUNGI  etc !FOOD SUPPLEMENTS ANSWER LOADS OF YOUR QUESTIONS visit my online shop, make your choices enjoy sumptuous discounts and get a gift for visiting my online shop 08038133369.</p>               
                </div>
           </div> 
            
        </>
    );
}
 
export default AboutUs;
