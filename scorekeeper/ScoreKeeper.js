var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var reButton = document.getElementById("re");
var numInput = document.querySelector("input");
var p1Score = 0;
var p2Score = 0;
var p1Display = document.getElementById("p1Display");
var p2Display = document.getElementById("p2Display");
var playToDisplay = document.querySelector("p span");
var gameOver = false;
var winningScore = 5;

p1Button.addEventListener("click", function(){
    if(!gameOver){
    p1Score++;
    if(p1Score === winningScore){
        p1Display.classList.add("winner");
        gameOver = true;
        alert("Game Over, Player 1 Wins");
    }
    p1Display.textContent = p1Score;
    
}});
p2Button.addEventListener("click", function(){
    if(!gameOver){
    p2Score++;
    if(p2Score === winningScore){
        p2Display.classList.add("winner");
        gameOver = true;
        alert("Game Over, Player 2 Wins");
    }
    p2Display.textContent = p2Score;
}});
reButton.addEventListener("click", function(){
    reset();
});
numInput.addEventListener("change", function(){        
    playToDisplay.textContent = numInput.value ;
    winningScore = Number(numInput.value);
    reset();
});
function reset(){
        p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    p2Display.classList.remove("winner");
    p1Display.classList.remove("winner");
    gameOver = false;
}

