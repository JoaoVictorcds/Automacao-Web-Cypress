/// <reference types="cypress" />

Cypress.Commands.add('preencherEmail', (email) => {
    cy.get('#user').type(email)
})
Cypress.Commands.add('preencherSenha', (senha) => {
    cy.get('#password').type(senha)
})
Cypress.Commands.add('clicarLogin', () => {
    cy.get('#btnLogin').click()
})
Cypress.Commands.add('verificarLogin', () => {
    cy.get('.swal2-popup').find('#swal2-html-container')
        .should('be.visible')
        .should('exist')
    cy.get('.swal2-actions').find('.swal2-confirm')
    .should('be.visible')
    .click()
})
Cypress.Commands.add('erroEmail', (aviso) => {
    cy.get('.default-form-box').find('.invalid_input')
        .should('contain', aviso)
        .should('be.visible')
        .should('exist')
})
Cypress.Commands.add('erroSenha', (aviso) => {
    cy.get('.default-form-box').find('.invalid_input')
        .should('contain', aviso)
        .should('be.visible')
        .should('exist')
})
Cypress.Commands.add('loginCompleto', () => {
    cy.preencherEmail('joao@joao.com')
    cy.preencherSenha('123123')
    cy.clicarLogin()
    cy.verificarLogin()
})