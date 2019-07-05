import React from "react";
import '../Login.css';

export class Login extends React.Component {
    constructor() {
        super();
        this.state = {
          alertText: 'Utilizador ou palavra-passe erradas',
          alertisNotVisible: true,
          alertColor: 'danger'
        };
      }

    
      render() {
        return (
            <div class="login-page">
                <div class="form">
                <form class="login-form">
                    <input type="text" placeholder="username"/>
                    <input type="password" placeholder="password"/>
                    <button>login</button>
                </form>
                </div>
            </div>
        );
      }
    }

export default Login;
