const botao = document.getElementById("abrirSelecao");
  const selecao = document.getElementById("selecaoResiduos");

  botao.addEventListener("click", () => {
    selecao.style.display = selecao.style.display === "none" ? "block" : "none";
  });

function novaSolicitacao() {
  alert("Solicitação de coleta criada com sucesso!");
}

function voltar() {
  window.location.href = "coop1.html";  
}

function inicio() {
  window.location.href = "../index.html";  
}


function Coleta() {
  window.location.href = "coop3.html";  
}
