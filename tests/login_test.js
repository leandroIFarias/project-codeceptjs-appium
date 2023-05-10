Feature('login');

// allows using the object globally in this file
//const { I, login_page, home_page } = inject();

Scenario('Login with success',  ({I, login_page, home_page}) => {
    login_page.doLogin('teste@teste.com', '123456')
    home_page.checkLoginSuccess()
});

Scenario('Login with error',  ({I, login_page}) => {
    login_page.doLogin('teste@teste.com', '123')
    login_page.checkLoginError()
});
