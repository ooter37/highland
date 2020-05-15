import React, { useEffect,useState } from 'react'
import Login from './Login'
import Register from './Register'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {login} from '../../redux/reducers/user'

const Auth = () => {
    const [display, setDisplay] = useState(true)
    const [redirect, setRedirect] = useState(false)
    useEffect(() => {
        if (redirect) {
            return <Redirect to='/main'/>
        }
    })
    const toggleDisplay = () => {
        setDisplay(!display)
    }
    const toggleRedirect = () => {
        setRedirect(!redirect)
    }
    return (
        <div className='landing-login'>
            <div className='about-text'>
                    <h1 className='auth-text'>Welcome to Property Management Website</h1>
                </div>
                {
                display
                ?
                <Login display={toggleDisplay} redirect={toggleRedirect}/>
                :
                <Register display={toggleDisplay} redirect={toggleRedirect}/>
                }
        </div>
    )
}

export default connect(null, { login })(Auth);
