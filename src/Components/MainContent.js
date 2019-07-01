import React from "react";

import { Moldura } from "./Moldura.js";

import { Detalhes } from "./Detalhes.js";
import { apiBase } from "../api";

export class MainContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allPosts: true,
      idPost: 0
    };
  }
  render() {
    console.log("Body");
    console.log(this.state);
    if (this.props.filter === "" && this.state.allPosts) {
      return <div className="body MainContent">{this.postPosts()}</div>;
    } else if (this.state.allPosts) {
      return (
        <div className="body MainContent">
          {" "}
          {this.postTipo(this.props.filter)}{" "}
        </div>
      );
    } else {
      return <div className="body">{this.postDetail(this.state.idPost)}</div>;
    }
  }

  showPost = id => {
    this.setState({
      allPosts: false,
      idPost: id
    });
  };

  showPosts = () => {
    this.setState({
      allPosts: true,
      idPost: 0
    });
  };

  //função para ir buscar os valores ao ficheiro JSON
  //cria um novo array de objectos <Moldura/>
  postPosts = () => {
    console.log(this.props.posts);
    const postComponent = this.props.posts.map(post => (
      <Moldura
      post={this.state.post}
        key={post.id}
        postId={post.id}
        author={post.user.name}
        imgUrl={apiBase + "api/posts/" + post.id + "/image"}
        likes={post.likes}
        show={id => this.showPost(id)}
      />
    ));
    return postComponent;
  };

  //função que vai buscar apenas aqueles selecionados
  postTipo = filter => {
    console.log(this.props.posts);
    const postTipoComponent = [];
    for (let i = 0; i < this.props.posts.length; i++) {
      if (this.props.posts[i].tipo === filter) {
        postTipoComponent.push(
          <Moldura
            key={this.props.posts[i].id}
            postId={this.props.posts[i].id}
            tipo={this.props.posts[i].tipo}
            likes={this.props.posts[i].likes}
            author={this.props.posts[i].user.name}
            imgUrl={apiBase + "api/posts/" + this.props.posts[i].id + "/image"}
            show={id => this.showPost(id)}
          />
        );
      }
    }
    return postTipoComponent;
  };

  //função que cria uma view para cada um dos posts depois de clickada
  postDetail = id => {
    const postDetalhesPost = [];
    for (let i = 0; i < this.props.posts.length; i++) {
      if (this.props.posts[i].id === id) {
        postDetalhesPost.push(
          <Detalhes
            return={() => this.showPosts()}
            key={this.props.posts[i].id}
            postId={this.props.posts[i].id}
            tipo={this.props.posts[i].caption}
            author={this.props.posts[i].user.name}
            likes={this.props.posts[i].likes}
            imgUrl={apiBase + "api/posts/" + this.props.posts[i].id + "/image"}
          />
        );
      }
    }
    return postDetalhesPost;
  };
}
export default MainContent;
