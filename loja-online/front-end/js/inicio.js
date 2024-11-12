function filterItems() {
    // Obtém o valor da barra de pesquisa em minúsculas
    const barra_pesquisa = document.getElementById('barra-pesquisa').value.toLowerCase();

    // Seleciona todos os itens
    const produtos = document.querySelectorAll('.item');

    // Filtra os itens
    produtos.forEach(item => {
        const nome_produto = item.getAttribute('data-nome').toLowerCase();

        // Exibe ou oculta o produto conforme a busca
        if (nome_produto.includes(barra_pesquisa)) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
}