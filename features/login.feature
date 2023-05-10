@login
Feature: Login
  Eu como usuario
  Gostaria de fazer Login
  Para acessar o sistema
  
  @login_sucesso
  Scenario: Login with success
    Given I fill email "teste@teste.com"
    And I fill password "123456"
    When I tap on Entrar
    Then I see the Salvar button

  @login_error
  Scenario: Login with error
    Given I fill email "teste@teste.com"
    And I fill password "123"
    When I tap on Entrar
    Then I see message Login Fail
