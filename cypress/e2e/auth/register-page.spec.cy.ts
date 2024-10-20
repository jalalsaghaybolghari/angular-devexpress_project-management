import { RegisterPage } from '../../page-objects/registerPage';

describe('Register Tests', () => {
  const registerPage = new RegisterPage();
  beforeEach(() => {
    cy.fixture('user').then((user) => {
      registerPage.visit();
      registerPage.enterUsername(user.username);
      registerPage.enterFirstName(user.firstname);
      registerPage.enterLastName(user.lastname);
      registerPage.enterPhoneNumber(user.phonenumber);
      registerPage.enterEmail(user.email);
      registerPage.enterPassword(user.password);
      registerPage.enterConfirmPassword(user.password);
    });
  });
  it('Should register with valid credentials', () => {
    registerPage.submit();
    cy.url().should('include', '/');
    cy.get('.toast-success').should('be.visible').and('contain', 'Registration was successful');
  });
  it('Should navigate to login page', () => {
    registerPage.visit();
    registerPage.navigateToLoginPage();
    cy.url().should('include', '/login');
  });
});
