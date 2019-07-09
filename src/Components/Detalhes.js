import React from "react";
import { getComments, addComment, addLike } from "../api"

export class Detalhes extends React.Component {
  constructor(props) {
    super(props);

    /**
     * newCommentText - é o texto do novo comentário que se inicia como string vazia
     * comments - um array de comentarios onde será adicionado o novo comentario
     * newLike (não implementado a 100% no projeto mas representa a entrada de um novo like na api)
     */
    this.state = {
      newCommentText: "",
      comments: [],
      newLike: 0
    };
  }


  // o commentsFromApi vai esperar através do uso do await que os dados dos comentarios sejam carregados
  //ou seja, apenas tem dados quando vier do fetch
  //o setState guarda os dados do comentario ou seja atualiza a variavel do state
  async componentDidMount(){
    let commentsFromApi = await getComments(this.props.postId);
    this.setState({ comments: commentsFromApi });
  }


  //Submete os dados do comentario
  async handleSubmit(evt) {
    evt.preventDefault();

    var novoComentario = await this.handleNewComment(this.state.newCommentText);
    console.log(novoComentario);
    this.setState({ newCommentText: "" });

  }

  //a variavel novo comentario vai esperar que o postId e o newCommentText sejam carregados
  async handleNewComment(newCommentText) {
    try {
      let novoComentario = await addComment(this.props.postId, newCommentText);

      this.setState({
        //(...) significa que vai "duplicar" o array e adicionar o "novoComentario" ao mesmo
        comments: [...this.state.comments, novoComentario]
      });
    } catch (e) {
      console.error("Erro ao inserir", e);
    }
  }

    //o setState guarda os dados do novo comentario ou seja atualiza a variavel do state com o newCommentText
  handleNewCommentTextChange(evt) {
    this.setState({ newCommentText: evt.target.value });
  }

    //Submete os dados do like
  handleSubmitLike(evt) {
    evt.preventDefault();

    this.props.onNewLike(this.state.newLike);

    this.setState({ newLike: "" });
  }
    //a variavel novo comentario vai esperar que o postId e o newLike sejam carregados
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
  handleNewLike = (evt) =>{
    let aux = evt.target.value + 1; this.setState({newLike: aux});
    console.log(this.state.newLike)
  }

  /**
   * Render:
   * -apresenta os detalhes de um post 
   * -apresenta os comentários
   * 
   */
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
              <button type="button" className="MyButton" onClick={evt => this.handleNewLike(evt)}>
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
                  <button type="submit" className="MyButtonC">
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
