import React, { Component } from 'react';



function ValidationMessage(props) {
    if (!props.valid) {
      return(
        <div className='error-msg'>{props.message}</div>
      )
    }
    return null;
  }

class Password extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email: '', emailValid: false,
          errorMsg: {}      
        };
    }
    
    validateForm = () => {
        const {emailValid }= this.state;
        this.setState({
          formValid: emailValid
        });
      }
   
      updateEmail = (email) => {
        this.setState({email}, this.validateEmail);
      } 
  
      validateEmail = () => {
        const {email} = this.state;
        let emailValid = true;
        let errorMsg = {...this.state.errorMsg};
  
        //checks for format ...@./&..
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          emailValid = false;
          errorMsg.email = 'Invaild email'
        }
  
        this.setState({emailValid, errorMsg}, this.validateForm)
      }

    render() {
        return (
            <div>
                <div className="password-container">
                    <h3>forgot password</h3>
                
                <div className="password-item">
                    <p>Type in your email to reset your password</p>
                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <ValidationMessage valid={this.state.emailValid} message={this.state.errorMsg.email} />
                        <input type='email' id='email' name='email' className='form-field' 
                        value={this.state.email} onChange={(e) => this.updateEmail(e.target.value)} />
                  </div>
                  <div className="check-box">
                        <input type="checkbox" className="checkbox" /> 
                        I'm not a robot
                  </div> 
                  <div>
                    <a href="https://www.olugboyeabosede@gmail.com" className='form-link'>                        
                       Email Link                    
                    </a>
                  </div>      
                </div> 
                </div>   
            </div>
        )
    }
}

export default Password;