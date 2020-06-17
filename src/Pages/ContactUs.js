import React from 'react';

import {Link} from 'react-router-dom';

function ValidationMessage(props) {
  if (!props.valid) {
    return(
      <div className='error-msg'>{props.message}</div>
    )
  }
  return null;
}


class ContactUs extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: '', usernameValid: false,
        email: '', emailValid: false,
        password: '', passwordValid: false,       
        passwordConfirmation: '', passwordConfirmationValid: false,
        formValid: false,
        errorMsg: {} 
      };
    }

    validateForm = () => {
      const {usernameValid, emailValid, passwordValid, passwordConfirmationValid} = this.state;
      this.setState({
        formValid: usernameValid && emailValid && passwordValid && passwordConfirmationValid
      });
    }

    updateUsername = (username) => {
      this.setState({username}, this.validateUsername);
    }

    validateUsername = () => {
      const {username} = this.state;
      let usernameValid = true;
      let errorMsg = {...this.state.errorMsg};

      if (username.length < 3) {
        usernameValid = false;
        errorMsg.username = 'Must be at least 3 characters long';
      }

      this.setState({usernameValid, errorMsg}, this.validateForm);
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

    updatePassword = (password) => {
      this.setState({password}, this.validatePassword);
    }

    validatePassword = () => {
      const {password} = this.state;
      let passwordValid = true;
      let errorMsg = {...this.state.errorMsg};

      //must be 6 characters
      //must contain a number
      //must contain a special character

      if (password.length < 6) {
        passwordValid = false;
        errorMsg.password = 'password must be at least 6 characters long';
      } else if (!/\d/.test(password)) {
        passwordValid = false;
        errorMsg.password = 'password must contain a digit';
      } else if (!/[!@#$%^&*()]/.test(password)) {
        passwordValid = false;
        errorMsg.password = 'password must contain a special character: !@#$%^&*()';
      }

      this.setState({passwordValid, errorMsg}, this.validateForm);
    }

    // Validating password confirmation
    updatePasswordConfirm = (passwordConfirm) => {
      this.setState({passwordConfirm}, this.validatePasswordConfirm);
    }

    validatePasswordConfirm = () => {
      const {passwordConfirm, password} = this.state;
      let passwordConfirmValid = true;
      let errorMsg = {...this.state.errorMsg}

      if (password !== passwordConfirm) {
        passwordConfirmValid = false;
        errorMsg.passwordConfirm = 'Passwords do not match';
      }

      this.setState({passwordConfirmValid, errorMsg}, this.validateForm);
    }
    
    
    render() {
      return (
        <>
          <div className='form-container'> 
              <header>
                  Customer Form
              </header>
                <form action='#' id='js-form'>
                  <div className='form-group'>
                    <label htmlFor='username'>Full Name</label>
                      <ValidationMessage valid={this.state.usernameValid} message={this.state.errorMsg.username} />
                      <input type='text' id='fullname' name='fullname' className='form-field' 
                      value={this.state.username} onChange={(e) => this.updateUsername(e.target.value)} />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <ValidationMessage valid={this.state.emailValid} message={this.state.errorMsg.email} />
                    <input type='email' id='email' name='email' className='form-field' 
                    value={this.state.email} onChange={(e) => this.updateEmail(e.target.value)} />
                  </div> 
                  <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <ValidationMessage valid={this.state.passwordValid} message={this.state.errorMsg.password} />
                    <input type='password' id='password' name='password' className='form-field' 
                    value={this.state.password} onChange={(e) => this.updatePassword(e.target.value)} />
                  </div> 
                  <div className='form-group'>
                    <label htmlFor='password-confirmation'>Password Confirmation</label>
                    <ValidationMessage valid={this.state.passwordConfirmValid} message={this.state.errorMsg.passwordConfirm} />
                    <input type='password' id='password-confirmation' name='password-confirmation' className='form-field' 
                    value={this.state.passwordConfirm} onChange={(e) => this.updatePasswordConfirm(e.target.value)} />
                  </div>
                  <div className='form-controls'>
                      <button className='button' type='submit' disabled={!this.state.formValid}>Log In</button>
                  </div>
                  <div>
                  <Link to="/consult" className='form-link'>                        
                        Not a Customer?Login as a Consultant                       
                    </Link> 
                  </div>
                </form>
            </div>


            <div className="contact-container">
              <div className="contact-item">1</div>
              <div className="contact-item">2</div>
              <div className="contact-item">3</div>
            </div>
        </>
      );
    }
  }
  
  export default ContactUs;

