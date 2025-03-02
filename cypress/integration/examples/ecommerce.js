import HomePage from '../../support/pageObjects/HomePage'
/// <reference types= "Cypress"/>

describe('E2E Ecommerce Website', function(){
    before(function () {
        //run once before all test in this block
        cy.fixture('example').then(function(data) {
            this.data=data;
            this.homePage=new HomePage();
        })
    })
    it('Happy flow with 2 products using validations', function() {
        //const productName = 'Nokia Edge';
        this.homePage.goTo(Cypress.env('url')+"/loginpagePractise/#")
        const productPage = this.homePage.login(this.data.username,this.data.password)
        productPage.pageValidation()
        productPage.verifyCardLimit()
        // cy.xpath("//app-card[contains(@class,'col-lg-3 col-md-6 mb-3')]").filter(`:contains("${productName}")`)
        // .then($element=>{
        //     cy.wrap($element).should('have.length',1)
        //     cy.wrap($element).contains('button','Add').click()
        // })
        productPage.addProduct()
        const cartPage = productPage.clickOnCheckout()
        cartPage.productSumValidation().then(function(sum){
            expect(sum).to.be.lessThan(200000)
        })
        const confrimationPage = cartPage.checkOut()
        confrimationPage.cofirmOrder()
        
        
        
        
    })
})