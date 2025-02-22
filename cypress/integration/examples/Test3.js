/// <reference types ="Cypress"/> 

describe('My Third Test Suite', function(){
it('My Third TestCase',function()
{
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    //check boxex
    cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
    cy.get('input[type=checkbox]').check(['option2','option3'])
    //static dropdown
    cy.get('select').select('Option1').should('have.value','option1')
    cy.get('#autocomplete').type('Pa')
    cy.get(".ui-menu-item div").each(($e1, index, $list) => {
        if($e1.text()=='Pakistan')
        {
            cy.wrap($e1).click()
        }   

    })
    cy.get('#autocomplete').should('have.value','Pakistan')

    cy.get('#displayed-text').should('be.visible')
    cy.get('#hide-textbox').click()
    cy.get('#displayed-text').should('not.be.visible')
    cy.get('#show-textbox').click()
    cy.get('#displayed-text').should('be.visible')

    cy.get('[value="radio2"]').check().should('be.checked')
    // cy.get('.radioButton').uncheck()
    //cy.get('input[type=radio]').check(['radio3'])


})

})