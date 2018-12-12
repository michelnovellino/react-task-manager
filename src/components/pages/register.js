import React, { Component } from 'react';
import {auth} from '../helpers/Auth';

import {Link} from 'react-router-dom';

class RegisterApp extends Component {
    constructor(...props){
        super(...props)

        this.state = {loginMessage: null}
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setMessage = this.setMessage.bind(this)
    }

    handleSubmit(e){
        e.preventDefault();
    
            auth(this.email.value,this.password.value)
                .then(response =>this.setState(this.setMessage(`se creo la cuenta exitosamente ${response}` )))
                    .catch(error => this.setState(this.setMessage(`datos erroneos ${error}`) ) )
        
    }
 

    setMessage(err) {
        return { loginMessage: err }
      }
    


  render() {
    return (
      <div className="RegisterApp row ">
            <div className="col s12 m4 offset-m4">
                <h2 className="header">Register Form</h2>
                <div className="card horizontal">     
                    <div className="card-stacked">
                        <div className="card-content">
                            <form onSubmit={this.handleSubmit} className="col s12">
                                <div className="row">
                                    <div className="input-field col s12">
                                    <input id="email" type="text" className="validate"  ref={email => this.email = email} />
                                    <label className="active" for="email" >Email</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                    <input  id="password" type="text" className="validate" ref={password => this.password = password} />
                                    <label className="active" for="password"  >Password</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input className="waves-effect waves-light btn col s12" type="submit" value="Enviar"/>
                                            {
                                                this.state.loginMessage &&
                                                <div className="error col s12 red darken-2">
                                                <p className="flow-text">
                                                    {this.state.loginMessage}

                                                </p>
                                                <Link to='/login'>¿Ya tienes cuenta?, inicia sesion </Link>
                                                </div>
                                            }
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    );
  }
}

export default RegisterApp;
