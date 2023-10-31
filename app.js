const userButton_btn = document.querySelectorAll('.user-sign button');
const pressStart_btn = document.querySelector('.press-start');
const startGame_div = document.querySelector('.start-game');
const gameContainer_div = document.querySelector('.game-container')

Array.from(userButton_btn).forEach(function(btn){
    btn.addEventListener('click', event =>{
        event.preventDefault();
        btn.style.backgroundColor = "pink"
       newPlayer(event.id);
       
       
    })
}) 

pressStart_btn.addEventListener('click',function(event){
    startGame_div.style.display = 'none';
    pressStart_btn.style.display = 'none';
    setTimeout(function(){
        gameContainer_div.style.display = 'flex'
    },1500)

})
