/*FUNÇÃO QUE RECEBE UM LISTA DE PREÇOS E UM NUMERO REPRESENTANDO O SALDO DISPONIVEL.
CALCULE QUAL SERÁ O SALDO RFINAL APÓS SUBTRAIR TODOS OS PREÇOS DA LISTA ENVIADA */

const lista = 
[
    {
        name: 'sabao em po',
        preco: 30.
    },

    {
        name: 'cereal',
        preco: 12,
    },

    {
        name: 'toalha',
        preco: 30,
    },
];

const saldoDiponivel = 100;

function calculaSaldo(saldoDiponivel, lista)
{
    return lista.reduce(function (prev,  current)
    {
        return prev - current.preco;
    }, saldoDiponivel);
}

console.log(calculaSaldo(saldoDiponivel, lista));