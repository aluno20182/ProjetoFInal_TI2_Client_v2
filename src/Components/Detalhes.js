import React from "react";

export class Detalhes extends React.Component {
  render() {
    return (
      <div className="detailBox">
        <table>
          <tr>
            <td rowspan="2" colspan="2">
              <img
                alt="1"
                onClick={() => this.props.return()}
                src={this.props.imgUrl}
              />
              <h3>Tipo: {this.props.tipo}</h3>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}
