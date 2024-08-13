import { equal } from "assert";

describe('Login com sucesso', () => {
  it('Deve fazer login com um usuário válido', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get('[name="username"]').type('Heath93')
    cy.get('[name="password"]').type('s3cret')  
    cy.get('[type="submit"]').click()
    cy.get('[data-test="sidenav-home"]')
  });
});

describe('Tentar fazer login com credenciais inválidas', () => {
  it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get('[name="username"]').type('Test')
    cy.get('[name="password"]').type('Test')  
    cy.get('[type="submit"]').click()
    cy.get('[data-test="signin-error"]')
  });
});

describe('Registro de novo usuário com sucesso', () => {
  it('Deve registrar um novo usuário com informações válidas', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get('[data-test="signup"]').click()
    cy.location('pathname').should('equal', '/signup')
    cy.get('[name="firstName"]').type('Test')
    cy.get('[name="lastName"]').type('Test')
    cy.get('[name="username"]').type('Test')
    cy.get('[name="password"]').type('s3cret')
    cy.get('[name="confirmPassword"]').type('s3cret')
    cy.get('[data-test="signup-submit"]').click()
  });
});

describe('Tentar registrar um novo usuário com informações incompletas', () => {
  it('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get('[data-test="signup"]').click()
    cy.location('pathname').should('equal', '/signup')
    cy.get('[name="firstName"]').click()
    cy.get('[name="lastName"]').type('Test')
    cy.get('.MuiFormHelperText-contained')
    cy.get('[name="password"]').type('s3cret')
    cy.get('[name="confirmPassword"]').type('s3cret')
  });
});