const form = document.getElementById('form-acao');
const listaAcoes = document.getElementById('lista-acoes');

let acoes = JSON.parse(localStorage.getItem('acoes')) || [];

function salvarLocalStorage() {
  localStorage.setItem('acoes', JSON.stringify(acoes));
}

function voltarParaIndex() {
  window.location.href = "../index.html";
}


function renderizarAcoes() {
  listaAcoes.innerHTML = '';
  acoes.forEach((acao) => {
    const div = document.createElement('div');
    div.classList.add('linha-acao');
    div.innerHTML = `
      <h3>${acao.titulo} <span class="status">${acao.status}</span></h3>
      <p>${acao.descricao}</p>
      <div class="detalhes">
        <div>
          <p><strong>Data:</strong> ${acao.data}</p>
          <p><strong>Local:</strong> ${acao.local}</p>
          <p><strong>Responsável:</strong> ${acao.responsavel}</p>
        </div>
        <div>
          <p><strong>Beneficiários:</strong> ${acao.beneficiarios}</p>
          <p><strong>Recursos:</strong> ${acao.recursos}</p>
        </div>
      </div>
      <div class="botoes">
        <button class="botao editar" data-id="${acao.id}">Editar</button>
        <button class="botao excluir" data-id="${acao.id}">Excluir</button>
      </div>
    `;
    listaAcoes.appendChild(div);
  });

  
  document.querySelectorAll('.editar').forEach(btn => {
    btn.onclick = (e) => editarAcao(e.target.dataset.id);
  });

  document.querySelectorAll('.excluir').forEach(btn => {
    btn.onclick = (e) => excluirAcao(e.target.dataset.id);
  });
}

function gerarId() {
  return Date.now().toString();
}

function limparFormulario() {
  form.reset();
  document.getElementById('acao-id').value = '';
}

function editarAcao(id) {
  const acao = acoes.find(a => a.id === id);
  if (!acao) return;
  document.getElementById('acao-id').value = acao.id;
  document.getElementById('titulo').value = acao.titulo;
  document.getElementById('descricao').value = acao.descricao;
  document.getElementById('data').value = acao.data;
  document.getElementById('local').value = acao.local;
  document.getElementById('responsavel').value = acao.responsavel;
  document.getElementById('beneficiarios').value = acao.beneficiarios;
  document.getElementById('recursos').value = acao.recursos;
  document.getElementById('status').value = acao.status;
}

function excluirAcao(id) {
  if (confirm('Tem certeza que deseja excluir esta ação?')) {
    acoes = acoes.filter(a => a.id !== id);
    salvarLocalStorage();
    renderizarAcoes();
  }
}

form.addEventListener('submit', e => {
  e.preventDefault();

  const id = document.getElementById('acao-id').value;
  const novaAcao = {
    id: id || gerarId(),
    titulo: document.getElementById('titulo').value,
    descricao: document.getElementById('descricao').value,
    data: document.getElementById('data').value,
    local: document.getElementById('local').value,
    responsavel: document.getElementById('responsavel').value,
    beneficiarios: document.getElementById('beneficiarios').value,
    recursos: document.getElementById('recursos').value,
    status: document.getElementById('status').value
  };

  if (id) {
   
    acoes = acoes.map(a => a.id === id ? novaAcao : a);
  } else {
   
    acoes.push(novaAcao);
  }

  salvarLocalStorage();
  renderizarAcoes();
  limparFormulario();
});

renderizarAcoes();
