const botao = document.getElementById("abrirSelecao");
  const selecao = document.getElementById("selecaoResiduos");

  botao.addEventListener("click", () => {
    selecao.style.display = selecao.style.display === "none" ? "block" : "none";
  }); 
  
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


