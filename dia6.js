/*Você deverá criar a opção de remover algum item da lista, que será exibida junto à pergunta de “você deseja adicionar uma comida na lista de compras”?

A partir daí, caso a pessoa escolha essa opção, o programa irá imprimir os elementos presentes na lista atual, e a pessoa deverá escrever qual deles deseja remover.

Depois disso, o programa irá remover o elemento da lista e imprimir a confirmação de que o item realmente não está mais lá.

Por fim, ele voltará para o ciclo inicial de perguntas.

Se, na hora de deletar o item, o mesmo não for encontrado na lista, você deverá exibir uma mensagem avisando isso.

Por exemplo: “Não foi possível encontrar o item dentro da lista!”

Lembre-se que a opção de remover um item só deverá estar disponível a partir do momento que existir ao menos um elemento dentro da lista de compras*/

let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];
let outros = [];

let resposta = prompt('Deseja adicionar algo na sua lista? Responda Sim ou Não');


if (resposta.toLowerCase() === 'sim') {
    let item = prompt('O que quer adicionar?');

    let categoria = prompt(
        'Em qual categoria esse item se encaixa?\n' +
        '1 - Frutas\n' +
        '2 - Laticínios\n' +
        '3 - Congelados\n' +
        '4 - Doces\n' +
        '5 - Outros'
        );

        switch (categoria) {
            case '1':
                frutas.push(item);
                break;
            case '2':
                laticinios.push(item);
                break;
            case '3':
                congelados.push(item);
                break;
            case '4':
                doces.push(item);
                break;
            case '5':
                outros.push(item);
                break;
            default:
                alert('Categoria inválida! O item foi adicionado em "Outros".');
                outros.push(item);

        }

                let acao = prompt('Gostaria de:\n' + '1 - Adicionar mais um item\n' + '2 - Remover um item' + '3 - Sair');

                while (acao !== '3') {
                    switch (acao) {
                    case '1':
                        item = prompt('O que quer adicionar?');

                        categoria = prompt(
                            'Em qual categoria esse item se encaixa?\n' +
                            '1 - Frutas\n' +
                            '2 - Laticínios\n' +
                            '3 - Congelados\n' +
                            '4 - Doces\n' +
                            '5 - Outros'
                            );

                        switch (categoria) {
                            case '1':
                                frutas.push(item);
                                break;
                            case '2':
                                laticinios.push(item);
                                break;
                            case '3':
                                congelados.push(item);
                                break;
                            case '4':
                                doces.push(item);
                                break;
                            case '5':
                                outros.push(item);
                                break;
                            default:
                                alert('Categoria inválida! O item foi adicionado em "Outros".');
                                outros.push(item);

                        }
                    break;
            
                    case '2':
                        let listaTemp ='Lista de compras:\n\n' +
                        `Frutas: ${frutas.join(', ') || 'nenhuma'}\n` +
                        `Laticínios: ${laticinios.join(', ') || 'nenhum'}\n` +
                        `Congelados: ${congelados.join(', ') || 'nenhum'}\n` +
                        `Doces: ${doces.join(', ') || 'nenhum'}\n` +
                        `Outros: ${outros.join(', ') || 'nenhum'}`;

                        let listas = [frutas, laticinios, congelados, doces, outros];

                        let remover = prompt(`Qual item gostaria de remover?\n\n
                            ${listaTemp}`);
                        
                        for (let i = 0; i < listas.length; i++) {
                            let categoriaAtual = listas[i];

                             if (categoriaAtual.indexOf(remover) !== -1) {                         
                                categoriaAtual.splice(categoriaAtual.indexOf(remover), 1);
                            }
                        }
                    break;
        
                default:
                    alert('Ação inválida!');
                    break;
                };

                acao = prompt('Gostaria de:\n' + '1 - Adicionar mais um item\n' + '2 - Remover um item' + '3 - Sair');
        }

        
}

alert(
  'Lista de compras:\n\n' +
  `Frutas: ${frutas.join(', ') || 'nenhuma'}\n` +
  `Laticínios: ${laticinios.join(', ') || 'nenhum'}\n` +
  `Congelados: ${congelados.join(', ') || 'nenhum'}\n` +
  `Doces: ${doces.join(', ') || 'nenhum'}\n` +
  `Outros: ${outros.join(', ') || 'nenhum'}`
);

