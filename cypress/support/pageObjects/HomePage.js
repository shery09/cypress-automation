import ProductPage from "../../support/pageObjects/ProductPage"
class HomePage {
    goTo(url) {
        cy.visit(url)
    }
    login(username, password) {
        cy.xpath("//input[contains(@id,'username')]").type(username)
        cy.xpath("//input[contains(@id,'password')]").type(password)
        cy.xpath("//input[contains(@id,'signInBtn')]").click()
        return new ProductPage()
    }
}

export default HomePage;
