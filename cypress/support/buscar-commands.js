/// <reference types="cypress" />

Cypress.Commands.add('busca',(tela,pesquisa) => {
    if (tela[0] <= 425) {
                cy.get('.mobile-header').find('.search_width').click()
            } else {
                cy.get('.header-bottom').find('.search_width').click()
            }
            cy.get('#search').find('input').should('be.visible').type(pesquisa)
            cy.get('.btn-main-search').click()
            cy.get('.swal2-popup').find('.swal2-actions').should('be.visible').click()
            cy.get('.product_shot').find('.product_shot_title').should('be.visible')
})
Cypress.Commands.add('filtrar_ordem1',(ordem) => {
    cy.get('.product_filter').find('.customs_sel_box').select(ordem).should('contain','Best Seller')
})
Cypress.Commands.add('verificarOrdem1',(organizarProdutos) => {
    cy.get('.product_filter').find('.customs_sel_box').should('contain',organizarProdutos)
})
Cypress.Commands.add('filtrar_ordem2',(ordem) => {
    cy.get('.product_shot .customs_sel_box').select(ordem).wait(1000)
})
Cypress.Commands.add('verificarOrdem2',(organizarProdutos) => {
     cy.get('.product_shot').find('.customs_sel_box').should('contain',organizarProdutos)
})
