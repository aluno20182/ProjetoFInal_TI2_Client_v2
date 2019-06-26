import React from "react";

export class Moldura extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="moldura">
        <div className="container">
          {/*<h3 class="tipo">Tipo: {this.props.tipo}</h3>*/}
          <img
            className="image"
            alt={this.props.tipo}
            src={this.props.imgUrl}
            onClick={() => this.props.show(this.props.postId)}
          />
          <div className="overlay">
            <p>🖍 {this.props.autor} Ricardo</p>
            <p>❤ {this.props.likes}</p>
            <div>{this.props.Comments} </div>
          </div>
        </div>
      </div>
    );
  }
}
