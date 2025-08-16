// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um nome à lista
function adicionarAmigo() {
  const nomeAmigo = document.getElementById('amigo');
  const listaAmigosElemento = document.getElementById('listaAmigos');
  
  // Verifica se o nome não está vazio e se o campo existe
  if (nomeAmigo && nomeAmigo.value.trim() !== '') {
    const nomeCapitalizado = nomeAmigo.value.charAt(0).toUpperCase() + nomeAmigo.value.slice(1).toLowerCase();
    
    // Adiciona o nome ao array
    amigos.push(nomeCapitalizado);
    
    // Exibe a lista de amigos na tela
    listaAmigosElemento.textContent = amigos.join(', ');
    
    // Limpa o campo de entrada
    nomeAmigo.value = '';
  }
}

// Função para sortear os amigos
function sortearAmigo() {
  const resultadoElemento = document.getElementById('resultado');
  
  // Verifica se há pelo menos dois amigos para o sorteio
  if (amigos.length < 3) {
    alert('Adicione pelo menos 3 amigos para fazer o sorteio!');
    return;
  }
  
  // Embaralha o array de amigos
  embaralhar(amigos);
  
  // Limpa a lista de resultados anterior
  resultadoElemento.innerHTML = '';
  
  // Itera sobre o array para criar os pares de amigo secreto
  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement('li');
    
    // Se for o último amigo, ele sorteia o primeiro da lista
    if (i === amigos.length - 1) {
      li.textContent = `${amigos[i]} -> ${amigos[0]}`;
    } else {
      li.textContent = `${amigos[i]} -> ${amigos[i + 1]}`;
    }
    
    // Adiciona a classe CSS e insere o item na lista de resultados
    li.classList.add('result-item');
    resultadoElemento.appendChild(li);
  }
}

// Função para embaralhar o array (algoritmo de Fisher-Yates)
function embaralhar(lista) {
  for (let i = lista.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [lista[i], lista[j]] = [lista[j], lista[i]];
  }
}

// Função para reiniciar o jogo
function reiniciar() {
  // Limpa o array de amigos
  amigos = [];
  
  // Limpa os elementos na tela
  document.getElementById('listaAmigos').textContent = '';
  document.getElementById('resultado').innerHTML = '';
}