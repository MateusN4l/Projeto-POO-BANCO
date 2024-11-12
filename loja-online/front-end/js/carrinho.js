// script.js

let cart = []; // Array para armazenar os itens do carrinho

// Função para adicionar um item ao carrinho
function addToCart(productId) {
    const productElement = document.querySelector(`.produto[data-id="${productId}"]`);
    const nome = productElement.getAttribute("data-nome");
    const preco = parseFloat(productElement.getAttribute("data-preco"));

    const itemExistente = cart.find(item => item.id === productId);

    if (itemExistente) {
        itemExistente.quantidade += 1;
    } else {
        cart.push({ id: productId, nome: nome, preco: preco, quantidade: 1 });
    }

    atualizarCarrinho();
}

// Função para atualizar o carrinho
function atualizarCarrinho() {
    const cartItems = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    const cartTotal = document.getElementById("cart-total");

    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        total += item.preco * item.quantidade;

        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
            <h4>${item.nome}</h4>
            <p>Preço: R$ ${item.preco}</p>
            <p>Quantidade: ${item.quantidade}</p>
            <button onclick="removerDoCarrinho(${item.id})">Remover</button>
        `;
        cartItems.appendChild(cartItem);
    });

    cartCount.innerText = cart.reduce((acc, item) => acc + item.quantidade, 0);
    cartTotal.innerText = total.toFixed(2);
}

// Função para remover um item do carrinho
function removerDoCarrinho(productId) {
    const itemIndex = cart.findIndex(item => item.id === productId);

    if (itemIndex > -1) {
        cart.splice(itemIndex, 1);
    }

    atualizarCarrinho();
}

// Função para exibir/ocultar o carrinho
function toggleCart() {
    const carrinho = document.getElementById("carrinho");
    carrinho.classList.toggle("hidden");
}

// Função para finalizar a compra
function finalizarCompra() {
    if (cart.length === 0) {
        alert("O carrinho está vazio.");
    } else {
        alert("Compra finalizada com sucesso!");
        cart = [];
        atualizarCarrinho();
    }
}
