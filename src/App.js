import React from 'react';
import './App.scss';
import './reset.css';
import {Route, Switch, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {requestUserData} from './redux/reducers/user'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import Auth from './Components/Auth/Auth'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      redirect: false
    }
    this.toggleRedirect = this.toggleRedirect.bind(this)
  }

  toggleRedirect(){
    let {redirect} = this.state
    this.setState({
        redirect: !redirect
    })
}
  componentDidMount(){
    if (this.props.user) {
      this.props.requestUserData()
    }
  }
  render(){
    if (this.state.redirect) {
      return <Redirect to='/'/>
  }
    return (
      <div className="App">
        {
          this.props.location.pathname === '/main'
          ?
          <Header toggleRedirect={this.toggleRedirect} location={this.props.location}/>
          :
          null
        }
      <Switch>
        <Route exact path='/' component={Auth}/>
        <Route path='/main' component={Main}/>
      </Switch>
    </div>
  );
}
}

const mapDispatchToProps = {requestUserData}

const mapStateToProps = state => state

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App))