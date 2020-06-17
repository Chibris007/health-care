import React, { Component } from 'react';

import {Link} from 'react-router-dom';

function ValidationMessage(props) {
    if (!props.valid) {
      return(
        <div className='error-msg'>{props.message}</div>
      )
    }
    return null;
}

class Consult extends Component {
    constructor(props) {
        super(props)
        this.state={
            username: "", usernameValid: false,
            password: "", passwordValid: false,
            formValid: false,
            errorMsg: {}
        }
 }   
        
        validateForm = () => {
            const {usernameValid, passwordValid} = this.state;
            this.setState({
                formValid: usernameValid && passwordValid
            })
        }
        
        updateUsername = (username) => {
            this.setState({username}, this.validateUsername)
        }
        
        validateUsername = () => {
            const {username} = this.state;
            let usernameValid = true;
            let errorMsg = {...this.state.errorMsg};

            if (username.length < 3) {
                usernameValid = false;
                errorMsg.username = 'must be at least 3 characters long'
            }
            
            this.setState({usernameValid, errorMsg}, this.validateForm)
        }

        updatePassword = (password) => {
            this.setState({password}, this.validatePassword);
        }
        
        validatePassword = () => {
            const {password} = this.state;
            let passwordValid = true;
            let errorMsg = {...this.state.errorMsg}
            
             // must be 6 chars
            // must contain a number
            // must contain a special character
            
            if (password.length < 6) {
                passwordValid = false;
                errorMsg.password = 'password must be at least 6 characters long';
            } else if (!/\d/.test(password)) {
                passwordValid = false;
                errorMsg.password = 'password must contain a digit';
            } else if (!/[!@#$%^&*]/.test(password)) {
                passwordValid = false;
                errorMsg.password = 'password must contain special character: !@#$%^&*';
            }
            
              this.setState({passwordValid, errorMsg}, this.validateForm);            
        }
        

    render() {
        return (
            <>
                <div className='form-container'> 
                    <header>
                        Login as a Consultant
                    </header>
                        <form action='#' id='js-form'>
                            <div className='form-group'>
                                <label htmlFor='username'>Username</label>
                                <ValidationMessage valid={this.state.usernameValid} message={this.state.errorMsg.username} />
                                <input type='text' id='username' name='username' className='form-field' 
                                value={this.state.username} onChange={(e) => this.updateUsername(e.target.value)} />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='password'>Password</label>
                                <ValidationMessage valid={this.state.passwordValid} message={this.state.errorMsg.password} />
                                <input type='password' id='password' name='password' className='form-field' 
                                value={this.state.password} onChange={(e) => this.updatePassword(e.target.value)} />
                            </div>
                            <div className='form-controls'>
                                <button className='button' type='submit' disabled={!this.state.formValid}>Log In</button>
                            </div>
                            <div>
                                <Link to="/password" className='form-link1'>
                                    forgot your password
                                </Link>
                            </div>
                            <div>
                                <Link to="/contact" className='form-link'>                        
                                    Not a Consultant?Login as a Customer                       
                                </Link>    
                            </div>    
                        </form>
                </div>
           </> 
        );
    }
}

export default Consult;
