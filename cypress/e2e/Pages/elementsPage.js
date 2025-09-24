class ElementsPage {
    clickTextBox() {
        cy.get('li#item-0').contains("Text Box").click();
    }

    clickCheckBox() {
        cy.get('li#item-1').contains("Check Box").click();
    }

    clickRadioButton() {
        cy.get('li#item-2').contains("Radio Button").click();
    }

    clickWebTables() {
        cy.get('li#item-3').contains("Web Tables").click();
    }

    clickButtons() {
        cy.get('li#item-4').contains("Buttons").click();
    }
}

export default new ElementsPage();