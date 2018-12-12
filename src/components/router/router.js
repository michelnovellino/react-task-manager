import React from 'react';
import { 
    BrowserRouter as Router, 
    Route,
    Link,
    Redirect,
    withRouter

} from 'react-router-dom';

const StaticSite = ()=>(
        <Router > 
            <div>
                <nav>
                <div className="nav-wrapper   brown headerApp">
                <a class="brand-logo">Logo</a>
                <ul  id="nav-mobile" class="right hide-on-med-and-down">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                </ul>
                </div>
                <Route exact path="/" component={Home} />
                <Route path="/About" component={About} />
                <Route path="/Contact" component={Contact} />
            </nav>
            </div>
        </Router >
)

const Home = ()=>( 
    <div  className="container">
    <h1>Home</h1>
    </div>
    )

const About = ()=>(
    <div  className="container">
    <h1>About</h1>
    </div>
    )
    

const Contact = ()=>(
    <div  className="container">
    <h1>Contact</h1>
    </div>
    )

export default StaticSite;