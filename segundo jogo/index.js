const spriteImages = [
    '/segundo jogo/personagens/Samurai/idle.png',
    '/segundo jogo/personagens/Samurai/attack_1.png',
    '/segundo jogo/personagens/Samurai/attack_2.png',
    '/segundo jogo/personagens/Samurai/attack_3.png',
    '/segundo jogo/personagens/Samurai/shield.png',
    '/segundo jogo/personagens/Samurai/hurt.png',
    '/segundo jogo/personagens/Samurai/dead.png',
    '/segundo jogo/personagens/Shinobi/idle.png',
    '/segundo jogo/personagens/Shinobi/attack_1.png',
    '/segundo jogo/personagens/Shinobi/attack_2.png',
    '/segundo jogo/personagens/Shinobi/attack_3.png',
    '/segundo jogo/personagens/Shinobi/shield.png',
    '/segundo jogo/personagens/Shinobi/hurt.png',
    '/segundo jogo/personagens/Shinobi/dead.png',
    '/segundo jogo/slashs/5/1.png',
    '/segundo jogo/slashs/5/2.png',
    '/segundo jogo/slashs/5/3.png',
    '/segundo jogo/slashs/5/4.png',
    '/segundo jogo/slashs/5/5.png',
    '/segundo jogo/slashs/5/6.png',
    '/segundo jogo/slashs/5/7.png',
    '/segundo jogo/slashs/5/8.png',
    '/segundo jogo/slashs/5/9.png',
    '/segundo jogo/slashs/5/10.png'
];

const preloadImages = (images) => {
    images.forEach((image) => {
        const img = new Image();
        img.src = image;
    });
};

preloadImages(spriteImages);

let player = document.querySelector('.player');
let hp1 = document.querySelector('.hp1');
let enemy = document.querySelector('.enemy');
let hp2 = document.querySelector('.hp2');
let slash = document.querySelector('.slash');
let num1 = document.querySelector('.dmg');
let num2 = document.querySelector('.dmgE');
let positionX = -40;
let positionEx = -40;
let attack;
let attackE;
let playerDmg = 0;
let Dmg;
let enemyDmg = 0;
let i = 0;
let enemyAction;
let dmg;
let action;
let maxRange;
let enemyChoice;
let last;

const idle = setInterval(() => {
    positionX -= 300;
    if (positionX > -1600) {
        player.style.backgroundPositionX = `${positionX}px`;
    } else {
        positionX = -40;
        player.style.backgroundPositionX = `${positionX}px`;
    }
}, 120);

const idleE = setInterval(() => {
    positionEx -= 300;
    if (positionEx > -600) {
        enemy.style.backgroundPositionX = `${positionEx}px`;
    } else {
        positionEx = -40;
        enemy.style.backgroundPositionX = `${positionEx}px`;
    }
}, 150);

const attacks = (choice) => {
    clearInterval(idle);
    clearInterval(attack);

    if (choice === 1) {
        action = "attack_1";
        maxRange = -1600;
        dmg = (Math.floor(Math.random() * 5) + 1) * 25;
    } else if (choice === 2) {
        action = "attack_2";
        maxRange = -1200;
        dmg = (Math.floor(Math.random() * 2) + 1) * 40;
    } else if (choice === 3) {
        action = "attack_3";
        maxRange = -900;
        dmg = (Math.floor(Math.random() * 1) + 1) * 70;
    } else if (choice === 4) {
        action = "0";
        maxRange = -1200;
        dmg = (Math.floor(Math.random() * 1) + 1) * 700;
        kill()
    }

    positionX = -40;
    player.style.backgroundPositionX = `${positionX}px`;
    player.style.backgroundImage = `url('/segundo jogo/personagens/Samurai/${action}.png')`;
    attack = setInterval(() => {
        positionX -= 300;
        if (positionX > maxRange) {
            player.style.backgroundPositionX = `${positionX}px`;
        } else {
            positionX = -40;
            player.style.backgroundPositionX = `${positionX}px`;
            player.style.backgroundImage = "url('/segundo jogo/personagens/Samurai/idle.png')";
        }
    }, 150);

    setTimeout(() => {
        enemyHurt();
    }, Math.abs(maxRange) - 800);

    last = setTimeout(() => {
        enemyAttack();
    }, 1600);
};

