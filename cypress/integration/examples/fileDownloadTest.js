/// <reference types="cypress-downloadfile"/>
/// <reference types="Cypress" />

describe('My file download Test Suite', function(){
    
    it('Download file test', function(){
        cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','demofile.jpg')

    })

})