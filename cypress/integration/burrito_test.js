describe('Boulder Burrito Builder Big Bunch of Bananas', () => {

    beforeEach(() => {
        cy.intercept('http://localhost:3001/api/v1/orders', { fixture: 'dummy_data.json' })
            .visit('http://localhost:3000/')
    });


    it('Should display a home page with a title', () => {
        cy.get('h1').contains('Burrito Builder')
    }); 

    // it('Should have a form with input fields and button', () => {
    //     cy.get('form').get('input').first()
    //         .invoke('attr', 'placeholder').should('contain', 'Name')
    //         .get('button').should('exist')
    // })

    // it('Should display all the current reservations', () => {
    //     cy.get('.resy-container').get('.grid')
    //         .first().get('h2').contains('Christie')
    // })

    // it('Should display reservation details for one guest', () => {
    //     cy.get('.resy-container').get('.grid')
    //         .first().get('h2').contains('Christie')
    //         .get('h5').contains('12/29')
    //         .get('h5').contains('7:00')
    //         .get('h5').contains('Number of Guests: 12')
    //         .get('.cancel-button').should('exist')
    // })

    // it('Should add a reservation to the page', () => {
    //     cy.get('input[name=name]').type('Julia')
    //         .should('have.value', 'Julia')
    //         .get('input[name=date]').type('4/20')
    //         .should('have.value', '4/20')
    //         .get('input[name=time]').type('7:15')
    //         .should('have.value', '7:15')
    //         .get('input[type=number]').type(69)
    //         .should('have.value', 69)
    //         .get('.submit-button').click()
    //         .get('.resy-container').get('.grid')
    //         .last().get('h2').contains('Julia')
    // })
})

