/// <reference types = "Cypress"/>

describe('Pass Login Page', function () {
    it('LOGIN API', function () {
        cy.LoginAPI().then(function () {
            cy.visit("https://rahulshettyacademy.com/client/",
                {
                    onBeforeLoad: function (window) {
                    window.localStorage.setItem('token', Cypress.env('token'))
                    }
                })
        })

    })


})