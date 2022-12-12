import HomePage from "../../Pages/homepage";
import LoginPage from "../../Pages/loginPage";
import MainPage from "../../Pages/mainPage";

const homePage = new HomePage();
const loginPage = new LoginPage();
const mainPage= new MainPage();

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
