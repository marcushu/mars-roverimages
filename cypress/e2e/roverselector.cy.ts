/// <reference types="cypress" />
// @ts-check


describe('roverselector spec' ,() => {
  
  it('correctly switched rovers', () => {
    cy.visit('http://localhost:3000');
    cy.get('header').contains('Rover Images');

    cy.contains('As a counterpart to the opportunity rover, Spirit broadened the search for evidence of water which could have supported life on Mars.');
  
    cy.contains('2003-07-07').click();

    cy.contains('Opportunity set about covering over 28 miles or Martian surface in search of evidence that water may have existed on the planet.');
  });

})