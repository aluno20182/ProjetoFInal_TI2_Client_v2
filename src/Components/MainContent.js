import React from "react";

import { Moldura } from "./Moldura.js";
import posts from "./Posts.js";
import { Detalhes } from "./Detalhes.js";

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
      return <div className="body">{this.postPosts()}</div>;
    } else if (this.state.allPosts) {
      return <div className="body"> {this.postTipo(this.props.filter)} </div>;
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
    const postComponent = posts.map(post => (
      <Moldura
        key={post.id}
        postId={post.id}
        author={post.author}
        imgUrl={post.imgUrl}
        show={id => this.showPost(id)}
      />
    ));
    return postComponent;
  };

  //função que vai buscar apenas aqueles selecionados
  postTipo = filter => {
    const postTipoComponent = [];
    for (let i = 0; i < posts.length; i++) {
      if (posts[i].tipo === filter) {
        postTipoComponent.push(
          <Moldura
            key={posts[i].id}
            postId={posts[i].id}
            tipo={posts[i].tipo}
            imgUrl={posts[i].imgUrl}
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
    for (let i = 0; i < posts.length; i++) {
      if (posts[i].id === id) {
        postDetalhesPost.push(
          <Detalhes
            return={() => this.showPosts()}
            key={posts[i].id}
            postId={posts[i].id}
            tipo={posts[i].tipo}
            imgUrl={posts[i].imgUrl}
          />
        );
      }
    }
    return postDetalhesPost;
  };
}
export default MainContent;
