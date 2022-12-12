import ArticlePage from "../../Pages/articlePage";
import HomePage from "../../Pages/homepage";
import LoginPage from "../../Pages/loginPage";
import MainPage from "../../Pages/mainPage";
import PostingPage from "../../Pages/postingPage";
import FeedsPage from "../../Pages/feedsPage";

const homePage = new HomePage();
const loginPage = new LoginPage();
const mainPage= new MainPage();
const articlePage= new ArticlePage();
const postingPage = new PostingPage();
const feedsPage = new FeedsPage();



Given(/^I lunch the conduit site$/, () => {

    homePage.load();
});

And(/^I click on sign in button$/, () => {

    homePage.signIn();
});

When(/^I fill username and password inputs and press on sing in button$/, () => {

    loginPage.login(("khamaiseh@user.user"), ("123456"));
});

Then(/^I should see the main page$/, () => {
    mainPage.titleAssertion();
});

When(/^I click New Article$/, () => {
    mainPage.AddArticleButton();
});

Then(/^I fill the form and publish the article$/, () => {
    articlePage.publishNewArticle();
});

Then(/^I should see the published article$/, () => {
    postingPage.textAssertion();
});

Then(/^I should be able to delete the published article$/, () => {
    postingPage.articleDeletion();
});

Then(/^I should see article deleted from the feeds page$/, () => {
    feedsPage.emptyAssertion();
});