const enemyHurt = () => {
    let shieldChoice = Math.floor(Math.random() * 4) + 1;
    clearInterval(idleE);
    clearInterval(attackE);
    positionEx = -40;
    enemy.style.backgroundPositionX = `${positionEx}px`;

    if (shieldChoice == 4) {
        enemy.style.backgroundImage = "url('/segundo jogo/personagens/Shinobi/shield.png')";
        enemyDmg += (dmg / 2);
        num2.textContent = (dmg / 2);
        num2.style.animation = "damageAnimation 1s linear";
        hp2.style.marginLeft = `${(enemyDmg)}px`;
        const shield = setInterval(() => {
            positionEx -= 300;
            if (positionEx > -600) {
                enemy.style.backgroundPositionX = `${positionEx}px`;
            } else {
                positionEx = -40;
                enemy.style.backgroundPositionX = `${positionEx}px`;
                enemy.style.backgroundImage = "url('/segundo jogo/personagens/Shinobi/idle.png')";
                clearInterval(shield);
                if (enemyDmg >= 600) {
                    deathEnemy();
                }
            }
        }, 150);
    } else {
        enemy.style.backgroundImage = "url('/segundo jogo/personagens/Shinobi/hurt.png')";
        enemyDmg += dmg;
        num2.textContent = (dmg);
        num2.style.animation = "damageAnimation 1s linear";
        hp2.style.marginLeft = `${(enemyDmg)}px`;
        const hurtE = setInterval(() => {
            positionEx -= 300;
            if (positionEx > -600) {
                enemy.style.backgroundPositionX = `${positionEx}px`;
            } else {
                positionEx = -40;
                enemy.style.backgroundPositionX = `${positionEx}px`;
                enemy.style.backgroundImage = "url('/segundo jogo/personagens/Shinobi/idle.png')";
                clearInterval(hurtE);

                if (enemyDmg >= 600) {
                    deathEnemy();
                }
            }
        }, 150);
    }

    setTimeout(()=>{
        num2.style.animation = "none";
    },1200)

};

const enemyAttack = () => {
    enemyChoice = Math.floor(Math.random() * 3) + 1;
    let maxRangeE = 0
    if (enemyChoice === 1) {
        enemyAction = "attack_1";
        maxRangeE = -1200;
        Dmg = (Math.floor(Math.random() * 5) + 1) * 25;
    } else if (enemyChoice === 2) {
        enemyAction = "attack_2";
        maxRangeE = -600;
        Dmg = (Math.floor(Math.random() * 2) + 1) * 40;
    } else if (enemyChoice === 3) {
        enemyAction = "attack_3";
        maxRangeE = -900;
        Dmg = (Math.floor(Math.random() * 1) + 1) * 70;
    }

    clearInterval(attackE);
    positionEx = -40;
    enemy.style.backgroundPositionX = `${positionEx}px`;
    enemy.style.backgroundImage = `url('/segundo jogo/personagens/Shinobi/${enemyAction}.png')`;

    attackE = setInterval(() => {
        positionEx -= 300;
        if (positionEx > maxRangeE) {
            enemy.style.backgroundPositionX = `${positionEx}px`;
        } else {
            positionEx = -40;
            enemy.style.backgroundPositionX = `${positionEx}px`;
            enemy.style.backgroundImage = "url('/segundo jogo/personagens/Shinobi/idle.png')";
        }
    }, 150);

    let shieldChoice = Math.floor(Math.random() * 4) + 1;

    if (shieldChoice === 4) {
        setTimeout(() => {
            playerShield();
        }, Math.abs(maxRangeE) - 400);
    } else {
        setTimeout(() => {
            playerHurt();
        }, Math.abs(maxRangeE) - 400);
    }
};

