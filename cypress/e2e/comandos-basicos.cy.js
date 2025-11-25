// EXEMPLOS DE COMANDOS BASICOS EM CYPRESS PARA AUTOMACAO DE TESTES WEB
//UM NOME DE UM ID DE UM CAMPO EXISTE UNICAMENTE EM CADA PAGINA. 
// DIFERENTE DE UMA CLASSE QUE PODE TER VARIAS CLASSES COM MESMO NOME EM UMA UNICA PAGINA

/// <reference types="cypress" />


describe("comandos basicos automacao web cy",() => {
        it("deve visitar uma URL",() => {
            // encontra a url que ira ser interagida
            cy.visit('www.automationpratice.com.br');
        });

        it("formas de encontrar um campo especifico",() => {
            // o simbolo "#" é usado para selecionar itens do tipo ID, enquanto, quando vou selecionar um iten do tipo classe,
            //  tenho que procurar o nome dele e colocar antes do nome um "." que significa que estou procurando uma classe
            // pode usar para procurar um campo usando GET, FIND ou CONTAIN. o get é mais usado para pegar o campo mais especifico possivel,
            // porem o get pode ser usado para diminuir escopo para dar uso ao FIND ou CONTAIN.
            // caso nao tenha o elemento especifico. pode diminuir o escopo da procura com o GET, e usar o FIND para encontrar o elemento especifico
            // o mais diferente é o CONTAIN ja que ele procura por textos, entao, pode ser perigoso, pois pode ter mais de um texto igual na tela,
            // sendo assim, necessario diminuir o escopo tambem com get igual faz com find.

            //cy.get('#user'); //caso ele tenha um ID proprio ja serve como rota unica
            //cy.get('.mc-form').find('.form-control');
            //cy.get('.mc-form').contains('SEND MAIL');
        });

        it("preencher um campo com texto",() => {
            cy.visit('www.automationpratice.com.br/login'); //o comando visit busca a url especifica
            cy.get('#user').type("aaaa@gmail.com{enter}"); //type diz que o texto entre aspas sera digitado no campo selecionado
            // No .type dentro ainda de aspas posso colocar {enter}. faz com que seja confirmado o campo atraves da tecla enter
        }); 

        it("clicar em um elemento",() => {
            //seleciona o elemento que vai ser clicado atraves do id ou classe, e usa .click()
            cy.visit('www.automationpratice.com.br/login');
            cy.get('#btnLogin').click();
        });

        it("selecionar um Dropdown",() => {
            cy.visit('https://automationpratice.com.br/checkout-one');
            cy.get('#country').select(2); //seleciona tanto por texto quanto por posicao
        })

        it("checkbox / Radiobutton",() => {
            cy.visit('https://automationpratice.com.br/checkout-one');
            cy.get('#materialUnchecked').check(); // check pra selecionar e uncheck pra desselecionar
            cy.get('#css').check(); // um RadioButton nao pode ser deselecionado
        });
        
        it("validar algo",() => {
            cy.visit('https://automationpratice.com.br/login');
            cy.get('#createAccount')
            .should('exist')
            .should('be.visible')
            .should('contain',"Ainda não tem conta?")
        });
});