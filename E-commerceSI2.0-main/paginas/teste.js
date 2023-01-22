import myJson from './produtos.json' assert {type: 'json'};



const botaoCompra = document.querySelectorAll("#add-cart")
var valor = document.getElementById("add-cart").value;
var carrinho = JSON.parse(localStorage.getItem('produtos'));


for (let i = 0; i < botaoCompra.length; i++) {
    botaoCompra[i].addEventListener("click", function() {
        myJson.produtos.map((elemento) => {
            if (valor == elemento.id){
                carrinho.push(elemento.id);
                localStorage.setItem('produtos', JSON.stringify(carrinho));
                
                
            }
        })  
    });
}




