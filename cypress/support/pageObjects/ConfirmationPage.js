class ConfirmationPage{
    cofirmOrder(){
        cy.get('#country').type('pak')
        cy.xpath("//div[contains(@class,'suggestions')]/ul/li/a").click()
        cy.xpath("//div[contains(@class,'checkbox')]/label").click()
        cy.contains('Purchase').click()
    }
}

export default ConfirmationPage