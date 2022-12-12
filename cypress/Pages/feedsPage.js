class FeedsPage {

    get newArticleButton() {
    
        return cy.get('[show-authed="true"] > :nth-child(2) > .nav-link');
    }
    
    get emptyPageText() {
    
        return cy.get('[ng-show="!$ctrl.loading && !$ctrl.list.length"]');
    }    
    
    newArticle() {
        
        this.newArticleButton.click();
    }

    emptyAssertion() {
        
        this.emptyPageText.should('have.text', '\n  No articles are here... yet.\n');
    }
    }
    export default FeedsPage