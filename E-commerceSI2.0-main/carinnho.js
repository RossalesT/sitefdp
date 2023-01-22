import myJson from './produtos.json' assert {type: 'json'};

var carrinho = JSON.parse(localStorage.getItem('produtos'));

var produtoSelecionado = []

carrinho.forEach(idProduto => {
    produtoSelecionado.push(myJson.produtos.find(elemento => elemento.id == idProduto)); 
});
document.querySelector('.container-carrinho').innerHTML =
    produtoSelecionado.map( produto => `
        <div class="item-carrinho-1">
            <img src="../produtos/${produto.foto}">
            <span class="nome-produto>${produto.nome} </span>
            <div class="buton-add">
                <button id="subtract">-</button>
                <input type="number" value="1" class="quant">
                <button id="add">+</button>
            </div>
            <hr>
            <span class="preco-produto">R$ ${produto.preco}</span>
            <span></span>
            <button class="remover" onclick="handleRemoveItem(${produto.id})">Remover Item</button>
        </div>       
    
        
`).join('');

var subtotal = 0;

const handleSubtotal = () => {
    produtoSelecionado.map(elemento => subtotal += elemento.preco);
    return subtotal
};

console.log(handleSubtotal())

// document.querySelector('#subtotal').innerHTML = `${handleSubtotal()}`;