const playerShield = () => {
    positionX = -40;
    player.style.backgroundPositionX = `${positionX}px`;
    player.style.backgroundImage = "url('/segundo jogo/personagens/Samurai/shield.png')";
    playerDmg += (Dmg / 2);
    num1.textContent = (Dmg / 2);
    num1.style.animation = "damageAnimation 1s linear";
    hp1.style.marginRight = `${(playerDmg)}px`;
    const hurtPlayer = setInterval(() => {
        positionX -= 300;
        if (positionX > -600) {
            player.style.backgroundPositionX = `${positionX}px`;
            
        } else {
            positionX = -40;
            player.style.backgroundPositionX = `${positionX}px`;
            player.style.backgroundImage = "url('/segundo jogo/personagens/Samurai/idle.png')";
            clearInterval(hurtPlayer);
            if (playerDmg >= 600) {
                deathPlayer();
            }
        }
    }, 300);

    setTimeout(()=>{
        num1.style.animation = "none";
    },1200)
};

const playerHurt = () => {
    positionX = -40;
    player.style.backgroundPositionX = `${positionX}px`;
    player.style.backgroundImage = "url('/segundo jogo/personagens/Samurai/hurt.png')";
    playerDmg += Dmg;
    hp1.style.marginRight = `${(playerDmg)}px`;
    num1.textContent = Dmg;
    num1.style.animation = "damageAnimation 1s linear";
    const hurtPlayer = setInterval(() => {
        positionX -= 300;
        if (positionX > -600) {
            player.style.backgroundPositionX = `${positionX}px`;
        } else {
            positionX = -40;
            player.style.backgroundPositionX = `${positionX}px`;
            player.style.backgroundImage = "url('/segundo jogo/personagens/Samurai/idle.png')";
            clearInterval(hurtPlayer);
            if (playerDmg >= 600) {
                deathPlayer();
            }
        }
    }, 150);

    setTimeout(()=>{
        num1.style.animation = "none";
    },1200)
};

function deathPlayer() {
    clearInterval(idle);
    clearInterval(attack);

    positionX = -40;
    player.style.backgroundPositionX = `${positionX}px`;
    player.style.backgroundImage = "url('/segundo jogo/personagens/Samurai/dead.png')";
    setTimeout(() => {
        const deathPlayerInterval = setInterval(() => {
            positionX -= 300;
            if (positionX > -300) {
                player.style.backgroundPositionX = `${positionX}px`;
            } else {
                positionX = -300;
                player.style.backgroundPositionX = `${positionX}px`;
                clearInterval(deathPlayerInterval);
            }
        }, 500);
    }, 1000)
}

function deathEnemy() {
    clearInterval(idleE);
    clearInterval(attackE);
    clearTimeout(last);

    positionEx = -40;
    enemy.style.backgroundPositionX = `${positionX}px`;
    enemy.style.backgroundImage = "url('/segundo jogo/personagens/Shinobi/dead.png')";
    setTimeout(() => {
        const deathEnemyInterval = setInterval(() => {
            positionEx -= 300;
            if (positionEx > -900) {
                enemy.style.backgroundPositionX = `${positionEx}px`;
            } else {
                positionEx = -900;
                enemy.style.backgroundPositionX = `${positionEx}px`;
                clearInterval(deathEnemyInterval);
            }
        }, 500);
    }, 1000)
}

function kill() {
    document.documentElement.style.filter = "brightness(60%)";
    setTimeout(() => {
        document.documentElement.style.filter = "none";
    }, 1000);

    document.body.classList.add('shake');
    setTimeout(() => {
        document.body.classList.remove('shake');
    }, 500);
    
    let i = 0;
    
    setInterval(() => {
        if (i < 10){
            i++;
            let kills = document.querySelector(".kill");
            kills.style.backgroundImage = `url('/segundo jogo/slashs/5/${i}.png')`;
        }
    }, 80);
}


function Main(){
    let choiceMain;
    if (chocie == 1){}
    else if(choice == 2){}
    else if (choice == 3){}
    else if (choice == 4){}
}