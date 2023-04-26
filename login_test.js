Feature('login');

Scenario('Login with success',  ({ I, login_page }) => {

    login_page.doLogin('teste@teste.com', '123456')

    // check
    I.waitForElement('~codigo', 5)
    I.seeElement('~codigo')
});

Scenario('Login with error',  ({ I, login_page }) => {

    login_page.doLogin('teste@teste.com', '123')

    // check
    I.waitForElement('~lognFail', 5)
    I.seeElement('~lognFail')
});
