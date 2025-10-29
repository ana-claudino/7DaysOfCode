/*Seu desafio de hoje é criar os destinos possíveis de um jogo, em que o usuário consiga escolher:

1. Se quer seguir para área de Front-End ou seguir para a área de Back-End.

2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.

3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack. Você deve exibir na tela uma mensagem específica para cada escolha.

4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer. Aqui, a pessoa pode responder N tecnologias, uma de cada vez. Então, enquanto ela continuar respondendo ok para a pergunta: “Tem mais alguma tecnologia que você gostaria de aprender?”, continue apresentando para ela o Prompt, para que ela complete o nome da tecnologia em questão. E, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida.

O importante é que a pessoa que estiver jogando possa sempre escolher qual decisão tomar para conseguir aprender e se desenvolver na área de programação.

Além disso, também é essencial que, ao final do jogo, ela possa inserir quantas tecnologias quiser na lista de aprendizado.*/

let frontOuBack = prompt('Qual área você gostaria de seguir? Responda 1 para Front-end ou 2 para Back-end');

let aprenderNaArea = frontOuBack === '1' ? 'React ou Vue?' : frontOuBack === '2' ? 'C# ou Java?' : null;

if (!aprenderNaArea) {
  alert('Resposta inválida');
} else {
  let respostaSimNao = prompt(`Que legal! E quer seguir aprendendo ${aprenderNaArea}? (Responda Sim ou Não)`);

  respostaSimNao.toLowerCase() === 'sim' ? alert('Que bom, continue estudando que você vai longe!') : alert('Poxa que pena :( mas você vai se encontrar!');

  let tecnologias = prompt('Tem mais alguma tecnologia que você gostaria de conhecer/aprender?');

  while (tecnologias.toLowerCase() !== 'não') {
    alert(`Legal, ${tecnologias} é uma ótima escolha!`);
    tecnologias = prompt('Tem mais alguma tecnologia que você gostaria de aprender?');
  }

  alert('Boa sorte na sua jornada!');
}