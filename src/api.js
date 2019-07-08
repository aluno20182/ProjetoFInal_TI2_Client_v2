export const apiBase = "/";

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

 export async function addComment(postID, comment) {
  let comentario = {
    postId: postID,
    text: comment
  };

  let resposta = await fetch(apiBase + "api/comments", {
    method: "POST",
    credentials: 'include',
    headers: {
      // vou enviar json
      "Content-Type": "application/json",
      // quero json
      Accept: "application/json"
    },
    body: JSON.stringify(comentario)
  });

  if (resposta.ok) {
    let novoComentario = await resposta.json();
    getComments(novoComentario.post.id);
    return novoComentario;
  } else {
    let erro = await resposta.json();

    throw erro;
  }
}

