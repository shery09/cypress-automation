import ConfirmationPage from "../../support/pageObjects/ConfirmationPage"
class CartPage{
    productSumValidation(){
        let sum = 0
        return cy.xpath("//table[contains(@class,'table-hover')]/tbody/tr/td[4]/strong")
            .each($e1 => {
                const amount = Number($e1.text().split(" ")[1].trim())
                sum = sum + amount
            }).then(function () {
                return sum
            })
    }
    checkOut(){
        cy.xpath("//button[contains(@class,'btn-success')]").click()
        return new ConfirmationPage()
    }

}

export default CartPage;