import React from "react";
import { Redirect } from "react-router";
import "../Login.css";

import { apiBase } from '../api';

export class Login extends React.Component {
  state = {
    redirect: null
  };

  /**
   * Submete os dados da utilizador para o backend
   */
  handleSubmit = async e => {
    e.preventDefault();

    //Objeto Login, guarda o valor introduzido no user e na pass
    const loginData = {
      userName: document.getElementById("user").value,
      password: document.getElementById("pass").value
    };

    //Enviar pedidos
    const response = await fetch(apiBase + "api/account/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(loginData)
    });

    console.log(response);
    let status = response.status;
    switch (status) {
      //em caso de sucesso
      case 200:
        //Redirect
        this.setState({ redirect: "/posts" });
        break;
      //em caso de pass ou user incorreto
      case 401:
        this.setState({ alertisNotVisible: false });
        alert("Password ou User errado, tente novamente!");
        break;
      //qq outro tipo de erro
      default:
        console.log("ah shit, here we go again");
        break;
    }
  };

  render() {
    console.log(this.props);

    //Caso seja rederecionado
    if (this.state.redirect) {
      console.log(this.state.redirect);
      return <Redirect to={{ pathname: this.state.redirect }} />;
    }

    return (
      <div class="login-page">
        <div class="form">
          <h1>LOGIN</h1>
          <form class="login-form" onSubmit={this.handleSubmit}>
            <input
              type="text"
              className="form-control"
              id="user"
              placeholder="username"
              required
              value="aluno20182"
            />
            <input
              type="password"
              className="form-control"
              id="pass"
              placeholder="password"
              required
              value="a10ac48e"
            />
            <button type="submit">login</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
