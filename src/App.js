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

function App() {
  return (
    <div className="App">

    </div>
  );
}

const mapDispatchToProps = {requestUserData}

const mapStateToProps = state => state

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App))