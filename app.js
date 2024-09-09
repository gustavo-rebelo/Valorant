function pesquisar() {
    // Busca os dados a serem exibidos nos resultados da pesquisa.

    // Obtém a seção HTML onde os resultados serão renderizados.
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    //se o campoPEsquisa for uma String sem nada
    if (campoPesquisa == "") {
        section.innerHTML = "<p>Agente não encontrado.</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()


    // Inicializa uma string vazia para armazenar os resultados formatados.
    let resultados = "";
    let titulo = "";
    let descricao = "";

    // Itera sobre cada dado da lista de resultados.
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase();
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
            // Cria uma div para cada resultado, formatando o título, descrição e link.
            resultados += `
            <div class="item-resultado">
                <h2>${dado.titulo}</h2>
                <p class="funcao-agente">${dado.funcao}</p>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank" class="mais-info">Mais informações</a>
            </div>
        `;
        }


    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado.</p>"
    }

    // Atribui a string com os resultados formatados ao conteúdo da seção HTML.
    section.innerHTML = resultados;
}


