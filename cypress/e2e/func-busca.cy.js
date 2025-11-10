/// <reference types="cypress" />


const telas = [[1280, 720], [3120, 1440], [425, 380]]
telas.forEach((tela) => {
    describe("busca de produtos ", () => {
        beforeEach(() => {
            cy.visit("https://automationpratice.com.br")
            cy.viewport(...tela)
        })

        it('busca com sucesso ' + tela, () => {
            cy.busca(tela,'monitor')
            cy.wait(500)
        })
        // Como essa api aceita qualquer caractere no campo busca entao nao é possivel fazer testes negativos
        it('ordem produtos best seller 1' + tela, () => {
            cy.busca(tela,'monitor').wait(500)
            cy.filtrar_ordem1('Best Seller')
            cy.verificarOrdem1('Best Seller')
        })
        it('filtrar produtos low to high 2 ' + tela, () => { //a pagina possui dois tipos de ordenacao de produtos entao os dois foram testados
            cy.busca(tela, 'monitor').wait(500)
            cy.filtrar_ordem2('low')
            cy.verificarOrdem2('Price: Low to High')  
        })
    })

})
