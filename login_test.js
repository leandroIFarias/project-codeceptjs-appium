Feature('login');

// allows using the object globally in this file
const { I, login_page } = inject() 

Scenario('Login with success',  ({home_page}) => {
    login_page.doLogin('teste@teste.com', '123456')
    home_page.checkLoginSuccess()
});

Scenario('Login with error',  ( ) => {
    login_page.doLogin('teste@teste.com', '123')

    // check
    I.waitForElement('~lognFail', 5)
    I.seeElement('~lognFail')
});
