/*Você deve criar um programinha que comece com um valor específico pré-definido entre 0 a 10 para o número que você vai adivinhar (7, por exemplo).

Em seguida, o programa vai perguntar para você qual o valor que você deseja chutar e, caso você acerte, ele irá te parabenizar. Caso erre, ele vai te dar mais 2 tentativas.

No fim, caso você não acerte nenhuma vez, ele vai imprimir qual era o número inicial.

Depois que o programinha estiver funcionando, tente usar um número randômico em vez de um número pré-definido.*/

let numero = gerarNumero();
let tentativas = 1;

function vertificarChute() {

    while (tentativas <= 3) { //o if era dentro do while e não o contrário
        let chute = prompt('Insira um valor de 0 a 10');

        if (parseInt(chute) === numero) {
            alert('Parabéns, você acertou!');
            return; //break só em loopings
        } else {
            alert('Errou! Tente novamente'); //alert pois o prompt já está no looping
            tentativas++;
        }
    }

    alert(`Acabaram as tentativas! O número era ${numero}`)
}


function gerarNumero() {
    Math.floor(Math.random() * (10 - 0 + 1) + 0); //não precisa de parseInt pois Math.floor já dá numero inteiro

}

/*Resposta da moça do desafio:

const numeroAdivinhacao = Math.floor(Math.random() * (10 - 0 + 1) + 0);
let chute = "";
let acertou = false;

for(let contador = 0; contador < 3; contador++){    
    chute = prompt("Tente adivinhar o número de 0 a 10:");
    if(chute == numeroAdivinhacao){
        alert(`Parabéns, você acertou! O número era ${numeroAdivinhacao}.`);
        acertou = true;
        break;
    }
    alert("Errado!");
}
if(!acertou){
    alert(`Infelizmente, você não acertou. O número era ${numeroAdivinhacao}!`);
}
*/