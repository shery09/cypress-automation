import HomePage from "../../support/pageObjects/HomePage"

describe('Login Page', function () {
    before(function () {
        //run once before all test in this block
        cy.fixture('example').then(function (data) {
            this.data = data
            this.homepage = new HomePage()
        })
    })
    it('Test Case 1', function () {
        // Cypress.config('defaultCommandTimeout',10000)
        //cy.visit("https://rahulshettyacademy.com/loginpagePractise/#")
        const productName = this.data.productName
        //Cypress.env('url')
        this.homepage.goTo(Cypress.env('url')+"/loginpagePractise/#")
        const productPage = this.homepage.login(this.data.username,this.data.password)
        productPage.validateShopName()
        productPage.validateLengthofProduct().should('have.length',4)
        productPage.addProductByName(productName)
        productPage.selectFirstProduct()
        const cartPage = productPage.goToCart()
        cartPage.sumOfProducts().then(function(sum){
            expect(sum).to.be.lessThan(200000)
        })
        const confirmationPage = cartPage.checkOutItems()
        confirmationPage.submitFormDetails()
        confirmationPage.getAlertMessage().should('contain','Success') 
        
    })

})