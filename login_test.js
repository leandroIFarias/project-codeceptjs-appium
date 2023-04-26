Feature('login');

// allows using the object globally in this file
const { I, login_page } = inject() 

Scenario('Login with success',  ( ) => {
    login_page.doLogin('teste@teste.com', '123456')

    // check
    I.waitForElement('~codigo', 5)
    I.seeElement('~codigo')
});

Scenario('Login with error',  ( ) => {
    login_page.doLogin('teste@teste.com', '123')

    // check
    I.waitForElement('~lognFail', 5)
    I.seeElement('~lognFail')
});
