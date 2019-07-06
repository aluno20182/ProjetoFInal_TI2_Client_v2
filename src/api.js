export const apiBase = "https://ipt-ti2-iptgram.azurewebsites.net/";

export function getPosts(query) {
  let termosPesquisa = new URLSearchParams();

  if (query) {
    termosPesquisa.set("query", query);
  }

  return fetch(apiBase + "api/posts?" + termosPesquisa.toString(), {
    method: "GET"
  }).then(resposta => {
    console.warn(resposta);
    if (resposta.status === 200) {
      return resposta.json();
    } else {
      return Promise.reject(resposta);
    }
  });
}

export function getComments(id){

  return fetch(apiBase + "api/posts/"+id+"/comments", {
    method: "GET"
  }).then(resposta => {
    console.warn(resposta);
    if (resposta.status === 200) {
      return resposta.json();
    } else {
      return Promise.reject(resposta);
    } 
   });

 }


