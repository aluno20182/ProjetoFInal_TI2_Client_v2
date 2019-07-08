import React from "react";
import { getComments, addComment, addLike } from "../api"

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
    this.setState({ comments: commentsFromApi });
  }

  async handleSubmit(evt) {
    evt.preventDefault();

    var novoComentario = await this.handleNewComment(this.state.newCommentText);
    console.log(novoComentario);
    this.setState({ newCommentText: "" });

  }

  async handleNewComment(newCommentText) {
    try {
      let novoComentario = await addComment(this.props.postId, newCommentText);

      this.setState({
        // Criar um novo array a partir do anterior
        // (...), e adicionar a nova tarefa
        // a esse novo array.
        comments: [...this.state.comments, novoComentario]
      });
    } catch (e) {
      console.error("Erro ao inserir", e);
    }
  }


  handleNewCommentTextChange(evt) {
    this.setState({ newCommentText: evt.target.value });
  }

  async handleLike(newLike){
    try {
      let novoLike = await addLike(this.props.postId, newLike);

      this.setState({
        likes:[...this.state.likes, novoLike]
      });
    } catch(e){
      console.error("Erro ao inserir", e );
    }
  }
  handleNewLikeChange(evt) {
    this.setState({ newLike: evt.target.value });
  }

  render() {
    var comentarios=[];
    if(this.state.comments.length > 0) comentarios= this.state.comments.map(function(comentario) { 
      return <p className="comentarios">{comentario.user.name} ({comentario.postedAt.slice(0, 10)}) : {comentario.text}</p>;
    })
    
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
              </button> <h3 className="nLikes">Likes: {this.props.likes}</h3>
            </div>

            </div>
            <form onSubmit={evt => this.handleSubmit(evt)}>
                <div className="div4">
                  <textarea
                    className="commentBox"
                    type="text"
                    value={this.state.newCommentText}
                    onChange={evt => this.handleNewCommentTextChange(evt)}
                    required
                  />
                  <button type="submit" className="MyButtonC" onClick={evt => this.handleNewLikeChange(evt)}>
                    <span role="img" aria-label="Adicionar">
                      ▶
                    </span>
                  </button>
                </div>
              </form>
              <div>
                <h3 className="tituloComment">Comentários: {comentarios} </h3>
              </div>
          </div>
        </div>
    );
  }
} export default Detalhes;
