import React, { Component } from 'react';
import {login,resetPassword} from '../helpers/Auth';


class LoginApp extends Component {
    constructor(...props){
        super(...props)

        this.state = {loginMessage: null}
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setMessage = this.setMessage.bind(this)
        this.resetPassword = this.resetPassword.bind(this)
    }

    handleSubmit(e){
        e.preventDefault();
    
            login(this.email.value,this.password.value)
                .then(response =>this.setState(this.setMessage(`todo correcto ${response}` )))
                    .catch(error => this.setState(this.setMessage(`datos erroneos ${error}`) ) )
        
    }
    
  resetPassword() {
    resetPassword( this.email.value )
      .then( () => this.setState( this.setMessage(`Se ha enviado un correo electronico a  <b>${this.email.value}</b> para reestablecer tu contraseña.`) )  )
      .catch( err => this.setState( this.setMessage(`El email ${this.email.value} no se encuentra registrado`) ) )
  }

    setMessage(err) {
        return { loginMessage: err }
      }
    


  render() {
    return (
      <div className="LoginApp row ">
            <div className="col s12 m4 offset-m4">
                <h2 className="header">Login</h2>
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
                                                <a href="#" onClick={this.resetPassword} className="alert-link">¿Olvidaste tu contraseña?</a>
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

export default LoginApp;
