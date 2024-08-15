import { equal } from "assert";
import userData from "../fixtures/userData.json";
import LoginPage from "../pages/loginPage";
import HomePage from "../pages/homePage";
import TransactionPage from "../pages/transactionPage";
import HistoryPage from "../pages/historyPage";
import SignupPage from "../pages/signupPage";
import NewAccountPage from "../pages/newaccountPage";

const homePage = new HomePage();
const loginPage = new LoginPage();
const transactionPage = new TransactionPage();
const historyPage = new HistoryPage();
const signupPage = new SignupPage();
const newaccountPage = new NewAccountPage()

describe('Visualizar histórico de transações com sucesso', () => {
    it('Deve exibir o histórico de transações de um usuário corretamente', () => {
        loginPage.accessLoginPage();
        loginPage.loginWithAnyUser(userData.loginSuccess.username, userData.loginSuccess.password);
        homePage.checkHomePage();
        transactionPage.successTransaction()
        historyPage.checkHistory()
        historyPage.fullHistory()
    });
  });



describe('Tentar visualizar o histórico de transações sem transações anteriores', () => {
    it('Deve exibir uma mensagem indicando que o usuário não possui transações anteriores', () => {
        loginPage.accessLoginPage();
        loginPage.accessSignupPage();
        signupPage.signupUser(
            userData.signupSuccess.firstname,
            userData.signupSuccess.lastname,
            userData.signupSuccess.username,
            userData.signupSuccess.password,
            userData.signupSuccess.password
        );
        loginPage.loginWithAnyUser(userData.signupSuccess.username, userData.signupSuccess.password);
        /* newaccountPage.registerNewBank(); */ //first time login with new user
        historyPage.checkHistory();
        historyPage.emptyHistory()
  });
});