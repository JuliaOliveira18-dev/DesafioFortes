 function abrirLogin() {
    document.getElementById('modal-login').style.display = 'block';
  }

  function fecharLogin() {
    document.getElementById('modal-login').style.display = 'none';
  }

  function fazerLogin(event) {
    event.preventDefault();
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();

    if (email === 'admin@fortes.com.br' && senha === '123456') {
      window.location.href = './Paginas/adm1.html';
    } else if (email === 'cooperativas@fortes.com.br' && senha === '123456') {
      window.location.href = './Paginas/coop1.html';
    } else {
      alert("Erro no login: Email ou senha incorretos.");
    }
  }

