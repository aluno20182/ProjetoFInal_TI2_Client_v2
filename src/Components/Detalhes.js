import React from "react";

export class Detalhes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newCommentText: ""
    };
  }

  handleSubmit(evt) {
    evt.preventDefault();

    this.props.onNewComment(this.state.newCommentText);

    this.setState({ newCommentText: "" });
  }

  handleNewCommentTextChange(evt) {
    this.setState({ newCommentText: evt.target.value });
  }
  render() {
    return (
      <div class="detalhes">
        <h3 class="tipo">Tipo: {this.props.tipo}</h3>
        <img
          alt={this.props.tipo}
          onClick={() => this.props.return()}
          src={this.props.imgUrl}
          class="imageDetail"
        />
        <div style={{ float: "left" }}>
          <button type="buton" class="MyButton">
            👍
          </button>
          <button type="buton" class="MyButton">
            🤲
          </button>
        </div>
        <div>
          <form onSubmit={evt => this.handleSubmit(evt)}>
            <input
              type="text"
              value={this.state.newComment}
              onChange={evt => this.handleNewCommentTextChange(evt)}
              required
            />
            <button type="submit">
              <span role="img" aria-label="Adicionar">
                Comentar
              </span>
            </button>
          </form>
        </div>
      </div>
    );
  }
}
