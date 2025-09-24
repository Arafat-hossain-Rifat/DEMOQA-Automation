class MainPage {
    visit() {
        cy.visit('https://demoqa.com/');
    }

    clickElementsMenu() {
        cy.get('div.card-body h5:contains("Elements")').click();
    }

    clickFormsMenu() {
        cy.get('div.card-body h5:contains("Forms")').click();
    }

    clickAlertsFramesMenu() {
        cy.get('div.card-body h5:contains("Alerts, Frame & Windows")').click();
    }
}

export default new MainPage();