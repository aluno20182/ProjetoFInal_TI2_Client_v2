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

/*export async function addTodo(description) {
  let tarefa = {
    description: description
  };

  let resposta = await fetch(apiBase + "/api/posts", {
    method: "POST",
    headers: {
      // vou enviar json
      "Content-Type": "application/json",
      // quero json
      Accept: "application/json"
    },
    body: JSON.stringify(tarefa)
  });

  if (resposta.ok) {
    let novaTarefa = await resposta.json();

    return novaTarefa;
  } else {
    let erro = await resposta.json();

    throw erro;
  }
}*/
