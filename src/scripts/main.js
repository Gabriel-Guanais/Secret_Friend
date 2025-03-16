let nomes = [];

function adicionarNome() {
    const input = document.getElementById('name');
    const nome = input.value.trim();
    
    if (nome === '') {
        alert('Por favor, digite um nome!');
        return;
    }
    
    if (nomes.includes(nome)) {
        alert('Este nome já foi adicionado!');
        return;
    }
    
    nomes.push(nome);
    input.value = ''; 
    atualizarLista();
}

function atualizarLista() {
    const lista = document.getElementById('listaNomes');
    lista.innerHTML = '<h3>Participantes:</h3>';
    
    nomes.forEach((nome, index) => {
        const item = document.createElement('div');
        item.className = 'lista-item';
        item.innerHTML = `
            <span>${nome}</span>
            <button onclick="removerNome(${index})" class="input-button" style="padding: 5px 10px;">×</button>
        `;
        lista.appendChild(item);
    });
}

function removerNome(index) {
    nomes.splice(index, 1);
    atualizarLista();
}

function sortearNomes() {
    if (nomes.length < 2) {
        alert('Adicione pelo menos 2 nomes!');
        return;
    }
    
    const sorteadoIndex = Math.floor(Math.random() * nomes.length);
    const sorteado = nomes[sorteadoIndex];
    
    const lista = document.getElementById('listaNomes');
    lista.innerHTML = `<h3>Resultado do Sorteio:</h3><p>${sorteado}</p>`;
}

function sortearAmigoSecreto() {
    if (nomes.length < 2) {
        alert('Adicione pelo menos 2 nomes!');
        return;
    }

    const shuffled = [...nomes].sort(() => Math.random() - 0.5);
    const resultado = shuffled.map((nome, index) => {
        const amigoSecreto = shuffled[(index + 1) % shuffled.length];
        return `${nome} tirou ${amigoSecreto}`;
    });

    const lista = document.getElementById('listaNomes');
    lista.innerHTML = '<h3>Resultado do Sorteio:</h3>';
    resultado.forEach(item => {
        const p = document.createElement('p');
        p.textContent = item;
        lista.appendChild(p);
    });
}