class FormsPage {
    clickPracticeForm() {
        cy.get('li#item-0').contains("Practice Form").click();
    }

    enterFirstName(name) {
        cy.get('#firstName').type(name);
    }

    enterLastName(name) {
        cy.get('#lastName').type(name);
    }

    enterEmail(email) {
        cy.get('#userEmail').type(email);
    }

    selectGender(gender) {
        cy.contains('label', gender).click();
    }

    enterMobileNumber(number) {
        cy.get('#userNumber').type(number);
    }

    setDateOfBirth(day, month, year) {
        const dob = `${day} ${month} ${year}`; // e.g., "11 Mar 1997"
        cy.get('#dateOfBirthInput')
            .click() // open calendar
            .clear() // clear any existing value
            .type(`${dob}{enter}`); // type date and press enter
    }


    enterSubjects(subjects) {
        subjects.forEach(sub => {
            cy.get('#subjectsInput')
                .type(sub)
                .type('{enter}');
        });
    }


    checkHobbies(hobbiesArray) {
        hobbiesArray.forEach(hobby => {
            // Find the label containing the hobby name and click it
            cy.contains('label', hobby).click({ force: true });
        });
    }

    setDateOfBirth(day, month, year) {
        cy.get('#dateOfBirthInput').click(); // open date picker

        // select year
        cy.get('.react-datepicker__year-select').select(year.toString());

        // select month
        cy.get('.react-datepicker__month-select').select(month);

        // select day
        cy.get(`.react-datepicker__day--0${day}`).not('.react-datepicker__day--outside-month').click();
    }

    uploadPicture(fileName) {
        cy.get('#uploadPicture').selectFile(`cypress/fixtures/Image/${fileName}`);
    }

    enterCurrentAddress(address) {
        cy.get('#currentAddress').clear().type(address);
    }

    selectState(state) {
        cy.get('#state').click();
        cy.get('.css-26l3qy-menu').contains(state).click();
    }

    selectCity(city) {
        cy.get('#city').click();
        cy.get('.css-26l3qy-menu').contains(city).click();
    }

    clickSubmit() {
        cy.get('#submit').click({ force: true });
    }

}
export default new FormsPage();