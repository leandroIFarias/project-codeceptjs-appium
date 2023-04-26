const { I } = inject();

module.exports = {
  fields:{
    codigo: '~codigo',
  },

  checkLoginSuccess(){
    I.waitForElement(this.fields.codigo, 5)
    I.seeElement(this.fields.codigo)
  }
}
