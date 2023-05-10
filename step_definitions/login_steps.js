const { I, login_page, home_page } = inject();

Given('I fill email {string}', (email) => {
  I.waitForElement(login_page.fields.email,10)
  I.fillField(login_page.fields.email, email)
});

Given('I fill password {string}', (password) => {
  I.fillField(login_page.fields.senha, password)
});

When('I tap on Entrar', () => {
  I.tap(login_page.buttons.enter)
});

Then('I see the Salvar button', () => {
  I.waitForElement(home_page.fields.codigo, 5)
  I.seeElement(home_page.fields.codigo)
});

Then('I see message Login Fail', () => {
  I.waitForElement(login_page.messages.errorNoLogin, 5)
  I.seeElement(login_page.messages.errorNoLogin)
});