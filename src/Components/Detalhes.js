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
        <div class="div5">
          <img
            alt={this.props.tipo}
            onClick={() => this.props.return()}
            src={this.props.imgUrl}
            class="imageDetail"
          />
          <div class="div1">
            <div class="div2">
              <button type="buton" class="MyButton">
                👍
              </button>
              <button type="buton" class="MyButton">
                🤲
              </button>
            </div>
            <div class="div3">
              <form onSubmit={evt => this.handleSubmit(evt)}>
                <div class="div4">
                  <input
                    type="text"
                    value={this.state.newComment}
                    onChange={evt => this.handleNewCommentTextChange(evt)}
                    required
                  />
                  <button type="submit" onClick="">
                    <span role="img" aria-label="Adicionar">
                      Comentar
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
          
          </div>
        </div>
    );
  }
}
