# language: pt

Funcionalidade: Cadastro

Como uma pessoa qualquer
Desejo me cadastrar no sistema
Para conseguir avaliar filmes

Contexto: Deve ter acessado a funcionalidade de cadastro
Dado que acessei a página de criação de usuário


Cenário: Criação de usuário informando os dados 
  Quando informar um novo nome válido
  E informar um novo e-mail válido
  E Informo uma senha válida 
  E confirmo a operação
  Então o usuário será cadastrado com sucesso


Esquema do Cenário: Não deve ser possível cadastrar e-mails inválidos
  Quando informar um novo nome válido
  E informar o e-mail "<email>"
  E Informo uma senha válida 
  E confirmo a operação
  Então o usuário não será cadastrado
  Exemplos:
  |email|
  |@.com|
  |meuemail@teste|
  |.com|


