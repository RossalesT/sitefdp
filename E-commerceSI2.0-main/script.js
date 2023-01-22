let imgFoto       = document.querySelector('#foto')
let nomeProduto          = document.querySelector('#nome-produto')
let precoProduto          = document.querySelector('#preco-produto')
let avistaProduto          = document.querySelector('#avista')
let parceladoProduto          = document.querySelector('#parcelado')
let botaoLink = document.querySelector('#botao-link')



let sectionConteudos = document.querySelector('.itens-vendidos')

const url = 'produtos.json'

function pegarDados(i) {
  fetch(url)
    .then( response => response.json() )
    .then( dados => {
        if(dados.erro) {
            console.log("Erro ao acessar o JSON")
            return
        }

        let qtdProdutos = (dados.produtos.length)
        console.log("Quant. de Lutadores " + qtdProdutos)
        // passe o valor de i no parametro
        atribuirDados2(dados, i)
    })
} 


let imgsFoto = document.getElementsByClassName('foto')
let nomesProdutos         = document.getElementsByClassName('nome-produto')
let precosProdutos = document.getElementsByClassName('preco-produto')
let avistaProdutos         = document.getElementsByClassName('avista')
let parceladoProdutos         = document.getElementsByClassName('parcelado')
let botaoLinks = document.getElementsByClassName('botao-link')
let espacoProduto = document.getElementsByClassName('espaco')


function atribuirDados2(dados, i) {
    imgsFoto[i].setAttribute('src', "produtos/"+dados.produtos[i].foto)
    nomesProdutos[i].textContent         = dados.produtos[i].nome
    precosProdutos[i].textContent = "R$ " + dados.produtos[i].preco
    avistaProdutos[i].textContent         = dados.produtos[i].avista
    parceladoProdutos[i].textContent          = dados.produtos[i].parcelado
    botaoLinks[i].setAttribute('href',"paginas/" + dados.produtos[i].link)
    botaoLinks[i].textContent = 'Comprar'
}

    
function desenharCarta(id) {

    let carta = document.createElement("div")
    carta.setAttribute('class', 'item')
    sectionConteudos.appendChild(carta)


    let imagem = document.createElement("img")
    carta.appendChild(imagem)
    imagem.setAttribute('class', 'foto')
    imagem.setAttribute('src', 'produtos/fone.jpg')

    let nome_produto = document.createElement("h2")
    nome_produto.setAttribute('class', 'nome-produto')
    carta.appendChild(nome_produto)

    let espaco_produto = document.createElement("br")
    espaco_produto.setAttribute('class', 'espaco')
    carta.appendChild(espaco_produto)


    let preco_produto = document.createElement("h3")
    preco_produto.setAttribute('class', 'preco-produto')
    carta.appendChild(preco_produto)

    let avista_produto = document.createElement("h3")
    avista_produto.setAttribute('class', 'avista')
    carta.appendChild(avista_produto)

    let parcelado_produto = document.createElement("h3")
    parcelado_produto.setAttribute('class', 'parcelado')
    carta.appendChild(parcelado_produto)
    
    let link_compra = document.createElement("a")
    link_compra.setAttribute('class', 'botao-link')
    carta.appendChild(link_compra)



    pegarDados(id)
}

if(localStorage.getItem('produtos') == null){
    localStorage.setItem('produtos', JSON.stringify([]));
  }
  



  
pegarDados(0)
desenharCarta(1)
desenharCarta(2)
desenharCarta(3)


