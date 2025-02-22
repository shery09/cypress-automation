/// <reference types = "Cypress"/>

describe('JWT Session', function () {
    it('is logged in through local storage', () => {
        cy.LoginAPI().then(function () {
            cy.visit("https://rahulshettyacademy.com/client/",
                {
                    onBeforeLoad: function (window) {
                        window.localStorage.setItem('token', Cypress.env('token'))
                    }
                })
        })
        {
            cy.get('.card-body button:last-of-type').eq(1).click();
            cy.get("[routerlink*='cart']").click()
            cy.contains('Checkout').click()
            cy.get("[placeholder*='Country']").type("Pak")
            cy.get('.ta-results').each(($e1, index, $list) => {
                if ($e1.text() === ' Pakistan') {
                    cy.wrap($e1).click()
                }
            })
            cy.get('.action__submit').click()
            cy.wait(2000)
            cy.contains('Click To Download Order Details in CSV').click()
        }
    })
})