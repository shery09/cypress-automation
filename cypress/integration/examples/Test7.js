/// <reference types ="Cypress"/> 

describe('My Third Test Suite', function(){
it('My Third TestCase',function()
{
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

    // cy.get('div.mouse-hover-content').invoke('show')
    cy.contains('Top').click({force : true})
    cy.url().should('include','top')
    
    
    

})

})