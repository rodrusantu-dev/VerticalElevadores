
var andarAtual = 1;
var alertas = document.getElementById("alertas");
var movimentoPausado = false;
var panicoAcionado = false;
var voice = window.speechSynthesis;


function irParaAndar(andar) {
  // Verifica se o elevador está em movimento
  if (movimentoPausado) {
    alertas.textContent = "Movimento do elevador interrompido!";
    return;
  }

  // Verifica se o andar solicitado é válido
  if (andar < 0 || andar > 5) {
    alertas.textContent = "Andar inválido";
    return;
  }

  // Verifica se o elevador já está no andar solicitado
  if (andar == andarAtual) {
    alertas.textContent = "Já está no andar " + andar;
    return;
  }

  // Abre a porta do elevador
  alertas.textContent = "PORTA ABERTA";
  anunciarMensagem("pode entrar");

  // Espera 2 segundos para simular o tempo de abertura da porta
  setTimeout(function() {
    // Fecha a porta do elevador
    alertas.textContent = "PORTA FECHADA - Indo para o andar " + andar;
    anunciarMensagem("Porta fechada - Indo para o andar " + andar);
    console.log("Indo do andar " + andarAtual + " para o andar " + andar);

    // Move o elevador para o andar solicitado
    andarAtual = andar;
    document.getElementById("andar-atual").textContent = andarAtual;

    // Abre a porta do elevador
    setTimeout(function() {
      alertas.textContent = "PORTA ABERTA - Chegamos no andar " + andar;
      anunciarMensagem("Porta aberta - Chegamos no andar " + andar);
    }, 4000);
  }, 4000);
}

function pararElevador() {
  movimentoPausado = true;
  alertas.textContent = "Movimento do elevador interrompido!";
  anunciarMensagem("Movimento do elevador interrompido");
  setTimeout(function() {
    movimentoPausado = false;
    alertas.textContent = "";
  }, 5000);
}


function botaoPanico() {
  panicoAcionado = true;
  alertas.textContent = "Panico Acionado";
  anunciarMensagem("Botão de pânico acionado. Tenha calma, segurança a caminho.");
  setTimeout(function() {
    panicoAcionado = false;
    alertas.textContent = "";
  }, 5000);
}

function anunciarMensagem(mensagem) {
  // Verifica se a API de síntese de voz é suportada pelo navegador
  if ('speechSynthesis' in window) {
    // Cria um objeto de fala com a mensagem desejada
    var utterance = new SpeechSynthesisUtterance(mensagem);
    utterance.lang = 'pt-BR';
    // Fala a mensagem
    voice.speak(utterance);
  }
}
