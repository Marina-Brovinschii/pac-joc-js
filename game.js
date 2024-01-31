const mapSize = 10

let pac_x = parseInt(1 + Math.random() * mapSize)
let pac_y = parseInt(1 + Math.random() * mapSize)

let coin_x = parseInt(1 + Math.random() * mapSize)
let coin_y = parseInt(1 + Math.random() * mapSize)
let coin1_x = parseInt(1 + Math.random() * mapSize)
let coin1_y = parseInt(1 + Math.random() * mapSize)
let coin2_x = parseInt(1 + Math.random() * mapSize)
let coin2_y = parseInt(1 + Math.random() * mapSize)
let coin3_x = parseInt(1 + Math.random() * mapSize)
let coin3_y = parseInt(1 + Math.random() * mapSize)

let bomb_x = parseInt(1 + Math.random() * mapSize)
let bomb_y = parseInt(1 + Math.random() * mapSize)
let bomb1_x = parseInt(1 + Math.random() * mapSize)
let bomb1_y = parseInt(1 + Math.random() * mapSize)
let bomb2_x = parseInt(1 + Math.random() * mapSize)
let bomb2_y = parseInt(1 + Math.random() * mapSize)

let score=0

const minX=1
const minY=1
const maxX=10
const maxY=10

let coin_state = true
let bomb_state = true

function action() {
    switch (event.key) {
        case "ArrowDown": if (pac_y < maxY) pac_y++; break
        case "ArrowUp":   if (pac_y > minY) pac_y--; break
        case "ArrowRight":if (pac_x < maxX) pac_x++; break
        case "ArrowLeft": if (pac_x > minX) pac_x--; break
    }

    if(pac_x==coin_x && pac_y==coin_y && coin_state) {
        score +=10
        coin_state = false
        coin_x = parseInt(1 + Math.random() * mapSize);
        coin_y = parseInt(1 + Math.random() * mapSize);
        coin_state = true; 
    }
    if (pac_x == coin1_x && pac_y == coin1_y && coin_state) {
        score += 10
        coin_state = false
        coin1_x = parseInt(1 + Math.random() * mapSize);
        coin1_y = parseInt(1 + Math.random() * mapSize);
        coin_state = true;
    }
    if (pac_x == coin2_x && pac_y == coin2_y && coin_state) {
        score += 10
        coin_state = false
        coin2_x = parseInt(1 + Math.random() * mapSize);
        coin2_y = parseInt(1 + Math.random() * mapSize);
        coin_state = true;
    }
    if (pac_x == coin3_x && pac_y == coin3_y && coin_state) {
        score += 10
        coin_state = false
        coin3_x = parseInt(1 + Math.random() * mapSize);
        coin3_y = parseInt(1 + Math.random() * mapSize);
        coin_state = true;
    }

    if (pac_x == bomb_x && pac_y == bomb_y && bomb_state) {
        score -= 10
        bomb_state = false
        bomb_x = parseInt(1 + Math.random() * mapSize);
        bomb_y = parseInt(1 + Math.random() * mapSize);
        bomb_state = true; 
    }
    if (pac_x == bomb1_x && pac_y == bomb1_y && bomb_state) {
        score -= 10
        bomb_state = false
        bomb1_x = parseInt(1 + Math.random() * mapSize);
        bomb1_y = parseInt(1 + Math.random() * mapSize);
        bomb_state = true;
    }
    if (pac_x == bomb2_x && pac_y == bomb2_y && bomb_state) {
        score -= 10
        bomb_state = false
        bomb2_x = parseInt(1 + Math.random() * mapSize);
        bomb2_y = parseInt(1 + Math.random() * mapSize);
        bomb_state = true;
    }

    renderMap()
}

function renderMap() {
    gameMap.innerHTML = ``
    for (let y=1; y<=10; y++) {
        for(let x=1; x<=10; x++) {
            if(x==pac_x && y==pac_y) {
                gameMap.innerHTML += `<div class="pac"></div>`
            } else if (x == coin_x && y == coin_y) {
                gameMap.innerHTML += `<div class="coin"></div>`
            } else if (x == coin1_x && y == coin1_y) {
                gameMap.innerHTML += `<div class="coin1"></div>`
            } else if (x == coin2_x && y == coin2_y){
                gameMap.innerHTML += `<div class="coin2"></div>`
            } else if (x == coin3_x && y == coin3_y) {
                gameMap.innerHTML += `<div class="coin3"></div>`
            }else if (x == bomb_x && y == bomb_y) {
                gameMap.innerHTML += `<div class="bomb"></div>`
            } else if (x == bomb1_x && y == bomb1_y) {
                gameMap.innerHTML += `<div class="bomb1"></div>`
            } else if (x == bomb2_x && y == bomb2_y) {
                gameMap.innerHTML += `<div class="bomb2"></div>`
            }else {
                gameMap.innerHTML += `<div></div>`
            }
        }
    }

    gameScore.innerHTML = `Score: ${score}`
}

renderMap()



//* 2-3 coin, 2-3 bomb
