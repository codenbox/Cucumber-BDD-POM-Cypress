/// <reference types="Cypress" />

describe('My write-read Test Suite', function(){
    
    it ('write on a file test', function(){
        //create a text file and write 
        cy.writeFile('sampleFile.txt', 'Hello world\n')
        cy.writeFile('sampleFile.txt', 'this is my sampleFile', {flag:'a+'})

        //create json file in fixture and write
        cy.writeFile('cypress\\fixtures\\example.json',{

            name:'Jane',
            email:'jane@example.com',
            password:123456,
        } )

    })


    it('read file test', function(){
        //read the text file 
        cy.readFile('sampleFile.txt').should('exist').and('contains', 'Hello')

        //read json file from fixture
          //load fixture file 
          cy.fixture('example').then((profile)=>{
              expect(profile.name).to.eq('Jane')

          })

    })


    it('login test', function(){
        cy.visit('https://login.salesforce.com/?locale=ca')
        cy.fixture('example').then((profile)=>{
            cy.get('#username').type(profile.email)
            cy.get('#password').type(profile.password)


        })
        


    })
    


})