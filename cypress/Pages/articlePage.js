class ArticlePage {

    get articleTitleInput() {
    
        return cy.get(':nth-child(1) > .form-control');
    }    

    get aboutArticleInput() {
    
        return cy.get(':nth-child(2) > .form-control');
    }    

    get writeArticleInput() {
    
        return cy.get(':nth-child(3) > .form-control');
    }  

    get tagsInput() {
    
        return cy.get(':nth-child(4) > .form-control');
    } 
    
    get publishArticleButton() {
    
        return cy.get('.btn');
    } 
          
    publishNewArticle() {
        this.articleTitleInput.type("It's a dummy article title");
        this.aboutArticleInput.type("It's a dummy article info ");
        this.writeArticleInput.type("It's a dummy article body");
        this.tagsInput.type("#dummyTag");
        this.publishArticleButton.click();
    }        
    }
    export default ArticlePage