class AlertsFramesPage {
    clickAlertsTab() {
        cy.get('li#item-1').click();
    }

    clickFramesTab() {
        cy.get('li#item-2').click();
    }

    // Alerts
    triggerAlertButton() {
        cy.get('#alertButton').click();
    }

    triggerConfirmButton() {
        cy.get('#confirmButton').click();
    }

    triggerPromptButton() {
        cy.get('#promtButton').click();
    }

    // Frames
    getFrameById(id) {
        return cy.get(`#${id}`);
    }
}

export default new AlertsFramesPage();