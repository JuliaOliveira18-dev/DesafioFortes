
let nome = "Usuário Exemplo";

function mostrarSecao(secao) {
  const secoes = ["inicio", "residuos", "coletas", "relatorios"];
  secoes.forEach(nomeSecao => {
    const elemento = document.getElementById(nomeSecao);
    if (elemento) {
      elemento.style.display = nomeSecao === secao ? "block" : "none";
    }
  });
}


function sair() {
  window.location.href = "../index.html";  
  
}


