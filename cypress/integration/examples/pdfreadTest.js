/// <reference types="Cypress" />

describe('My pdf Test Suite', function(){
    
    // it('read pdf', function(){ 
        

    //     //cy.readFile('cypress\\integration\\examples\\sample.xlsx').should('contains', "Asset");

    //     //cy.readFile('cypress\\sample.xlsx').should('exist');
    //     cy.readFile('mydownloads\\demofile.jpg').should('exist');

    // })

    it('download file and read it', function(){
        cy.visit('https://file-examples.com/index.php/sample-documents-download/sample-odt-download/')
        
        cy.get('tbody > tr:nth-child(1) > td.text-right.file-link > a.btn.btn-orange').click({force:true})

    
    })

    


})
    