import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { Cadastropage } from "../pages/cadastrarUsuario";
import { faker } from "@faker-js/faker";
const Paginacadastro = new Cadastropage();

Given('que acessei a página de criação de usuário', function () {
  cy.visit('/register');
});


When('informar um novo nome válido', function () {
   const nome = faker.person.fullName();
   Paginacadastro.typeNome(nome);
 });

 When('informar um novo e-mail válido', function () {
   const email = faker.internet.email();
   Paginacadastro.typeEmail(email);
 });
 

When('Informo uma senha válida', function () {
     password = Paginacadastro.typeSenha();
    
   });


   When('informar o e-mail {string}', function (email) {
    Paginacadastro.typeEmail(email);
     
    });
 
When('confirmo a operação', function () {
    Paginacadastro.apertarCadastrar();
});
 

Then('o usuário será cadastrado com sucesso', function () {
   Paginacadastro.apertarCadastrar();
      
});

Then('o usuário não será cadastrado', function () {
    
         
   });
   
 



