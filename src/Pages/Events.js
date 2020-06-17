import React from 'react';

import flyers from '../Images/flyers.jpg';
import flyers1 from '../Images/flyers1.jpg';
import flyers2 from '../Images/flyers2.jpg';
import flyers3 from '../Images/flyers3.jpg';

const Events = () => {
    return (
        <>
            <div className="events-container">
                <h1>Our Events</h1>                
            </div>
            
            <div className="events-item1">
              <div className="flyers">
                  <img src={flyers} alt="events" width="400" height="300" />
                  <div>
                      <h4>PORT HARCOURT 2020</h4>
                        <p>Join us 10 AM on Monday 3rd of February 2020, 
                          for the event of the year, 
                          Royal Court Hotel,79 Stadium Road, Port Harcourt.
                          Together we can</p>
                  </div>
              </div>
              <div className="flyers">
                  <img src={flyers1} alt="events" width="400" height="300" />
                  <div>
                      <h4>ENUGU LAUNCH 2020</h4>
                         <p>Join us 10 AM on Saturday 1st of February 2020, for the event of the year, 
                         Kobb Civic Centre, Polo Park Mall (Shoprite Complex), GRA, Enugu 
                         Together we can</p> 
                  </div>
              </div>
            </div>

            <div className="events-item2">
                    <div className="flyers2">
                        <img src={flyers2} alt="events" width="400" height="300" />
                      <div>  
                        <h4>ABUJA LAUNCH 2020</h4>
                        <p>Join us 10 AM on Tuesday 4th of February 2020,
                         for the event of the year, 
                        83 Ademola Adetokumbo wuse 2, Abuja. (by amino stop at old chicken 
                        opposite eternal filling station)</p>
                      </div>  
                    </div>
                    
                    <div className="flyers3">
                        <img src={flyers3} alt="events" width="400" height="300" />
                      <div>  
                        <h4>LAGOS LAUNCH 2020</h4>
                        <p>Join us 10 AM on Thursday 6th of February 2020, for the event of the year,
                        10 Degrees Event Centre, 32 Billings Way, Oregun, Ikeja, Lagos.
                        Together we can</p>
                      </div>  
                    </div>
            </div>
            <div className="training"></div>
            
            <div>
                <table id="office">
                    <tr>
                      <th>Office</th>
                      <th>Day</th>
                      <th>Time</th>
                    </tr>
                    <tr>
                      <td>6B Adeniyi Jones, Ikeja, Lagos</td>
                      <td>MON & THUR</td>
                      <td>10am</td>
                    </tr>
                    <tr>
                      <td>83 Ademola Adetokumbo wuse 2, Abuja</td>
                      <td>TUES & FRI</td>
                      <td>12pm/1pm</td>
                    </tr>
                    <tr>
                      <td>6243b Aba Rd, Rumuomasi, Port Harcourt</td>
                      <td>TUES & SAT</td>
                      <td>11am</td>
                    </tr>
                    <tr>
                      <td>450 Ogui Rd, Otigba Junction, Enugu</td>
                      <td>MON & SAT</td>
                      <td>10am</td>
                    </tr>
                  </table>
            </div>
        </>
    );
}
export default Events;

/* <div className="events-item1">
                    <div className="flyers">
                        <img src={flyers} alt="events" width="500" height="300" /> 
                        
                        <h4>ENUGU LAUNCH 2020</h4>
                         <p>Join us 10 AM on Saturday 1st of February 2020, for the event of the year, </p>
                         <p>Kobb Civic Centre, Polo Park Mall (Shoprite Complex), GRA, Enugu </p>
                         <p>Together we can</p> 
                
                    </div>
                        
                    <div className="flyers1">
                        <img src={flyers1} alt="events" width="500" height="300" />
                        <h4>PORT HARCOURT 2020</h4>
                        <p>Join us 10 AM on Monday 3rd of February 2020, for the event of the year, </p>
                        <p>Royal Court Hotel,79 Stadium Road, Port Harcourt.</p>
                        <p>Together we can</p>
                    </div>
                </div>

                
                <div className="events-item2">
                    <div className="flyers2">
                        <img src={flyers2} alt="events" width="500" height="300" />
                      <div>  
                        <h4>ABUJA LAUNCH 2020</h4>
                        <p>Join us 10 AM on Tuesday 4th of February 2020, for the event of the year, </p>
                        <p>83 Ademola Adetokumbo wuse 2, Abuja. (by amino stop at old chicken </p>
                        <p>opposite eternal filling station)</p>
                      </div>  
                    </div>
                    <div className="flyers3">
                        <img src={flyers3} alt="events" width="500" height="300" />
                      <div>  
                        <h4>LAGOS LAUNCH 2020</h4>
                        <p>Join us 10 AM on Thursday 6th of February 2020, for the event of the year,</p>
                        <p>10 Degrees Event Centre, 32 Billings Way, Oregun, Ikeja, Lagos.</p>
                        <p>Together we can</p>
                      </div>  
                    </div>
                </div>
            </div>
 */