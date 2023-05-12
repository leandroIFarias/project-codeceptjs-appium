# Demo Project - CodeceptJS with Appium and browserstack
Demo de um Projeto de Automação.
Onde é utilizado o CodeceptJS com Appium e Browserstack, utilizando o BDD e o padrão PageObject.
Podendo ser executado tanto pelos arquivos de Testes quanto pela as features, de acordo com o comando inserido no terminal.


## Configuração

1. Instalar o NodeJS (https://nodejs.org/dist/v18.16.0/node-v18.16.0-x64.msi) - para verificar a instalação digitar: node
2. Se for realizar teste local para android: 
	- Instalar a última versão do Java JDK;
	- Instalar o Android Studio -  (https://developer.android.com/studio);
	- Instalar os SDK pelo Android Studio;
	- Criar um Emulador pelo Android Studio (Exemplo Pie 28 x86_64);
	- Habilitar a funcao de desenvolvedor no emulador criado;
	- executar no cmd (adb devices) para validar o acesso ao emulador criado;
	- Configurar as variáveis de ambiente.
3. Instalar o VS Code (https://code.visualstudio.com/download)
4. Instalar o Appium Server - pelo comando (npm i -g appium@next) no CMD do Windows - - para verificar a instalação digitar: appium;
5. Instalar o Appium Inspector (https://github.com/appium/appium-inspector/releases);
6. Instalar o Appium Doctor com o comando (npm install appium-doctor -g) no CMD (https://www.npmjs.com/package/appium-doctor)
7. Realizar um check com o comando (appium-doctor --android) e solucionar se tiver faltando algo.
8. Criar uma pasta para o projeto
9. npm init
10. Instalar o CodeceptJS com webdriverio pelo comando (npm install codeceptjs webdriverio --save)
11. Executar o comando (npx codeceptjs init) para configuração inicial do projeto, conforme abaixo:
	- Typescript: "NO"
	- Qual a localização dos testes: "./*_test.js"
	- Tipo de projeto: "Appium"
	- Diretorio de saida: "./output"
	- Linguagem: "EN"
	- Aplication package: "localhost"
	- Plataforma mobile: android
	- Device: "emulator"
	- Feature exemplo de criacao de teste: "login"
	- Nome do arquivo: "login_test.js"
12. Adicionar o arquivo ".gitignore"
13. Adicionar o arquivo "README.md"
14. Adicionar as capabilities
16. Testar o aplicativo para verificar se está tudo funcionando
	- Abrir o emulador android e copiar o arquivo .apk para dentro do emulador
	- Dar um START no Servidor do Appium no cmd: (appium) 
	- Realizar o teste do projeto através do comando (npx codeceptjs run --steps)
	Obs.: Para criar um novo cenario, executar o cmd: "npx codeceptjs gt"
17. Criar o padrao Page Objects, com o comando: (npx codeceptjs gpo)
18. Adicionar o gherkin (BDD) atraves do comando: (npx codeceptjs gherkin:init) 
19. Executar o comando (npm install dotenv) para criar o arquivo .env para salvar as config do APP e browserstack (Obs. tem que criar o arquivo pois ele está no .gitignore)
20. Executar o comando (npminstall@wdio/browserstack-service --save-dev) para poder executar o aplicativo via browserstack (Obs. lembrar de configurar as capabilities do browserstack e subir o arquivo .apk no browserstack - no site do browserstack tem o passo a passo)

## Extensões VS Code
 - BDD Highlighter
 - Snippets and Syntax Highlight for Gherkin (Cucumber)
 - Cucumber (Gherkin) Full Support

## Exemplode opções de comando para executar
 - npx codeceptjs run --steps
 - npx codeceptjs run --grep "@login_sucesso"
 - npx codeceptjs run --grep "@login_error"
 - npx codeceptjs run --reporter mochawesome
 - npx codeceptjs run --steps --config=codecept.local.conf.js
 - npx codeceptjs run --steps --config=codecept.browserstack.conf.js
 - npx codeceptjs run --grep '@login_sucesso' --config=codecept.conf.js
 - npx codeceptjs run --grep '@login_sucesso' --config=codecept.browserstack.conf.js

## Especificações dos diretórios
 - app: contém o app .apk (inserido no .gitignore)
 - features: features do BDD
 - output: local para salvar as evidências (inserido no .gitignore)
 - pages: contém os objetos mapeados
 - server: contém Bootstrap e Teardown (para ser implementado conforme necessidade)
 - step_definitions: contém os steps utilizados pelas features
 - tests: contém exemplos de cenários sem o BDD apenas com o PageObject
 - node_modules: Contém as bibliotecas utilizadas (inserido no .gitignore)