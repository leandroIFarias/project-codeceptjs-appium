Feature('login');

Scenario('Login with success',  ({ I }) => {

    // fill email field for 'accessibility id'
    I.fillField('~email','teste@teste.com')

    // fill email field
    I.fillField('~senha','123456')

    // tap on enter
    I.tap('~entrar')

    // check
    I.waitForElement('~codigo', 5)
    I.seeElement('~codigo')
});

Scenario('Login with error',  ({ I }) => {

    // fill email field for 'accessibility id'
    I.fillField('~email','teste@teste.com')

    // fill email field
    I.fillField('~senha','123')

    // tap on enter
    I.tap('~entrar')

    // check
    I.waitForElement('~lognFail', 5)
    I.seeElement('~lognFail')
});
