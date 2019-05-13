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
          <img
            class="image"
            alt={this.props.tipo}
            src={this.props.imgUrl}
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
