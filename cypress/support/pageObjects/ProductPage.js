import CartPage from "../../support/pageObjects/CartPage"

class ProductPage {
    pageValidation() {
        //cy.xpath("//app-card[contains(@class,'col-lg-3 col-md-6 mb-3')]").should('have.length', 4)
        cy.contains('Shop Name').should('be.visible')
    }
    verifyCardLimit() {
        cy.xpath("//div[contains(@class,'card h-100')]").should('have.length', 4)
    }
    addProduct() {
        cy.xpath("//div[contains(@class,'card h-100')]").each(($e1, index, $list) => {
            const mob = $e1.find('.card-title').text()
            if (mob.includes('iphone X')) {
                cy.wrap($e1).find('button').click()
            }
            else if (mob.includes('Nokia Edge')) {
                cy.wrap($e1).find('button').click()
            }

        })

    }
    clickOnCheckout() {

        cy.xpath("//ul[contains(@class,'navbar-nav ml-auto')]/li/a").click()
        return new CartPage()

    }

}

export default ProductPage;