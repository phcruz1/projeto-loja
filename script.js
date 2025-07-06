// Aguarda o DOM ser completamente carregado para executar o script
document.addEventListener('DOMContentLoaded', function() {

    // --- CÓDIGO PARA GERAR PRODUTOS DINAMICAMENTE ---

    // 1. Dados dos produtos
    const produtos = [
        { nome: "Sprigatito", preco: "50,00", imagem: "images/sprigatito.png" },
        { nome: "Fuecoco", preco: "75,00", imagem: "images/fuecoco.png" },
        { nome: "Mimikyu EX", preco: "30,00", imagem: "images/mimikyu.png" },
        { nome: "Arcanine", preco: "250,00", imagem: "images/arcanine.png" },
        { nome: "Dondozo", preco: "120,00", imagem: "images/dondozo.png" },
        { nome: "Spidops", preco: "95,00", imagem: "images/spidops.png" },
        { nome: "Revaroom", preco: "88,00", imagem: "images/revaroom.png" },
        { nome: "Quaxly", preco: "299,90", imagem: "images/quaxly.png" },
        { nome: "Quaquaval", preco: "110,00", imagem: "images/quaquaval.png" },
        { nome: "Pawmot", preco: "150,00", imagem: "images/pawmot.png" },
        { nome: "Espathra", preco: "180,00", imagem: "images/espathra.png" },
        { nome: "Hawlucha", preco: "45,00", imagem: "images/hawlucha.png" }
    ];

    // 2. Selecionar o contêiner onde os produtos serão exibidos
    const listaDeProdutos = document.getElementById('lista-de-produtos');

    
    if (listaDeProdutos) { // Verifica se o elemento #lista-de-produtos existe na página atual
        // 3. Loop para criar e adicionar cada produto
        produtos.forEach(produto => {
            // Cria a div principal do card
            const cardProduto = document.createElement('div');
            cardProduto.classList.add('card-produto');

            // Cria e configura a imagem
            const img = document.createElement('img');
            img.src = produto.imagem;
            img.alt = `Carta ${produto.nome}`;

            // Cria o corpo do card
            const cardCorpo = document.createElement('div');
            cardCorpo.classList.add('card-corpo');

            const h3 = document.createElement('h3');
            h3.textContent = produto.nome;
            const pPreco = document.createElement('p');
            pPreco.textContent = `R$ ${produto.preco}`;

            cardCorpo.appendChild(h3);
            cardCorpo.appendChild(pPreco);

            
            const seletorComprar = document.createElement('div');
            seletorComprar.classList.add('seletor-comprar');

            const seletorQuantidade = document.createElement('div');
            seletorQuantidade.classList.add('seletor-quantidade');

            const btnMenos = document.createElement('button');
            btnMenos.classList.add('btn-qtd');
            btnMenos.textContent = '-';

            const displayQtd = document.createElement('span');
            displayQtd.classList.add('display-qtd');
            displayQtd.textContent = '1'; // Valor inicial da quantidade

            const btnMais = document.createElement('button');
            btnMais.classList.add('btn-qtd');
            btnMais.textContent = '+';

            btnMenos.addEventListener('click', () => {
                let quantidadeAtual = parseInt(displayQtd.textContent);
                if (quantidadeAtual > 1) { 
                    quantidadeAtual--;
                    displayQtd.textContent = quantidadeAtual;
                }
            });

            btnMais.addEventListener('click', () => {
                let quantidadeAtual = parseInt(displayQtd.textContent);
                quantidadeAtual++;
                displayQtd.textContent = quantidadeAtual;
            });
           

            seletorQuantidade.appendChild(btnMenos);
            seletorQuantidade.appendChild(displayQtd);
            seletorQuantidade.appendChild(btnMais);

            const btnComprar = document.createElement('button');
            btnComprar.classList.add('btn-comprar');
            btnComprar.textContent = 'COMPRAR';

            seletorComprar.appendChild(seletorQuantidade);
            seletorComprar.appendChild(btnComprar);

            // Monta o card completo
            cardProduto.appendChild(img);
            cardProduto.appendChild(cardCorpo);
            cardProduto.appendChild(seletorComprar);

            // Adiciona o card ao contêiner principal na página
            listaDeProdutos.appendChild(cardProduto);
        });
    }
    // --- FIM DO CÓDIGO DE GERAÇÃO DE PRODUTOS ---

    // --- Validação do Formulário de Contato ---
    const formContato = document.getElementById('form-contato');
    if (formContato) {
        formContato.addEventListener('submit', function(event) {
            event.preventDefault(); // Previne o envio padrão

            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensagem = document.getElementById('mensagem').value.trim();
            const feedback = document.getElementById('feedback-msg');

            if (nome === '' || email === '' || mensagem === '') {
                feedback.textContent = 'Erro: Todos os campos são obrigatórios!';
                feedback.style.color = 'red';
            } else {
                // Simples verificação de e-mail
                if (!email.includes('@')) {
                    feedback.textContent = 'Erro: Por favor, insira um e-mail válido!';
                    feedback.style.color = 'red';
                } else {
                    feedback.textContent = 'Mensagem enviada com sucesso! Obrigado, treinador!';
                    feedback.style.color = 'green';
                    formContato.reset(); // Limpa o formulário após o envio
                }
            }
        });
    }
});