import React from "react";

export class Moldura extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div class="moldura">
        {/*<h3 class="tipo">Tipo: {this.props.tipo}</h3>*/}
        <img
          class="image"
          alt={this.props.tipo}
          src={this.props.imgUrl}
          onClick={() => this.props.show(this.props.postId)}
        />
      </div>
    );
  }
}
