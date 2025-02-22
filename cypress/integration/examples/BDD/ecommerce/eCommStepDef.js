import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import HomePage from "../../../../support/pageObjects/HomePage"
const homepage = new HomePage()

Given('I am on Ecommerce Page', function () {
   homepage.goTo(Cypress.env('url') + "/loginpagePractise/#")
})

When('I login to the application', function () {
    this.productPage = homepage.login(this.data.username, this.data.password)
    this.productPage.validateShopName()
    this.productPage.validateLengthofProduct().should('have.length', 4)
})

When('I login to the application with cucumber',function(dataTable){
    this.productPage = homepage.login(dataTable.rawTable[1][0], dataTable.rawTable[1][1])
    this.productPage.validateShopName()
    this.productPage.validateLengthofProduct().should('have.length', 4)
})

When('I add items in the cart and checkout', function () {
    this.productPage.addProductByName(this.data.productName)
    this.productPage.selectFirstProduct()
    this.cartPage = this.productPage.goToCart()
})

When('validate the total price limit', function () {
    this.cartPage.sumOfProducts().then(function (sum) {
        expect(sum).to.be.lessThan(200000)
    })
})

Then('select the country submit and verify thankyou', function () {

})

