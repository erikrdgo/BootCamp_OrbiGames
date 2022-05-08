/* Função que reotorna o nome dos membros de um MAP que tem 'ADMIN' no sistema */

const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr)
{
    const mySet = new Set(arr);

    return [...mySet];

}

console.log(valoresUnicos(meuArray));

/* Para executar o Scrip abrir o terminal e digitar "node script.js" 
   Para executar o comando o Node.js precisa estar instalado */


