import MainPage from '../Pages/mainPage';
import ElementsPage from '../Pages/elementsPage';

describe('DEMOQA Elements Module Tests', () => {

    beforeEach(() => {
        MainPage.visit();
        MainPage.clickElementsMenu();
    });

    it('TC_01: Verify Text Box functionality', () => {
        ElementsPage.clickTextBox();
        cy.get('#userName').type('Albert Einstein');
        cy.get('#userEmail').type('albert@example.com');
        cy.get('#currentAddress').type('123 Main St');
        cy.get('#permanentAddress').type('456 Main St');
        cy.get('#submit').click({ force: true });
        cy.get('#output #name').should('contain.text', 'Albert Einstein');
        cy.get('#output #email').should('contain.text', 'albert@example.com');
    });

    it('TC_02: Verify Check Box functionality', () => {
        ElementsPage.clickCheckBox();
        cy.get('.rct-node .rct-checkbox').first().click(); 
        cy.get('#result').should('be.visible');
    });

    it('TC_03: Verify Radio Button functionality', () => {
        ElementsPage.clickRadioButton();
        cy.get('input#yesRadio').check({ force: true });
        cy.get('.text-success').should('contain.text', 'Yes');
        cy.get('input#impressiveRadio').check({ force: true });
        cy.get('.text-success').should('contain.text', 'Impressive');
    });

    it('TC_04: Verify Web Tables functionality', () => {
        ElementsPage.clickWebTables();
        cy.get('#addNewRecordButton').click();
        cy.get('#firstName').type('Arafat');
        cy.get('#lastName').type('Hossain');
        cy.get('#userEmail').type('riyel.rifat321@gmail.com.com');
        cy.get('#age').type('26');
        cy.get('#salary').type('10000');
        cy.get('#department').type('SQA');
        cy.get('#submit').click();
        cy.get('.rt-tbody .rt-td[role="gridcell"]').should('contain.text', 'Arafat');
    });

    it('TC_05: Verify Buttons functionality', () => {
        ElementsPage.clickButtons();
        cy.get('#doubleClickBtn').dblclick();
        cy.get('#doubleClickMessage').should('contain.text', 'You have done a double click');
        cy.get('#rightClickBtn').rightclick();
        cy.get('#rightClickMessage').should('contain.text', 'You have done a right click');
    });

});