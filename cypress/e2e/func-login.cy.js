/// <reference types="cypress" />

const telas = [[1280, 720], [768, 1024], [2436, 1125]]
telas.forEach((tela) => {
    describe("login "+tela, () => {
        beforeEach(() => {
            cy.viewport(...tela)
            cy.visit("https://automationpratice.com.br/login")
        })

        it("login com sucesso", () => {
            cy.preencherEmail('joao@joao.com')
            cy.preencherSenha('123123')
            cy.clicarLogin()
            cy.verificarLogin()
        })
        it("login e-mail vazio", () => {
            cy.preencherSenha('123123')
            cy.clicarLogin()
            cy.erroEmail('E-mail inválido.')
            
        })
        it("login senha vazia", () => {
            cy.preencherEmail('joao@joao.com')
            cy.clicarLogin()
            cy.erroSenha('Senha inválida.')
        })
        it("login campos vazios", () => {
            cy.clicarLogin()
            cy.erroEmail('E-mail inválido.')
        })
        it("login com espaco no e-mail", () => {
            cy.preencherEmail('joao @joao.com')
            cy.preencherSenha('123123')
            cy.clicarLogin()
            cy.erroEmail('E-mail inválido.')
        })
    })
})