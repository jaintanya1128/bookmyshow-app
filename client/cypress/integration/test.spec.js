/// <reference types="Cypress" />

describe('My First Test', function() {
	beforeEach(function() {
		cy.visit('https://youtube.com');
		cy.get('#search').type('kid carnival');
	});
	it('finds the content "type"', function() {});
});
