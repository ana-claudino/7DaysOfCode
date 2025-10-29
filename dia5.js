/*Então hoje, para facilitar a sua ida ao supermercado, você deve criar um programa em Javascript que perguntará se você deseja adicionar uma comida na sua lista de compras, e você deve poder responder com sim ou não.

Em seguida, ele perguntará qual comida você deseja inserir, e você digitará o nome dela, como por exemplo batata.

Depois, ele deverá perguntar em qual categoria essa comida se encaixa, com algumas opções já pré-definidas, como frutas, laticínios, congelados, doces e o que mais você achar interessante. Assim, você poderá separar tudo no seu devido grupo.

Por fim, caso você não queira mais adicionar nada na lista de compras e responder não na primeira pergunta, ele irá exibir uma lista com todos os itens agrupados, da seguinte forma:

Caso você adicione na sua lista:
banana, leite em pó, tomate, leite vegetal, chiclete, bala de ursinho, maçã, uva, abacate e leite de vaca

O programa deverá imprimir, por exemplo:

Lista de compras:
    Frutas: banana, tomate, maçã, uva, abacate
    Laticínios: leite vegetal, leite de vaca, leite em pó
    Congelados: sorvete, polpa de fruta, açaí
    Doces: chiclete e bala de ursinho*/

let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];
let outros = [];

let resposta = prompt('Deseja adicionar algo na sua lista? Responda Sim ou Não');

while (resposta.toLowerCase() === 'sim') {
    let item = prompt('O que quer adicionar?');

    let categoria = prompt(
        "Em qual categoria esse item se encaixa?\n" +
        "1 - Frutas\n" +
        "2 - Laticínios\n" +
        "3 - Congelados\n" +
        "4 - Doces\n" +
        "5 - Outros"
        );

        switch (categoria) {
            case '1':
                frutas.push(item);
                break;
            case "2":
                laticinios.push(item);
                break;
            case "3":
                congelados.push(item);
                break;
            case "4":
                doces.push(item);
                break;
            case "5":
                outros.push(item);
                break;
            default:
                alert("Categoria inválida! O item foi adicionado em 'Outros'.");
                outros.push(item);

        }

        resposta.toLowerCase() = prompt('Deseja adicionar mais algum item? Responda Sim ou Não');
}

alert(
  "Lista de compras:\n\n" +
  `Frutas: ${frutas.join(", ") || "nenhuma"}\n` +
  `Laticínios: ${laticinios.join(", ") || "nenhum"}\n` +
  `Congelados: ${congelados.join(", ") || "nenhum"}\n` +
  `Doces: ${doces.join(", ") || "nenhum"}\n` +
  `Outros: ${outros.join(", ") || "nenhum"}`
);