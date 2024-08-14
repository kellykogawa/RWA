import { equal } from "assert";
import userData from "../fixtures/userData.json";
import LoginPage from "../pages/loginPage";
import HomePage from "../pages/homePage";
import TransactionPage from "../pages/transactionPage";

const homePage = new HomePage();
const loginPage = new LoginPage();
const transactionPage = new TransactionPage()

describe('Enviar dinheiro com saldo suficiente', () => {
    it("Deve enviar dinheiro com sucesso", () => {
    loginPage.accessLoginPage();
    loginPage.loginWithAnyUser(userData.loginSuccess.username, userData.loginSuccess.password);
    homePage.checkHomePage();
    transactionPage.successTransaction()
  });
});

describe('Enviar dinheiro com saldo insuficiente', () => {
  it('Deve exibir mensagem de erro ao enviar dinheiro sem saldo suficiente', () => {
    loginPage.accessLoginPage();
    loginPage.loginWithAnyUser(userData.loginSuccess.username, userData.loginSuccess.password);
    homePage.checkHomePage();
    transactionPage.failTransaction()
  });
});