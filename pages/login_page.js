const { I } = inject();

module.exports = {
  fields:{
    email: '~email',
    senha: '~senha'
  },

  buttons:{
    enter: '~entrar',
  },

  messages:{
    errorNoLogin: '~lognFail',
  },

  doLogin(email, senha){
    // fill email field for 'accessibility id'
    I.fillField(this.fields.email, email)

    // fill email field
    I.fillField(this.fields.senha, senha)

    // tap on enter
    I.tap(this.buttons.enter)
  },

  checkLoginError(){
    I.waitForElement(this.messages.errorNoLogin, 5)
    I.seeElement(this.messages.errorNoLogin)
  }
}
