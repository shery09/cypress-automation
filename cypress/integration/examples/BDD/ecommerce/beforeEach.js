beforeEach(function () {
    //run once before all test in this block
    cy.fixture('example').then(function (data) {
        this.data = data
    })
})