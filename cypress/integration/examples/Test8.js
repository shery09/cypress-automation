/// <reference types ="Cypress"/> 

describe('My Third Test Suite', function(){
it('My Third TestCase',function()
{
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

    cy.get('#opentab').then(function(el)
    {
        const url = el.prop('href')
        cy.visit(url)
        cy.origin(url,()=>{
            cy.get("div.sub-menu-bar a[href*='about.html']").click()
        })
        
    })
    
    
    

})

})