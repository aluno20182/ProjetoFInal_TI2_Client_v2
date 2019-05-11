import React from "react";

export class Moldura extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div class="row">
        <div class="column">
          <h3>{this.props.author}</h3>
          <img
            alt={this.props.tipo}
            src={this.props.imgUrl}
            class="image"
            onClick={() => this.props.show(this.props.postId)}
          />
          {/*<div class="middle">
            <div type="button">John Doe</div>
          </div>*/}
        </div>
      </div>
    );
  }
}
