export class LoginPage {
    visit() {
      cy.visit('/login');
    }
  
    enterUsername(username: string) {
      cy.get('input[name="username"]').type(username);
    }
  
    enterPassword(password: string) {
      cy.get('input[name="password"]').type(password);
    }
  
    submit() {
      cy.get('.dx-button-content').contains('Login').click();
    }

    navigateToRegisterPage(){
      cy.get('.dx-button-content').contains('Register').click();

    }
  }
  
  