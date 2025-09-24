import MainPage from '../Pages/mainPage';
import FormsPage from '../Pages/formsPage'

describe('DEMOQA Forms Module Tests', () => {

  beforeEach(() => {
    MainPage.visit()
    MainPage.clickFormsMenu()
  })

   it('TC_01: Verify Practice Form functionality with valid inputs', () => {
    FormsPage.clickPracticeForm()
    FormsPage.enterFirstName('Arafat')
    FormsPage.enterLastName('Hossain')
    FormsPage.enterEmail('riyel.rifat321@gmail.com')
    FormsPage.selectGender('Male')
    FormsPage.enterSubjects(['Maths', 'Physics', 'Chemistry'])
    FormsPage.enterMobileNumber('1317807568')
    FormsPage.setDateOfBirth(11, 'March', 1997)
    FormsPage.checkHobbies(['Reading', 'Music', 'Sports']);
    FormsPage.uploadPicture('test_testing.jpg');
    FormsPage.enterCurrentAddress('123 Main St, Dhaka')
    FormsPage.selectState('NCR')
    FormsPage.selectCity('Delhi')
    FormsPage.clickSubmit()
    cy.get('tr').eq(1).should('contain.text','Arafat Hossain');
    cy.get('tr').eq(2).should('contain.text', 'riyel.rifat321@gmail.com')
    cy.get('tr').eq(3).should('contain.text', 'Male');
    cy.get('tr').eq(4).should('contain.text', '1317807568');
    cy.get('tr').eq(5).should('contain.text', '11 March,1997');
    cy.get('tr').eq(6).should('contain.text', 'Maths, Physics, Chemistry')
    cy.get('tr').eq(7).should('contain.text', 'Reading, Music, Sports')
    cy.get('tr').eq(8).should('contain.text', 'test_testing.jpg')
    cy.get('tr').eq(9).should('contain.text', '123 Main St, Dhaka')
    cy.get('tr').eq(10).should('contain.text', 'NCR Delhi')
  })

//   it('TC_02: Verify Practice Form functionality with invalid inputs', () => {
//     FormsPage.clickPracticeForm()
//     FormsPage.enterFullName('Albert Einstein')
//     FormsPage.enterEmail('invalid-email') // invalid email
//     FormsPage.enterCurrentAddress('123 Main St')
//     FormsPage.enterPermanentAddress('456 Park Ave')
//     FormsPage.clickSubmit()
//     cy.get('#userEmail:invalid').should('exist') // browser validation prevents submission
//   })

//   it('TC_03: Verify mandatory field validation in Practice Form', () => {
//     FormsPage.clickPracticeForm()
//     FormsPage.enterFullName('') // leave name blank
//     FormsPage.enterEmail('')    // leave email blank
//     FormsPage.clickSubmit()
//     cy.get('#userName:invalid').should('exist')
//     cy.get('#userEmail:invalid').should('exist')
//   })

})