import React from 'react'
import Login from './Login'
import Register from './Register'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {login} from '../../redux/reducers/user'

class Auth extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            display: true,
            redirect: false
        }
        this.toggleDisplay = this.toggleDisplay.bind(this)
        this.toggleRedirect = this.toggleRedirect.bind(this)
        // this.loginHandler = this.loginHandler.bind(this)
    }
    toggleDisplay(){
        let {display} = this.state
        this.setState({
            display: !display
        })
    }
    toggleRedirect(){
        let {redirect} = this.state
        this.setState({
            redirect: !redirect
        })
    }
    // loginHandler(e) {
    //     e.preventDefault();
    //     this.props
    //       .login({email: 'sample', password: 'sample'})
    //       .then(() => {
    //         this.toggleRedirect();
    //       })
    //       .catch((err) => {
    //         window.alert('Incorrect username or password.')
    //       });
    //   }
    render(){
        if (this.state.redirect) {
            return <Redirect to='/main'/>
        }
        return(
            <div className='landing-login'>
                {/* <button onClick={this.loginHandler}>Sample</button> */}
                <div className='about-text'>
                    <h1 className='auth-text'>Welcome to Property Management Website</h1>
                </div>
                    
                    {
                        this.state.display
                        ?
                        <Login display={this.toggleDisplay} redirect={this.toggleRedirect}/>
                        :
                        <Register display={this.toggleDisplay} redirect={this.toggleRedirect}/>
                        
                    }
                    
            </div>
        )
    }
}

export default connect(null, { login })(Auth);
