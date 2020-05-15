import React, { useState } from 'react'
import { connect } from "react-redux";
import { login } from "../../redux/reducers/user";
import "./Auth.scss";
// import {authSuccess,errorLogin} from '../Alerts/Alerts'

const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const emailHandler = e => {
        setEmail(e.target.value)
    }
    const passwordHandler = e => {
        setPassword(e.target.value)
    }
    const loginHandler = (e) => {
        e.preventDefault()
        props.login(email,password)
        .then(() => {
            setEmail('')
            setPassword('')
            props.redirect()
            // authSuccess.fire({title: 'Sign in successful.'})
        }).catch((err) => {
            // errorLogin.fire({
            //     text: 'Incorrect username or password.'
            // })
            console.log("Error with login.", err)   // This causes a ~7 sec delay on login?
        })
    }
    return (
        <div className="login-container">
            <div className='login-text-container'>
                <h1>Welcome</h1>
                <p>Please login to continue.</p>
            </div>
            <form className='form-container' onSubmit={loginHandler}>
                <div className='login-input-container'>
                    <input
                        name='setEmail'
                        placeholder="email"
                        type='text'
                        required
                        value={email}
                        onChange={emailHandler}
                    /> 
                    <input
                        name='setPassword'
                        placeholder="password"
                        type='password'
                        required
                        value={password}
                        onChange={passwordHandler}
                    /> 
                </div>
                <button className='button login-button auth-button'>Login</button>
            </form>
            {
                props.location
                ?
                null
                :
                <div className='need-register-container'>
                    <p>Need an account?</p>
                    <button className='button click-register-button auth-button' onClick={props.display}>Click to Register</button>
                </div>
            }
        </div>
    )
}

export default connect(null, { login })(Login);
