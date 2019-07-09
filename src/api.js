
//apiBase declarada desta maneira pois no JSON foi adicionado um proxy
export const apiBase = "/";


//função que vai buscar os atributos de um post
export function getPosts(query) {
  let termosPesquisa = new URLSearchParams();

  if (query) {
    termosPesquisa.set("query", query);
  }
  //fetch faz o pedido de Get dos posts à api
  return fetch(apiBase + "api/posts?" + termosPesquisa.toString(), {
    method: "GET"
  }).then(resposta => {
    console.warn(resposta);
    //se for válido (200) retorna o json
    if (resposta.status === 200) {
      return resposta.json();
    } else {
      return Promise.reject(resposta);
    }
  });
}


export function getComments(id){
  //fetch que faz o pedido dos comentarios à api
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


//Adição de comentario
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

//Adicao de um novo like, (funcionalidade nao implementada no projeto)
export async function addLike(postId,currentlyLiking,likeCount) {

  let like = {
    postId: postId,
    currentlyLiking: currentlyLiking,
    likeCount: likeCount
  };

  let resposta = await fetch(apiBase + "api/posts/"+postId+"/like", null, {
    method: "POST",
    credentials: 'include',
    headers: {
      // vou enviar json
      "Content-Type": "application/json",
      // quero json
      Accept: "application/json"
    },
    body: JSON.stringify(like)
  });

  if (resposta.ok) {
    let novoLike = await resposta.json();
    return novoLike;
  } else {
    let erro = await resposta.json();

    throw erro;
  }
}

