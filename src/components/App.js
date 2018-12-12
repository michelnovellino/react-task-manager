import React, { Component } from 'react';

import { 
  BrowserRouter as Router, 
  Route,
  Link,
  Redirect,
  Switch

} from 'react-router-dom';

import {firebaseAuth} from '../data/config';

import './App.css';
import LogoMichel from '../media/logomichel.png'
//routes


//midleware 
import {logout} from './helpers/Auth';

//pages

import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Login from './pages/login';
import Register from './pages/register';


const PrivateRoute = ( { component: Component, authed, rest } ) => (
  <Route
    {...rest}
    render={
      props => authed === true
        ? <Component {...props} />
        : <Redirect to={ { pathname: '/Login', state: { from: props.location } } } />
    }
  />
)

const PublicRoute = ( { component: Component, authed, rest } ) => (
  <Route
    {...rest}
    render={
      props => authed === false
        ? <Component {...props} />
        : <Redirect to='/' />
    }
  />
  )

class App extends Component {

  constructor(...props){
    super(...props)

    this.state = {
      authed: false,
      loading:false
    }

  }



  

  componentDidMount() {
    this.removeListener = firebaseAuth().onAuthStateChanged( user => {
      if (user) {
        this.setState({
          authed: true,
          loading: false
        })
      } else {
        this.setState({
          loading: false
        })
      }
    })
  }

  componentWillUnmount() {
    this.removeListener()
  }

  render() {   

        return this.state.loading === true ? <h1>Loading...</h1> : (
          <Router > 
          <div className="container ">
              <nav>
              <div className="nav-wrapper headerApp">
              <Link to="/" className="brand-logo"><img alt="Michel Novellino" width="60%" src={LogoMichel}/></Link>
              <ul  id="nav-mobile" className="right hide-on-med-and-down">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/About">About</Link></li>
                  <li><Link to="/Contact">Contact</Link></li>
                
                  {
                    (this.state.authed)
                    ?    <span> 
                    
                     <li><Link to="/" onClick={()=>{
                       logout()
                       this.setState({authed: false})
                     }} >logout</Link></li>
                     </span> 
                     :   <span> 
                          <li><Link to="/Register" >register</Link></li>
                         <li><Link to="/Login">Login</Link></li>
                         </span> 
                  }
                  
              </ul>
              </div>
            
          </nav>
          <div className="container ">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/About" component={About} />
              <PublicRoute authed={this.state.authed} path="/Contact" component={Contact} /> 
              <PublicRoute authed={this.state.authed} path="/Login" component={Login} />  
              <PublicRoute authed={this.state.authed} path="/Register" component={Register} />   
            </Switch>
            </div>
        
          </div>
      </Router >
        )    
  }
}


export default App;
