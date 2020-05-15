import React, {useState} from "react";
import { connect } from "react-redux";
import { register } from "../../redux/reducers/user";
import "./Auth.scss";
// import {authSuccess,errorLogin} from '../Alerts/Alerts'

const Register = (props) => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const emailHandler = e => {
    setEmail(e.target.value)
  }
  const passwordHandler = e => {
    setPassword(e.target.value)
  }
  const registrationHandler = (e) => {
    e.preventDefault()
    console.log(email,password)

    props.register(email,password)
    .then(() => {
      setEmail('')
      setPassword('')
      props.redirect()
      // authSuccess.fire({title: `Thanks for registering!`})
    })
    .catch((err) => {
      // errorLogin.fire({text: 'That username is already in use. Please login.'})
      console.log("Error registering.", err)
    })
  }

  return (
  <div>
    <div className="login-container">
      <div className='login-text-container'>
        <p>Registering is easy. Provide an email address and password to get started.</p>
      </div>
      <form className='form-container' onSubmit={registrationHandler}>
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
        <button className='button login-button auth-button'>Register</button>
      </form>
      {
      props.location
      ?
      null
      :
      <div className='need-register-container'>
        <p>Already have an account?</p>
        <button className='button click-register-button auth-button' onClick={props.display}>Click to Login</button>
      </div>
      }
      </div>
  </div>
  )
}

export default connect(null, { register })(Register);