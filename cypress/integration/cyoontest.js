describe('Enter a number to get the median of primes:',() => {
    it('My first test sample for TochBistro by Chris Yoon',() => {
        cy.visit('/')
    })
    
    it('Functional acceptance testing - positive testings', () => {
        cy.compareResult("10","[3,5]")
        cy.compareResult("18","[7]")
        cy.compareResult("0","[,]")
        cy.compareResult("1","[,]")
        cy.compareResult("2","[,]")
        cy.compareResult("3","[2]")        
    })
      
    // it('Find out error handling issue', () => {
    //     cy.visit('/')
    //     // try to enter the strings or special caractor will give an error
    //     // this test is failed the previous return value should be reset
    //     cy.get('input').type('-1')
    //     cy.contains('Submit').click()
    //     cy.get('h2').should('include.contain.text', "The median is: [,]")
        
    //     //the invalid input should not be able to send to the server
    //     cy.get('input').type('sendstrings')
    //     cy.contains('Submit').click()
    //     cy.get('button').should('be.disabled')
    // })

    // it('testing null value sumit', () => {
    //     cy.contains('Submit').click()
    //     cy.get('button').should('be.enable')
    // })//this should be an error because it crashs the app. It needs to implement the user entry condition statements
})
