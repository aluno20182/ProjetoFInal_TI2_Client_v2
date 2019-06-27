import React from "react";

import "./styles.css";
import { Header } from "./Components/Header.js";
import { MainContent } from "./Components/MainContent.js";
import Footer from "./Components/Footer.js";
import { getPosts, apiBase } from "./api";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      isLoading: true
    };
    //função que é passada como prop para actualizar o estado do compoente pai
    this.search = this.search.bind(this);
  }

  async componentDidMount() {
    try {
      let postsFromApi = await getPosts();

      this.setState({
        posts: postsFromApi,
        isLoading: false
      });
    } catch (e) {
      console.error("Erro ao ler os posts", e);
    }
  }

  render() {
    let posts = this.state.posts;

    // let aux = [];

    // for (let post of posts) {
    //   aux.push(
    //     <div key={post.id}>
    //       <img
    //         src={apiBase + "api/posts/" + post.id + "/image"}
    //         alt={post.caption}
    //       />
    //       <p>{post.caption}</p>
    //     </div>
    //   );
    // }

    return (
      <div className="demo">
        <div className="content">
          <div id="large-header" className="large-header">
            <Header filter={this.search} />
            <div className="header">
              <h1 className="main-title">Tomblr</h1>
            </div>
            <br />
            <br />
            <MainContent posts={posts} filter={this.state.filter} />
            <br />
            <br />
            <div className="select-page">
              <a href="#pag1"> 1 </a>
              <a href="#pag2"> 2 </a>
              <a href="#pag3"> 3 </a>
              <a href="#pag4"> 4 </a>
              <a href="#pag5"> 5 </a>
            </div>
            <br />
            <br />
            <br />
            <br />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
  async search(searchTxt) {
    // let searchTxt = document.getElementById("searchBar").value;
    try {
      let postsFromApi = await getPosts(searchTxt);

      this.setState({
        posts: postsFromApi,
        isLoading: false
      });
    } catch (e) {
      console.error("Erro ao ler os posts", e);
    }
  }
}
