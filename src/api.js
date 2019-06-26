import React from "react";
import ReactDOM from "react-dom";

import "styles.css";

let apiBase = "https://ipt-ti2-iptgram.azurewebsites.net";

class App extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        posts: [],
        isLoading: true
      };
    }
    async componentDidMount() {
        try {
          let postsFromApiResponse = await fetch(apiBase + "/api/posts", {
            headers: {
              Accept: "application/json"
            }
          });
    
          if (postsFromApiResponse.ok) {
            let postsFromApi = await postsFromApiResponse.json();
    
            console.log(postsFromApi);
    
            this.setState({
              posts: postsFromApi,
              isLoading: false
            });
          } else {
            let text = await postsFromApiResponse.text();
    
            throw new Error(text);
          }
        } catch (e) {
          console.error("Erro ao obter os posts", e);
        }
      }
    
      render() {
        let posts = this.state.posts;
    
        let aux = [];
    
        for (let post of posts) {
          aux.push(
            <div key={post.id}>
              <img
                src={apiBase + "/api/posts/" + post.id + "/image"}
                alt={post.caption}
              />
              <p>{post.caption}</p>
            </div>
          );
        }
    
        return <div>{aux}</div>;
      }
    }
    
    const rootElement = document.getElementById("root");
    ReactDOM.render(<App />, rootElement);