import React from "react";

export class Detalhes extends React.Component {
  render() {
    return (
      <div class="detalhes">
        <h3 class="tipo">Tipo: {this.props.tipo}</h3>
        <img
          alt={this.props.tipo}
          onClick={() => this.props.return()}
          src={this.props.imgUrl}
        />
      </div>
    );
  }
}
