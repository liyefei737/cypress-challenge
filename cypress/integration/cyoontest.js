describe('Enter a number to get the median of primes:',() => {
    it('My first test sample for TochBistro by Chris Yoon',() => {
        cy.visit('/')
    })
    
    it('Functional acceptance testing - Positive testings', () => {
        cy.compareResult("10","[3,5]")
        cy.compareResult("18","[7]")
        cy.compareResult("0","[,]")
        cy.compareResult("1","[,]")
        cy.compareResult("2","[,]")
        cy.compareResult("3","[2]")
        cy.compareResult("0","[,]")        
    })

    it('Functional acceptance testing - negative testings', () => {
        cy.compareResult("-1","[,]")
    })
      
    it('Find out error handling issue - sending string should disable the button', () => { 
        cy.sendStringResult("helloworld")
    })

    it('testing null value submit', () => {
        cy.contains('Submit').click()
        cy.get('button').should('be.enable')
    })//this should be an error because it crashs the app. It needs to implement the user entry condition statements
})
