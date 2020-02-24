describe('Enter a number to get the median of primes:',() => {
    it('Stock x',() => {
        cy.visit('https://www.1bettor.com/default.aspx')
    })

    it('login',()=>{

        cy.get('.login_input').find('#UserName').type('111111')
        cy.get('.login_input').find('ctl00$MainContent$ctlLogin$_Password').type('22222222222')
        cy.get('.login_input').find('submit').click()
    })
    //class="searchbox input-text form-control"
    //#home-search
    //#ctl00_MainContent_ctlLogin__UserName

})