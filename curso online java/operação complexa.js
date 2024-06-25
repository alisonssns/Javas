// utilizar em mensagens e não tem a necessidade de realizar comparação
// ? = (se o if for verdadeiro)
// : = (else)

const nome = "Luis";
const mensagem = `olá, ${nome == "alisson" ? "acesso autorizado" : "acesso negado" }`;

const salario = -100;
const mensagem2 = `Seu saldo atual é ${salario > 0 ? `RS ${salario}` : "negativo"}`;

console.log (mensagem);
console.log (mensagem2);