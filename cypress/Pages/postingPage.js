class PostingPage {

    get articleBodyText() {
    
        return cy.get('.ng-binding > p');
    }
    
    get deleteArticleButton() {
    
        return cy.get('.article-actions > article-actions.ng-isolate-scope > article-meta.ng-isolate-scope > .article-meta > :nth-child(3) > [ng-show="$ctrl.canModify"] > .btn-outline-danger');
    }    
    
    textAssertion() {
        
        this.articleBodyText.should("have.text", "It's a dummy article body");
        return new PostingPage();

    }
    
    articleDeletion() {
        
        this.deleteArticleButton.click();
    }
    }
    export default PostingPage