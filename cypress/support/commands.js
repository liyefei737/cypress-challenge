// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("compareResult", (number,result) => { 
    cy.get('input').type(number)
    cy.contains('Submit').click()
    cy.get('h2').should('contain', result)
})

Cypress.Commands.add("sendStringResult", (string_) => { 
    cy.get('input').type(string_)
    cy.contains('Submit').click()
    cy.get('button').should('be.disabled')
})
