import { equal } from "assert"
import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import SignupPage from "../pages/signupPage"

const loginPage = new LoginPage()
const signupPage = new SignupPage()


describe('Registro de novo usuário com sucesso', () => {
  it('Deve registrar um novo usuário com informações válidas', () => {
    loginPage.accessLoginPage()
    loginPage.accessSignupPage()
    signupPage.signupUser(userData.signupSuccess.firstname, userData.signupSuccess.lastname, userData.signupSuccess.username, userData.signupSuccess.password, userData.signupSuccess.password)
  });
});

describe('Tentar registrar um novo usuário com informações incompletas', () => {
  it.only('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => {
    loginPage.accessLoginPage()
    loginPage.accessSignupPage()
    signupPage.failSignupUser(userData.signupFail.firstname, userData.signupFail.lastname, userData.signupFail.username, userData.signupFail.password, userData.signupFail.password)
    signupPage.checkFailSignup()

  });
});