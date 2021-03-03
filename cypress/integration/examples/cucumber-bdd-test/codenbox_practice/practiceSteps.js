/// <reference types="Cypress" />

import {Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import PracticePage from './PracticePage'
import codenbox_practice from './PracticePage'


Given('I successfully browse to the Application', function(){
    PracticePage.loadHomePage();
    
})

When('I click on Practice button', ()=>{
    PracticePage.clickonPracticeBtn();
    

})

Then('I should see the title of the page is {string}', pageTitle=>{
    PracticePage.getTitile(pageTitle);
})

When('I click on static dropdown example', ()=>{
    PracticePage.getDropdownOption();

})

Then('I should able to select Selenium', ()=>{
    PracticePage.selectSelenium();
})