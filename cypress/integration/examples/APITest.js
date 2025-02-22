/// <reference types="Cypress"/>

describe('API TEST',function(){
    it('POST API',function(){
        cy.request('POST','http://216.10.245.166/Library/Addbook.php',{
            "name" : "Learn Appium Automation",
            "isbn" : "bdcsss",
            "aisle" : "22s7",
            "author" : "John Foe"
        }).then(function(response){
            expect(response.body).to.have.property("Msg","successfully added")
            expect(response.status).to.equal(200)
    })
    })
})