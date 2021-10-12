describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should update display of running total', () => {
    cy.get('#number4').click();
    cy.get('#running-total').should('contain', '4');
  })

  it('should update the display with the result of the operation', () => {
    cy.get('#number8').click();
    cy.get('#operator-multiply').click();
    cy.get('#number9').click();
    cy.get('#operator-equals').click();
    cy.get('#running-total').should('contain', '72');
  });

  it('should be able to chain multiple operations together', () => {
    cy.get('#number5').click();
    cy.get('#operator_add').click();
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('#operator-divide').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('#running-total').should('contain', '5');
  });

  it('should handle decimals', () => {
    cy.get('#number3').click();
    cy.get('#decimal').click();
    cy.get('#number8').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    // cy.get('#decimal').click();
    cy.get('#number6').click();
    cy.get('#operator-equals').click();
    cy.get('#running-total').should('contain', '98.8');
  });

  it('should handle negatives', () => {
    cy.get('#number6').click();
    cy.get('#operator-subtract').click();
    cy.get('#number3').click();
    cy.get('#number8').click();
    cy.get('#operator-equals').click();
    cy.get('#operator_add').click();
    cy.get('#number7').click();
    cy.get('#operator-equals').click();
    cy.get('#running-total').should('contain', '-25');
  });
})