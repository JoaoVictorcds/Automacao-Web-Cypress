/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

Cypress.Commands.add('nome_usuario',(lastname) => {
    cy.get('#user').type(faker.person.fullName({lastName:lastname}))
})

Cypress.Commands.add('cadastro_email_usuario',(provider) => {
    cy.get('#email').type(faker.internet.email({provider: provider}))
})

Cypress.Commands.add('cadastro_senha',(length) => {
    cy.get('#password').type(faker.internet.password({ length: length }))
})

Cypress.Commands.add('cadastro_firstname',() => {
    cy.get('#fname').type(faker.person.firstName())
})

Cypress.Commands.add('cadastro_lastname',() => {
    cy.get('#lname').type(faker.person.lastName())
})

Cypress.Commands.add('cadastro_companyname',() => {
    cy.get('#cname').type(faker.company.name())
})

Cypress.Commands.add('cadastro_endereco',() => {
    cy.get('#faddress').type(faker.location.street())
})

Cypress.Commands.add('cadastro_cep',() => {
    cy.get('#zip').type(faker.location.zipCode())
})
