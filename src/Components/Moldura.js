import React from "react";

export class Moldura extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div class="moldura">
        <div class="container">
          {/*<h3 class="tipo">Tipo: {this.props.tipo}</h3>*/}
          <img
            class="image"
            alt={this.props.user}
            src={this.props.imgUrl}
            onClick={() => this.props.show(this.props.postId)}
          />
          <div class="overlay">
            <p>🖍 {this.props.UserId}</p>
            <p>❤ {this.props.Likes}</p>
            <div>{this.props.Comments} </div>
          </div>
        </div>
      </div>
    );
  }
}
