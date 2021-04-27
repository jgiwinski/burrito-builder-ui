describe('Boulder Burrito Builder Big Bunch of Bananas', () => {

    beforeEach(() => {
        cy.intercept('http://localhost:3001/api/v1/orders', { fixture: 'dummy_data.json' })
        cy.intercept({
            method: 'POST',
            url: 'http://localhost:3001/api/v1/orders'
          },
          {
            statusCode: 201,
            body: {id: 69, name: 'Julia', ingredients: ['beans', 'sofritas', 'queso fresca', 'carnitas']}
          })
            .visit('http://localhost:3000/')
    });


    it('Should display a home page with a title', () => {
        cy.get('h1').contains('Burrito Builder')
    }); 

    it('Should have a form with name input and submit button', () => {
        cy.get('form').get('input')
            .invoke('attr', 'placeholder').should('contain', 'Name')
            .get('button').should('exist')
    })

    it('Should have ingredient buttons', () => {
        cy.get('form').get('button').should('have.length', 13)
          .get('[name=beans]').should('exist')
          .get('[name=steak]').should('exist')
          .get('[name=carnitas]').should('exist')
          .get('[name=sofritas]').should('exist')
          .get('[name=lettuce]').should('exist')
          .get('[name="queso fresco"]').should('exist')
          .get('[name="pico de gallo"]').should('exist')
          .get('[name="hot sauce"]').should('exist')
          .get('[name=guacamole]').should('exist')
          .get('[name=jalapenos]').should('exist')
          .get('[name=cilantro]').should('exist')
          .get('[name="sour cream"]').should('exist')
      })

    it('Should display all the current orders', () => {
        cy.get('.order').first().get('h3').contains('Pat')
        .get('.ingredient-list').contains('beans')
        .get('.order').eq(0).should('contain', 'Pat')
        .get('.order').eq(2).should('contain', 'Alex')
    })

    it('Should display order details for one hungry hippo', () => {
        cy.get('.order').first().get('h3').contains('Pat')
            .get('.order').eq(0).should('not.contain', 'steak')
            .get('.ingredient-list').contains('beans')
            .get('.ingredient-list').eq(1).contains('lettuce')
            .get('.ingredient-list').eq(2).contains('carnitas')
    })

    it('Should add a reservation to the page', () => {
      cy.get('input[name=name]').type('Julia')
          .should('have.value', 'Julia')
          .get('button').first().click()
          .get('button').eq(3).click()
          .get('button').eq(5).click()
          .get('button').eq(2).click()
          .get('button').last().should('contain.text', 'Submit Order').click()
  })
})

