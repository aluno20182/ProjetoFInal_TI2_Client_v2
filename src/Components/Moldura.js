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
          <img
            className="image"
            alt={this.props.author}
            src={this.props.imgUrl}
            onClick={() => this.props.show(this.props.postId)}
          />
          <div className="overlay">
            <p>🖍 {this.props.author}</p>
            <p>❤ {this.props.likes}</p>
            <p>
              🗓{" "}
              {this.props.postedAt.substring(0, this.props.postedAt.indexOf("T"))}
            </p>
            <p>💻 {this.props.comments}</p>
          </div>
        </div>
      </div>
    );
  }
} export default Moldura;
