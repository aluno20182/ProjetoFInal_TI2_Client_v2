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
      <div className="detalhes">
        <h3 className="tipo">Caption: {this.props.tipo}</h3>
        <h3 className="tipo">Autor: {this.props.author}</h3>
        <div className="div5">
          <img
            alt={this.props.tipo}
            onClick={() => this.props.return()}
            src={this.props.imgUrl}
            className="imageDetail"
          />
          <div className="div1">
            <div className="div2">
              <button type="button" className="MyButton">
                ❤
              </button>{" "}
              <h3 className="nLikes">Numero de likes: {this.props.likes}</h3>
              <button type="button" className="MyButton">
                🤲
              </button>
              <h3 className="nLikes"> Partilha </h3>
            </div>
            <div className="div3">
              <form onSubmit={evt => this.handleSubmit(evt)}>
                <div className="div4">
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
