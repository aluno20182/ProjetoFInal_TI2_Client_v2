import React from "react";
import { Redirect } from "react-router";
import "../Login.css";

export const apiBase = "https://ipt-ti2-iptgram.azurewebsites.net/";

export class Login extends React.Component {
  state = {
    redirect: null
  };

  /**
   * Submete os dados da utilizador para o backend
   */
  handleSubmit = async e => {
    e.preventDefault();

    //Objeto Login
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
      case 200:
        //Armazenar o token
        // sessionStorage.setItem("token", response.headers.get("x-auth-token"));
        //Redirect
        this.setState({ redirect: "/posts" });
        break;
      case 401:
        this.setState({ alertisNotVisible: false });
        console.log("Errado");
        break;
      default:
        console.log("ah shit, here we go again");
        break;
    }
  };

  render() {
    console.log(this.props);

    if (this.state.redirect) {
      console.log(this.state.redirect);
      return <Redirect to={{ pathname: this.state.redirect }} />;
    }

    return (
      <div class="login-page">
        <div class="form">
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
