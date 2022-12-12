class LoginPage {

    get emailInput() {
    
        return cy.get(':nth-child(2) > .form-control');
    }    

    get passwordInput() {
    
        return cy.get(':nth-child(3) > .form-control');
    }    

    get signInButton() {
    
        return cy.get('.btn');
    }  
    
    
    login(email, password) {
        this.emailInput.type(email);
        this.passwordInput.type(password);
        this.signInButton.click();
    }
    }
    export default LoginPage