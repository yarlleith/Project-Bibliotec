const livros = document.querySelectorAll(".livro");

const botaoAnterior = document.getElementById("pagina-anterior");
const botaoProxima = document.getElementById("proxima-pagina");
const numeroPagina = document.querySelector(".pagina-atual");
const quantidadeLivros = document.querySelector(".quantidade-livros");

//Configuração da páginação

//Define quantos livros serão mostrados em cada página
const livrosPorPagina = 4;

// Guarda a página que está sendo exibida, começando na página 1
let paginaAtual = 1;
 
//Calculando o total de páginas

// Divide a quantdade total de livros pela quantidade de livros por página 
// Math.ceil() arredonda o resultado para cima

// Exemplo:
// 10 Livros / 4 por página = 2,5
// Math.ceil() = 2,5 arreondado para cima -> 3 páginas
const totalPaginas = Math.ceil(livros.length / livrosPorPagina);

// FUNÇÃO RESPONSÁVEL POR MOSTRAR A PÁGINA (ATUALIZAR OS ELEMENTOS)

function mostrarPagina() {

    // Descobre o índice do primeiro livro que deve aparecer

    // Página 1:
    // (1 - 1) * 4 = 0

    // Página 2:
    // (2 - 1) * 4 = 4

    // livros [1, 2, 3, 4, 5, 6, 7, 8]

    // Página 1 = [1, 2, 3, 4]

    const inicio = (paginaAtual - 1 ) * livrosPorPagina

    // Descobre até onde os livros devem ser exibidos

    //Página 1: inicio 0 + 4 
    // Página 2: 4 + 4 = 8
    const fim = inicio + livrosPorPagina

    //Percorre toda a lista de livros encontrados no HTML
    // "livro" representa o elemento atual
    // "indice" representa a posição desse livro na lista
    livros.forEach((livro, posicao) => {

        //Verifica se o indice/posicao do livro está dentro do intervalo da página atual.
        if(posicao >= inicio && posicao < fim) 
        {
            // Se estiver, mostra o livro
            livro.style.display = "grid";
        }
        else
        {
            //Se não estiver, esconde o livro
            livro.style.display = "none";
        }
    });

    //Atualiza no HTML o número da página atual
    numeroPagina.textContent = paginaAtual;

    // Inicialmente considerando o fim como a posição do último livro mostrado
    let ultimoLivro = fim;

    //Se o valor calculado ultrapassar a quantidade rela de livros, usamos a quantidade total.

    //Exemplo
    //Existem 10 livros - na última página "fim" poderia ter 12
    // Nesse caso, queremos mostrar 10 e não 12
    if(ultimoLivro > livros.length) {

        ultimoLivro = livros.length;

    }

    // Atualiza o texto que informa quantos livros que estao sendo mostrados
    quantidadeLivros.textContent = `Mostrando ${ultimoLivro} de ${livros.length} livros`;
}

// Evento de click no botão de próxima página 

botaoProxima.addEventListener("click", () => {

    if(paginaAtual < totalPaginas) {

        //Avança uma página
        // paginaAtual = paginaAtual + 1
        paginaAtual++

        //Atualiza os livros exibidos na tela
        mostrarPagina();
    }
})

// Evento de click no botão de página anterior

botaoAnterior.addEventListener("click", () => {
    if(paginaAtual > 1) {

        //Voltamos uma página atrás
        paginaAtual--;

        //Atualiza os livros exibidos na tela
        mostrarPagina();
    }
})

//Quando a página carregar, precisamos executar a função de mostrar página uma vez para esconde os livros que não pertencem a primeira página.
mostrarPagina()