let valorTotal = 0;
limpar();

function mostrarErro(mensagem) {
    let erro = document.getElementById('mensagem-erro');
    erro.textContent = mensagem;
    erro.style.display = 'block';
}

function limparErro() {
    let erro = document.getElementById('mensagem-erro');
    erro.textContent = '';
    erro.style.display = 'none';
}

function adicionar() {
    let produto = document.getElementById('produto').value;
    let quantidadeInput = document.getElementById('quantidade');
    let quantidade = parseInt(quantidadeInput.value);

    limparErro();

    if (!produto || !produto.includes('R$')) {
        mostrarErro('Selecione um produto válido.');
        return;
    }

    if (isNaN(quantidade) || quantidade <= 0) {
        mostrarErro('Informe uma quantidade válida maior que zero.');
        return;
    }

    let nomeProduto = produto.split('-')[0];
    let valorUnitario = parseFloat(produto.split('R$')[1]);

    let preco = quantidade * valorUnitario;

    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML += `
        <section class="carrinho__produtos__produto">
            <span class="texto-azul">${quantidade}x</span> 
            ${nomeProduto} 
            <span class="texto-azul">R$ ${preco.toFixed(2)}</span>
        </section>
    `;

    valorTotal += preco;

    document.getElementById('valor-total').textContent = `R$ ${valorTotal.toFixed(2)}`;
    quantidadeInput.value = 0;
}

function limpar() {
    document.getElementById('quantidade').value = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = 'R$ 0,00';
    valorTotal = 0;
    limparErro();
}
