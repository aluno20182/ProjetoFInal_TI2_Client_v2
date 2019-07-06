import React from "react";
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom'
import '../Login.css';

export const apiBase = "https://ipt-ti2-iptgram.azurewebsites.net/";

export class Login extends React.Component {
    constructor(props) {
        super();
        this.state = {

        };
      }

      /**
      * Submete os dados da utilizador para o backend
      */
      handleSubmit = async e => {
        e.preventDefault();
    
        //Objeto Login
        const loginData = {
          userName: document.getElementById('user').value,
          password: document.getElementById('pass').value
        };
        
        //Enviar pedidos
        const response = await fetch( apiBase + 'api/account/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(loginData)
        });


        //Aguardar API
        await response.json().then(resp => {
          //Verificar o estado da resposta da API
          let status = resp.statusCode;
          console.log(resp);
          switch (status) {
            case 200:
              //Armazenar o token
              sessionStorage.setItem('token', response.headers.get('x-auth-token'));
              //Redirect
              this.setState({ redirect : '/posts' })
              break;
            case 401:
              this.setState({ alertisNotVisible: false });
              console.log("Errado");
              break;
            default:
              console.log("Foda-se");
              break;
          }
         
        });
      };


    
      render() {
        if (this.state.redirect) {
          return <Redirect to={{pathname: this.state.redirect}}/>
        }
        return (
            <div class="login-page" >
                <div class="form">
                  <form class="login-form" onSubmit={this.handleSubmit}>
                      <input type="text" className="form-control" id="user" placeholder="username" required />
                      <input type="password" className="form-control" id="pass" placeholder="password" required />
                      <button type="submit" >login</button>
                  </form>
                </div>
            </div>
        );
        }
    }
  
export default Login;
