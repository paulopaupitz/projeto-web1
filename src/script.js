document.addEventListener('DOMContentLoaded', function() {
  const btnCadastrar = document.getElementById('btnCadastrar');
  const popup = document.getElementById('popup');
  const btnFechar = document.getElementById('btnFechar');
  const btnRemover = document.getElementById('btnRemover');

  btnCadastrar.addEventListener('click', function(event) {
    event.preventDefault();

    // Exibir o popup
    popup.style.display = 'block';
  });

  function fecharPopup() {
    // Ocultar o popup
    popup.style.display = 'none';
  }
  function removerVacina(){

  }

  btnFechar.addEventListener('click', function(event) {
    event.preventDefault();
    fecharPopup();
  });

  btnRemover.addEventListener('click', function(event) {
    event.preventDefault();
    removerVacina();
  });





  document.addEventListener('click', function(event) {
    // Verificar se o clique ocorreu fora do popup ou no botão "Cadastrar"
    if (!popup.contains(event.target) && event.target !== btnCadastrar) {
      fecharPopup();
    }
  });
});