# Demo Project - CodeceptJS with Appium 
Projeto de Automação. Onde é utilizado CodeceptJS e Appium, utilizando o padrão PageObject.


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
9. Instalar o CodeceptJS com webdriverio pelo comando (npm install codeceptjs webdriverio --save)
10. Executar o comando (npx codeceptjs init) para configuração inicial do projeto, conforme abaixo:
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
11. Adicionar o Padrao PageObjects, através do comando (npx codeceptjs gpo) 
12. Adicionar o gherkin (BDD) atraves do comando: (npx codeceptjs gherkin:init)






2. Especificações dos diretórios