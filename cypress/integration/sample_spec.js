
describe('Enter a number to get the median of primes:',()=>{
    it('My first test sample for TochBistro by Chris Yoon',()=>{
        cy.visit('http://localhost:3000')
    })
    
    it('Functional acceptance testing - positive testings', () => {
        // 10 will return [3,5] - 2 multiple primes
        cy.get('input').type('10')
        cy.contains('Submit').click()
        cy.get('h2').should('include.text', "The median is: [3,5]")
        // 18 will return [7] - 1 primes
        cy.get('input').type('18')
        cy.contains('Submit').click()
        cy.get('h2').should('include.text', "The median is: [7]")
        // 0 will return null - testing 0 primes
        cy.get('input').type('0')
        cy.contains('Submit').click()
        cy.get('h2').should('include.text', "The median is: [,]")
        // 1 will return null - testing non prime number
        cy.get('input').type('1') 
        cy.contains('Submit').click()
        cy.get('h2').should('include.text', "The median is: [,]")
        // 2 will return null - there is no prime number in between 1 and 2
        cy.get('input').type('2')
        cy.contains('Submit').click()
        cy.get('h2').should('include.text', "The median is: [,]")
        // 3 will return [2] - finishing up the boundary testing
        cy.get('input').type('3')
        cy.contains('Submit').click()
        cy.get('h2').should('include.text', "The median is: [2]")
    })
      
    it('Find out error handling issue', () => {
        // try to enter the strings or special caractor will give an error
        // this test is failed the previous return value should be reset
        cy.get('input').type('-1')
        cy.contains('Submit').click()
        cy.get('h2').should('include.not.contain.text', "The median is: [,]")
        
        //the invalid input should not be able to send to the server
        cy.get('input').type('sendstrings')
        cy.contains('Submit').click()
        cy.get('button').should('be.disabled')
    })

    it('testing null value sumit', () => {
        cy.contains('Submit').click()
        cy.get('button').should('be.enable')
    })//this should be an error because it crashs the app. It needs to impliment the user entry condition statements
})