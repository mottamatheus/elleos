<p align="center">
  <img width="460" src="https://i.imgur.com/NR58Ooa.jpg">
</p>

<p align="center">	
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/mottamatheus/elleos">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/mottamatheus/elleos">
  <img alt="License" src="https://img.shields.io/badge/license-MIT-blue">
  
</p>
<h1 align="center">elleos - faça a diferença :hugs:</h1>
<p align="center">A <strong>elleos</strong> é uma plataforma que busca conectar pessoas que querem ajudar e instituições beneficentes que precisam de ajuda.
Para desenvolvimento do front-end do site e do app foram utilizados <strong>TypeScript, ReactJS e ReactNative</strong>. O back-end foi desenvolvido com NodeJS.
Esse projeto foi baseado na <a href="https://github.com/rocketseat-education/nlw-03-omnistack">plataforma Happy</a> e desenvolvido durante a terceira edição da Next Level Week, feita pela Rocketseat entre 12 e 16 de Outubro de 2020. </p>

<p>
A identidade visual foi criação própria. O nome elleos vem de Eleos, que na mitologia grega personificava a piedade, a caridade e a misericórdia. Expandi a ideia da happy pra abrangir outras instituições beneficentes além de orfanatos.</p>
<p align="center">	
> Status do Projeto: Em desenvolvimento :warning:
</p>
## :calling: Aplicativo mobile

<p align="center">
  <img src="https://github.com/mottamatheus/elleos/blob/master/resources/images/app.gif">
</p>

## :desktop_computer: Website

<p align="center">
  <img src="https://github.com/mottamatheus/elleos/blob/master/resources/images/web.gif">
</p>

## :rocket: Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/233_Node_Js_logo-256.png" alt="nodejs" width="15" height="15"/> [Node.js][nodejs]
-  <img src="https://image.flaticon.com/icons/png/512/919/919832.png" alt="typescript" width="15" height="15"/> [TypeScript][typescript]
- <img src="https://upload-icon.s3.us-east-2.amazonaws.com/uploads/icons/png/20167174151551942641-512.png" alt="react" width="15" height="15"/> [React][reactjs]  
- <img src="https://upload-icon.s3.us-east-2.amazonaws.com/uploads/icons/png/19108918321553750384-512.png" alt="react-native" width="20" height="20"/> [React Native][rn]
-  <img src="https://image.flaticon.com/icons/svg/2772/2772128.svg" alt="sql" width="15" height="15"/> [Sql][sql]
- <img src="https://seeklogo.com/images/E/expo-logo-01BB2BCFC3-seeklogo.com.png" alt="sql" width="15" height="15" /> [Expo][expo]

## :seedling: Próximas Features

- [ ] Página de login e autenticação do usuário
- [ ] Divisão das instituições beneficentes em categorias 
- [ ] Adicionar opção de digitar o endereço completo ao invés de clicar no mapa


## :boom: Como rodar

- ### **Pré-requisitos**

  - É **obrigatório** ter **[Node.js](https://nodejs.org/en/)** instalado.
  - É **obrigatório** ter **[Git](https://git-scm.com/)** instalado.
  - Também é **obrigatório** ter um gerenciador de pacotes, seja **[NPM](https://www.npmjs.com/)** ou **[Yarn](https://yarnpkg.com/)**.
  - Para o app mobile é preciso ter **[Expo](https://expo.io/)** instalado globalmente.
  
Faça um clone do repositório:

```sh
  $ git clone https://github.com/mottamatheus/elleos.git
```

## :hammer: Backend

```sh
  # API
  $ cd backend
  # Instalando as dependências do projeto
  $ yarn install # or npm install
  
  # Configurando a database e criando as tabelas.
  $ yarn typeorm migration:run

  # Começando a API
  $ yarn dev # or npm dev

```


## :computer: Web

```sh
  # API
  $ cd web
  # Instalando as dependências do projeto
  $ yarn install # or npm install
  
  # Começo o projeto Web
  $ yarn start # or npm start
  
```

## :iphone: Mobile

Você precisa ter instalado em seu dispositivo Android/Iphone o aplicativo Expo.

```sh
  # API
  $ cd mobile
  # Instalando as dependências do projeto.
  $ yarn install # or npm install
  
  # Comece o app e use o QR code pra fazer a integração com seu dispositivo.
  $ expo start
```
