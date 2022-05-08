/* Função que reotorna o nome dos membros de um MAP que tem 'ADMIN' no sistema */

function getAdmins (map)
{
    let admins = [] ;

    for([key, value] of map)
    {
        if(value === 'Admin')
        {
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Erik','Admin');
usuarios.set( 'Leticia', 'Admin');
usuarios.set('Natália', 'User');
usuarios.set('janaina', 'Admin');

console.log(getAdmins(usuarios));

/* Para executar o Scrip abrir o terminal e digitar "node script.js" 
   Para executar o comando o Node.js precisa estar instalado */


