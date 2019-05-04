import React from "react";
import { Moldura } from "./Moldura.js";
import posts from "./Posts.js";

export class MainContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allPosts: true,
      idPost: 0
    };
  }
  render() {
    return (
      <main>
        <div>
          <div class="custom-select">
            <select>
              <option>Post Por Pagina:</option>
              <option>5</option>
              <option>10</option>
              <option>15</option>
              <option>20</option>
              <option>25</option>
              <option>40</option>
            </select>
            {this.postPosts()}
          </div>
          <br />
          <Moldura />
        </div>
      </main>
    );
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
  //cria um novo array de objectos <Post/>
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
}
