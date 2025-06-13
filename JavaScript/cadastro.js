function validarCadastro() {
      const camposObrigatorios = document.querySelectorAll('.obrigatorio');
      let todosPreenchidos = true;

      camposObrigatorios.forEach(campo => {
        if (campo.value.trim() === '') {
          campo.style.border = '2px solid red';
          todosPreenchidos = false;
        } else {
          campo.style.border = '1px solid #ccc';
        }
      });

      if (!todosPreenchidos) {
        alert('Por favor, preencha todos os campos obrigatórios destacados em amarelo.');
        return false;
      }

      return true;
    }

    function voltarParaIndex() {
  window.location.href = "../index.html";
}
