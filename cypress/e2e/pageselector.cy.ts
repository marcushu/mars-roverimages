/// <reference types="cypress" />
// @ts-check


describe('pageselector spec', () => {

    it('shows first page of images', () => {
        cy.visit('http://localhost:3000');

        cy.get('input').should('have.value', 1);
    });


    it('responds to next-page button click', () => {
        cy.visit('http://localhost:3000');

        cy.contains(/❯/).click();

        cy.get('input').should('have.value', 2);
    });


    it('responds to previous-page button click', () => {
        cy.visit('http://localhost:3000');

        cy.contains(/❮/).click();

        cy.get('input').should('have.value', 1)
    });

});
