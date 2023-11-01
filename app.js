const Gameboard = (() => {
    let gameboard = ["","","","","","","","",""];

    const render = () =>{
       let boardHTML = "";
        gameboard.forEach((square, index) => {
            boardHTML += `<div class= "square" id= "square-${index}">${square}</div>`
        })

        document.querySelector('.game-board').innerHTML = boardHTML;
    }
        return {
            render,
        }
    
})();


const createPlayer = (name,mark)=>{
 return{
        mark,
        name

 }
}

const Game = (()=>{
        let players = [];
        let currentPlayerIndex;
        let gameOver;
        const start = () =>{
            players= [
                createPlayer(document.querySelector('#o').id,'o'),
                createPlayer(document.querySelector('#x').id,'x')
            ]
            currentPlayerIndex =0;
            gameOver = false;
            Gameboard.render();
        }
        return {
            start,
        }
})();






















const userButton_btn = document.querySelectorAll('.user-sign button');
const pressStart_btn = document.querySelector('.press-start');
const startGame_div = document.querySelector('.start-game');
const gameContainer_div = document.querySelector('.game-container')

Array.from(userButton_btn).forEach(function(btn){
    btn.addEventListener('click', event =>{
        event.preventDefault();
        btn.style.backgroundColor = "pink"

       
       
    })
}) 

pressStart_btn.addEventListener('click',function(event){
    startGame_div.style.display = 'none';
    pressStart_btn.style.display = 'none';
    setTimeout(function(){
        gameContainer_div.style.display = 'flex'
        Game.start();
    },1500)

})
