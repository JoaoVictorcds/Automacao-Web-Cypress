/// <reference types="cypress" />
Cypress.Commands.add('anotacoes', (mensagem) => {
    cy.get('#messages').type(mensagem)
})
Cypress.Commands.add('salvar_dados', () => {
    cy.get('#materialUnchecked').check()
})
Cypress.Commands.add('salvarPreenchimento', () => {
    cy.get('.checkout-area-bg').find(".theme-btn-one").click()
})
Cypress.Commands.add('formaPagamento', () => {
    cy.get('#javascript').click()
})
Cypress.Commands.add('confirmarPedido', () => {
    cy.get('.order_review').find(".theme-btn-one").click()
})
Cypress.Commands.add('verificarPedido', (verifica_mensag) => {
    cy.get('.offer_modal_left').should('contain', verifica_mensag)
})
Cypress.Commands.add('VerificarErro', (verifica_mensag) => {
    cy.get('.order_review').should('contain', verifica_mensag)
})
Cypress.Commands.add('SelectPais', (pais) => {
    cy.get('#country').select(pais)
})
Cypress.Commands.add('SelectCidade', (cidade) => {
    cy.get('#city').select(cidade)
})
Cypress.Commands.add('ErroEndereco', (verifica_mensag) => {
    cy.get('.checkout-area-bg').should('contain', verifica_mensag)
})
Cypress.Commands.add('ErroFirstName', (verifica_mensag) => {
    cy.get('#errorMessageFirstName').should('contain', verifica_mensag)
})
