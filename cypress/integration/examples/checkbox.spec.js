/// <reference types="Cypress" />

describe('My Checkbox Test Suite', function(){
    
    it('checkbox test', function(){
        cy.visit('http://codenboxautomationlab.com/practice/')
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')

        //unchecked the option1 box
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

        //check multiple checkbox options unsing common attribute
        cy.get('input[type="checkbox"]').check(['option1', 'option2'])

        //Dynamic dropdown
        cy.get('#autocomplete').type('can')
        cy.get('.ui-menu-item div').each(($el, index, $list) => {

            if($el.text() === 'Canada')
            {
                cy.wrap($el).click()
            }
            
            
        })

    })
})