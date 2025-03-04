document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM carregado!"); // Para verificar se o script rodou no console
  
    var dropdownButton = document.getElementById("dropdownButton");
    var dropdownMenu = document.getElementById("dropdownMenu");
  
    if (!dropdownButton || !dropdownMenu) {
        console.error("Erro: O botão ou o menu dropdown não foram encontrados!");
        return; // Para evitar erro
    }
  
    dropdownButton.addEventListener("click", function(event) {
        event.stopPropagation();
        dropdownMenu.classList.toggle("show");
    });
  
    document.addEventListener("click", function(event) {
        if (!dropdownMenu.contains(event.target) && event.target !== dropdownButton) {
            dropdownMenu.classList.remove("show");
        }
    });
  });