// Seleciona o botão de rolagem para o topo pelo seletor de classe ".botao-topo"
var botaoTopo = document.querySelector(".botao-topo");

// Adiciona um evento ao objeto window que é disparado toda vez que a página é rolada para cima ou para baixo
window.onscroll = function() {
  // Chama a função scrollFunction()
  scrollFunction();
};

// Define a função scrollFunction()
function scrollFunction() {
  // Verifica se a posição atual da página é maior do que 20 pixels
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    // Se a posição atual da página for maior do que 20 pixels, exibe o botão
    botaoTopo.style.display = "block";
  } else {
    // Caso contrário, oculta o botão
    botaoTopo.style.display = "none";
  }
}

// Adiciona um evento ao botão para rolar a página para o topo quando clicado
botaoTopo.addEventListener("click", function() {
  // Define os valores de scrollTop de document.body e document.documentElement como 0
  // para rolar a página para o topo
  document.body.scrollTop = 0; // Para navegadores mais antigos
  document.documentElement.scrollTop = 0; // Para navegadores modernos
});
