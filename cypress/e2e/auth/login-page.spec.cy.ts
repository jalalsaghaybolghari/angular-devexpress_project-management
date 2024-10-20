import { LoginPage } from '../../page-objects/loginPage';

describe('Login Tests', () => {
  const loginPage = new LoginPage();
  it('Should login with valid credentials', () => {
    cy.fixture('user').then((user) => {
      loginPage.visit();
      loginPage.enterUsername(user.username);
      loginPage.enterPassword(user.password);
      loginPage.submit();
      cy.url().should('include', '/dashboard');
    });
  });
  it('Should not login with invalid credentials', () => {
    cy.fixture('user').then((user) => {
      loginPage.visit();
      loginPage.enterUsername('dgsdfsdfsd');
      loginPage.enterPassword(user.password);
      loginPage.submit();
      cy.get('.toast-error').should('be.visible');

    });
  });
  it('Should navigate to register', () => {
    loginPage.visit();
    loginPage.navigateToRegisterPage();
    cy.url().should('include', '/register');
  });
});
