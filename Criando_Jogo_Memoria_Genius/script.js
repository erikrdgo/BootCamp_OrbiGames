//Ordem do jogo 
let order = [];
//Ordem do click
let clickedOrder = [];
let score = 0;

//0 - Verde
//1 - Vermelho
//2 - Amarelo
//3 - Azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//Sorteador de numero entre 0 - 3
let shuffleOerder  = () => {
    let colorOrder = Math.floor(Math.random() * 4);//Criando a variavel que guarda um numero a cada rodada
    order[order.length]  = colorOrder; //atribui a ordem
    clickedOrder = [];

    //Percorre o array para acender as luzes
    for(let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);//tras o numero + 1
    }
}
//acende a proxima cor e controla o tempo 
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}
//Checa se os botões clicados são os mesmo da ordem gerada no jogo
let checkOrder = () => {
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length){
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
        nextLevel();
    }
}

//Função para o click do usuario
let click  = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);
 
}

//Função que retorna a cor
let createColorElement = (color) => {
    if(color == 0){
        return green;
    }else if (color == 1){
        return red;
    }else if(color == 2){
        return yellow;
    }else if(color == 3){
        return blue;
    }
}

//Função para o proximo nivel do jogo
let nextLevel = () => {
    score++;
    shuffleOerder();
}

//Função para game over
let gameOver = () => {
    alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo`);
    order = [];
    clickedOrder = [];

    playGame();
}

//Função para inicar novamente o jogo
let playGame = () => {
    alert('Bem vindo ao Gênises! Iniciando novo jogo');
    score = 0;

    nextLevel();

}
//Adcionado envento de click no botão
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

//Inicio do jogo
playGame();