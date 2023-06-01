/// <reference types="cypress" />

describe('Testes do Elevador', () => {
  beforeEach(() => {
    // Executa as ações antes de cada caso de teste
    // Aqui você pode reiniciar o estado do elevador, se necessário
  });

  it("deve ir para o andar 2 quando o botão do andar 2 for clicado", () => {
    cy.get("#botao-andar-2").click(); // Clica no botão do andar 2
    cy.contains("#andar-atual", "2") // Verifica se o elemento com id "andar-atual" contém o texto "2"
      .should("be.visible"); // Garante que o elemento seja visível na página
  });

  it("deve abrir a porta do elevador quando o botão de abrir for clicado", () => {
    cy.get("#botao-abrir-porta").click(); // Clica no botão de abrir a porta
    cy.contains("#alertas", "PORTA ABERTA") // Verifica se o elemento com id "alertas" contém o texto "PORTA ABERTA"
      .should("be.visible"); // Garante que o elemento seja visível na página
  });

  it("deve fechar a porta do elevador quando o botão de fechar for clicado", () => {
    cy.get("#botao-fechar-porta").click(); // Clica no botão de fechar a porta
    cy.contains("#alertas", "PORTA FECHADA") // Verifica se o elemento com id "alertas" contém o texto "PORTA FECHADA"
      .should("be.visible"); // Garante que o elemento seja visível na página
  });

  it("deve interromper o movimento do elevador quando o botão de parar for clicado", () => {
    cy.get("#botao-parar-elevador").click(); // Clica no botão de parar o elevador
    cy.contains("#alertas", "Movimento do elevador interrompido") // Verifica se o elemento com id "alertas" contém o texto "Movimento do elevador interrompido"
      .should("be.visible"); // Garante que o elemento seja visível na página
  });

  it("deve acionar o botão de pânico e exibir a mensagem correspondente", () => {
    cy.get("#botao-panico").click(); // Clica no botão de pânico
    cy.contains("#alertas", "Panico Acionado") // Verifica se o elemento com id "alertas" contém o texto "Panico Acionado"
      .should("be.visible"); // Garante que o elemento seja visível na página
    cy.contains("Botão de pânico acionado. Tenha calma, segurança a caminho.") // Verifica se a mensagem correspondente ao pânico está presente na página
      .should("be.visible"); // Garante que o elemento seja visível na página
  });
});