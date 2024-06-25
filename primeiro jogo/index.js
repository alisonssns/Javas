let player = 2;
let game = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];
let gameProgress = false;
let vencedores = 1;

function mark(choice) {
    if(game[choice[0]][choice[1]] === 1 || game[choice[0]][choice[1]] === 2){
        return;
    }else if(gameProgress == true){
        return;
    }

    let text = choice.join("");
    let element = document.getElementById(text);
    if (player === 2) {
        element.style.color = "#455d7a";
        element.innerHTML = 'X';
        game[choice[0]][choice[1]] = 1;
        player = 1;
    } else {
        element.style.color = "#455d7a"
        element.innerHTML = 'O';
        game[choice[0]][choice[1]] = 2;
        player = 2;
    }
    checkWinner();
    console.log(game);
}

function checkWinner() {
    for (let i = 0; i < 3; i++) {
        if (game[i][0] !== 0 && game[i][0] === game[i][1] && game[i][1] === game[i][2]) {
            gameProgress = true;
            final()
            return;
        }

        if (game[0][i] !== 0 && game[0][i] === game[1][i] && game[1][i] === game[2][i]) {
            gameProgress = true;
            final()
            return;
        }
    }

    if (game[0][0] !== 0 && game[0][0] === game[1][1] && game[1][1] === game[2][2]) {
        gameProgress = true;
        final()
        return;
    }

    if (game[0][2] !== 0 && game[0][2] === game[1][1] && game[1][1] === game[2][0]) {
        gameProgress = true;
        final()
        return;
    }

    
    if (!game.flat().includes(0)) {
        gameProgress = true;
        final('empate')
        return
    }
}

function final(test){
    let mensagemV = document.getElementById('game')
    let mensagem = document.querySelector('.mensagem');
    let resposta = document.getElementById('resposta')
    mensagem.style.transition = "0.5s ease";
    mensagem.style.transform = "translateY(0px)";
    if(test === 'empate'){
        mensagemV = 'Empate';
    }else{
        mensagemV = `Player ${player} vence!`;
        resposta.innerHTML = mensagemV;
        let venc = document.querySelector(`.venc${vencedores}`)
        venc.innerHTML = "Player " + player;
        vencedores++
    }

}

function resetGame() {
    let mensagem = document.querySelector('.mensagem');
    mensagem.style.transform = "translateY(-500px)";
    gameProgress = false;
    player = 2;
    game = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            document.getElementById(`${i}${j}`).innerHTML = '';
        }
    }
}
