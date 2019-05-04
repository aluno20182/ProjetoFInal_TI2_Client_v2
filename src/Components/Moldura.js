import React from "react";

export class Moldura extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div class="container">
        <table>
          <tr>
            <td colSpan="2">
              <img
                alt={this.props.tipo}
                src={this.props.imgUrl}
                class="image"
                //onClick={() => this.props.show(this.props.postId)}
              />
              <div class="middle">
                <div class="text">John Doe</div>
              </div>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}
