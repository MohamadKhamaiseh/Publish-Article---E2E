class MainPage {

    get yourFeedsTitle () {
    
        return cy.get('.tag-list > :nth-child(1)');
    }
    
    get newArticleTitle () {
    
        return cy.get('.sidebar > p');
    }
    get newArticleButton () {
    
        return cy.get('[show-authed="true"] > :nth-child(2) > .nav-link');
    }        
      
    titleAssertion() {
    
        this.yourFeedsTitle.should("have.text", "implementations");
        this.newArticleTitle.should("have.text", "Popular Tags");
    }

    AddArticleButton () {
        this.newArticleButton.click();
    }
    }
    export default MainPage