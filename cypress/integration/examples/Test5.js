/// <reference types ="Cypress"/> 

describe('My Third Test Suite', function(){
it('My Third TestCase',function()
{
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('#opentab').invoke('removeAttr','target').click()
    cy.origin('https://www.qaclickacademy.com',()=>{
        cy.get('#navbarSupportedContent a[href*="about"]').click()
        //cy.get('.mt-50 h2').should('have.text','Welcome to QAClick Academy ')
        cy.get('.mt-50 h2').should('contain','QAClick Academy ')
    })
    

})

})