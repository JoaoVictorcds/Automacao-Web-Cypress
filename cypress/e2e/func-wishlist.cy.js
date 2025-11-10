/// <reference types="cypress" />

const telas = [[1280, 720], [3120, 1440], [1200, 1125]]

telas.forEach((tela) => {
    describe('wishlist', () => {
        beforeEach(() => {
            cy.viewport(...tela)
            cy.visit("https://automationpratice.com.br/login")
        })

        it.only('favoritar na tela grid de produtos', () => {
            cy.loginCompleto()
            cy.busca(tela, 'monitor')
            cy.get('#shop_main_area > div > div:nth-child(2) > div:nth-child(8) > div > div.thumb > div > a.action.wishlist > svg')
                .click()
            cy.get('.swal2-popup').find('#swal2-html-container')
                .should('contain', 'Added to Wishlist')
            cy.get('.swal2-actions').find('.swal2-confirm').click()
        })

        it('favoritar produto ja favoritado', () => {
            cy.loginCompleto()
            cy.busca(tela, 'monitor')
            cy.get('#shop_main_area > div > div:nth-child(2) > div:nth-child(8) > div > div.thumb > div > a.action.wishlist > svg')
                .click()
            cy.get('.swal2-popup').find('#swal2-html-container').should('contain', 'Added to Wishlist')
            cy.get('.swal2-actions').find('.swal2-confirm').click()
            cy.get('#shop_main_area > div > div:nth-child(2) > div:nth-child(8) > div > div.thumb > div > a.action.wishlist > svg')
                .click()
            cy.get('.swal2-popup').find('#swal2-html-container')
                .should('contain', 'Already Added in Wishlist')
        })

        it('menu lateral de favoritos', () => {
            cy.loginCompleto()
            cy.get('.fa-heart').first().click()
            cy.get('#offcanvas-wishlish').should('be.visible')
        })

        it('excluir item do menu lateral de favoritos', () => {

            cy.loginCompleto()
            cy.get('.fa-heart').first().click()
            cy.get('#offcanvas-wishlish')
                .should('be.visible')
            cy.get('#offcanvas-wishlish').find('.offcanvas-wishlist-item-single')
                .then($itens => {
                    const antes = $itens.length
                    cy.get('#offcanvas-wishlish').find('a.offcanvas-wishlist-item-delete')
                        .first()
                        .should('be.visible')
                        .click()
                    cy.get('#offcanvas-wishlish').find('.offcanvas-wishlist-item-single')
                        .should('have.length', antes - 1)
                })
        })
    })
})