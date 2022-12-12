class HomePage {

    get signInButton () {
    
        return cy.get('[show-authed="false"] > :nth-child(2) > .nav-link');
    }    
    
    
    load() {
        cy.visit("/")
        return this;
    }
    
    signIn() {
    
        this.signInButton.click();
        return new HomePage();
    }
    }
    export default HomePage