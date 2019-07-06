import React from "react";
import { getComments} from "../api"

export class Detalhes extends React.Component {
  constructor(props) {
    super(props);
    

    this.state = {
      newCommentText: "",
      allComments: true,
      idComment:0,
      comments: []
    };
  }



  async componentDidMount(){
    console.log(this.props.postId);
    let commentsFromApi = await getComments(this.props.postId);
    this.setState({ comments: commentsFromApi })
    console.log(commentsFromApi);
    console.log("Estou aqui");
    console.log(this.state.comments);

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
    var comentarios=[];
    if(this.state.comments.length > 0) comentarios= this.state.comments.map(function(comentario) { 
      return <p className="comentarios">{comentario.user.name} : {comentario.text}</p>;
     // return <p>{comentario.text}</p>;
     // return <p>{comentario.postedAt}</p>;
    })
    return (
      <div className="detalhes">
        <h3 className="tipo">Caption: {this.props.tipo}</h3>
        <h3 className="tipo">Autor : {this.props.author}</h3>
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
              </button> <h3 className="nLikes">Likes: {this.props.likes}</h3>
              <button type="button" className="MyButton">
              🤲
              </button>
              <h3 className="nLikes" > Partilha </h3>
            </div>

            </div>
            <form onSubmit={evt => this.handleSubmit(evt)}>
                <div className="div4">
                  <textarea
                    className="commentBox"
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
              <div>
                <h3 className="tituloComment">Comentários: <p>{comentarios}</p> </h3>
              </div>
          </div>
        </div>
    );
  }
}
