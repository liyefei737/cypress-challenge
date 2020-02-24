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
