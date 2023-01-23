var carrinho = JSON.parse(localStorage.getItem('produtos'));

const handleRemoveItem = (id) => { 
    var index = carrinho.findIndex(elemento => elemento == id);
    carrinho.splice(index, 1);
    localStorage.setItem('produtos', JSON.stringify(carrinho));
    location.reload();
}