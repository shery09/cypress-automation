class ConfirmationPage{
    submitFormDetails(){
        // cy.get('#country').type("Pakistan")
        // cy.get('.suggestions ul li a').click()
        // cy.get('.btn-success').click()
        cy.submitFormDetails()
    }
    getAlertMessage(){
        return cy.get(".alert-success")
    }




}
export default ConfirmationPage;