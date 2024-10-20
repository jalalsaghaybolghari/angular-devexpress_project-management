export class RegisterPage {
  visit() {
    cy.visit('/register');
  }

  enterUsername(username: string) {
    cy.get('input[name="username"]').type(username);
  }

  enterFirstName(firstname: string) {
    cy.get('input[name="firstname"]').type(firstname);
  }

  enterLastName(lastname: string) {
    cy.get('input[name="lastname"]').type(lastname);
  }

  enterPhoneNumber(phonenumber: string) {
    cy.get('input[name="phonenumber"]').then((el) => {
      el.val(phonenumber);
    });
  }

  enterEmail(email: string) {
    cy.get('input[name="email"]').type(email);
  }

  enterPassword(password: string) {
    cy.get('input[name="password"]').type(password);
  }
  enterConfirmPassword(confirmpassword: string) {
    cy.get('input[name="confirmpassword"]').type(confirmpassword);
  }

  submit() {
    cy.get('.dx-button-content').contains('Register').click();
  }

  navigateToLoginPage() {
    cy.get('.dx-button-content').contains('Login').click();
  }
}
