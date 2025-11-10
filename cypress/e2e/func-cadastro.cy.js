/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

const telas = [[1280,720],[768,1024],[2436,1125]]
telas.forEach((tela) => {
        describe("cadastro "+ tela,() => {
         beforeEach(() =>{
            cy.viewport(...tela)
            cy.visit("https://automationpratice.com.br/register")
    })
    it("cadastro com sucesso", ()=>{
        
        cy.nome_usuario()
        cy.cadastro_email_usuario()
        cy.cadastro_senha()
        cy.get('#btnRegister').click()
        cy.get('#swal2-title')
            .should('contain', 'Cadastro realizado!')
            .should('be.visible')
            .should('exist')
    })

    it("cadastro campos vazios", ()=>{
        cy.get('#btnRegister').click()
        cy.get('#errorMessageFirstName')
            .should('contain', 'O campo nome deve ser prenchido')
            .should('be.visible')
            .should('exist')
    })

    it("cadastro senha vazia", ()=>{
        cy.nome_usuario()
        cy.cadastro_email_usuario('gmail.com')
        cy.get('#btnRegister').click()
        cy.get('#errorMessageFirstName')
            .should('contain', 'O campo senha deve ter pelo menos 6 dígitos')
            .should('be.visible')
            .should('exist')
    })

    it("cadastro campo e-mail vazio", ()=>{
        cy.nome_usuario()
        cy.cadastro_senha(6)
        cy.get('#btnRegister').click()
        cy.get('#errorMessageFirstName')
            .should('contain', 'O campo e-mail deve ser prenchido corretamente')
            .should('be.visible')
            .should('exist')
    })

    it("cadastro nome vazio", ()=>{
        cy.cadastro_email_usuario('gmail.com')
        cy.cadastro_senha(6)
        cy.get('#btnRegister').click()
        cy.get('#errorMessageFirstName')
            .should('contain', 'O campo nome deve ser prenchido')
            .should('be.visible')
            .should('exist')
    })

    it("cadastro email invalido", ()=>{
        cy.nome_usuario()
        cy.cadastro_email_usuario('gmailcom')
        cy.cadastro_senha(6)
        cy.get('#btnRegister').click()
        cy.get('#errorMessageFirstName')
            .should('contain', 'O campo e-mail deve ser prenchido corretamente')
            .should('be.visible')
            .should('exist')
    })

    it("cadastro nome invalido", ()=>{
        cy.nome_usuario('12~') //essa api permite qualquer nome
        cy.cadastro_email_usuario('gmail.com')
        cy.cadastro_senha(6)
        cy.get('#btnRegister').click()
    })

    it("cadastro senha invalida",  ()=>{
        cy.nome_usuario()
        cy.cadastro_email_usuario('gmail.com')
        cy.cadastro_senha(4)
        cy.get('#btnRegister').click()
        cy.get('#errorMessageFirstName')
            .should('contain', 'O campo senha deve ter pelo menos 6 dígitos')
            .should('be.visible')
            .should('exist')
        })
    });
})