/*Neste último desafio, a minha proposta para você é: crie a sua própria calculadora, porém com um detalhe muito importante: cada operação deverá ser uma função diferente no seu código.

Primeiramente, a pessoa deverá escolher uma opção de operação impressa pelo programa na tela.

Depois, ela deverá inserir os dois valores que deseja utilizar, e o programa imprimirá o resultado da operação em questão.

As opções disponíveis deverão ser: soma, subtração, multiplicação, divisão, e sair. Nessa última, o programa deverá parar de ser executado, mostrando uma mensagem "Até a próxima".*/

let operationChoice;

let num1;
let num2;

function add(num1, num2) {
    let aResult = num1 + num2;
    alert(aResult);
}

function subtract(num1, num2) {
    let sResult = num1 - num2;
    alert(sResult);
}

function multiply(num1, num2) {
    let mResult = num1 * num2;
    alert(mResult);
}

function division(num1, num2) {
    let dResult = num1 / num2;
    alert(dResult);
}

function askForNumbers() {
    num1 = parseInt(prompt('Digite o primeiro número'));
    num2 = parseInt(prompt('Digite o segundo número'));
}

function leave() {
    alert('Operação encerrada');
}

do {
   operationChoice = prompt('Por favor escolha qual operação deseja realizar:\n\n' +
    '1 - Adição\n' +
    '2 - Subtração\n' +
    '3 - Multiplicação\n' +
    '4 - Divisão\n' +
    '5 - Sair');

switch (operationChoice) {
    case '1':
        askForNumbers();
        add(num1, num2);
        break;
    case '2':
        askForNumbers();
        subtract(num1, num2);
        break;
    case '3':
        askForNumbers();
        multiply(num1, num2);
        break;
    case '4':
        askForNumbers();
        division(num1, num2);
        break;
    case '5':
        leave();
        break;
    default:
        alert('Escolha inválida!');
        break;
    }
} while (operationChoice !==5);