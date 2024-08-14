import { equal } from "assert"
import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import HomePage from "../pages/homePage"; 

const homePage = new HomePage()
const loginPage = new LoginPage()

describe('Login com sucesso', () => {
  it('Deve fazer login com um usuário válido', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.loginSuccess.username, userData.loginSuccess.password)
    homePage.checkHomePage()
  });
});

describe('Tentar fazer login com credenciais inválidas', () => {
  it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.loginFail.username, userData.loginFail.password)
    loginPage.checkAccessInvalid()
  });
});