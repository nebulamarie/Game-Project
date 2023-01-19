const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const canvasWidth= canvas.width =1000;
const canvasHeight =canvas.height = 600;
let snailX = 800;
const playerImage = new Image();
playerImage.src = "snail.png";
const backgroundImage = new Image();
backgroundImage.src = "background.png";
const playerInput = document.querySelector("#playerInput")
const submitButton = document.querySelector("#submitButton")
let currentWord='';
let maxTime = 10;
let timeText = document.querySelector("#maxTime")

window.onload =function(){
    draw();
}
function draw(){
    ctx.clearRect(0,0,canvas.width, canvas.height)
    ctx.drawImage(backgroundImage, 0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(playerImage, snailX, 400, playerImage.width / 8, playerImage.height / 8);
}

function beginTimer(){
    setInterval(()=>{
        if (maxTime <= 0) {
            console.log('Time is up!') 
            maxTime = 10
            currentWord = randomWord();
            if(snailX < 800){
                moveSnailBackward()
            }
        }
        maxTime--;
        timeText.innerText=maxTime
    }, 1000)
}
beginTimer()
function moveSnailForward(){
    snailX -= 100
    checkWin()
    draw()
}
function moveSnailBackward(){
    snailX += 100
    draw()
}

function checkWin() {
    if (snailX <= 0) {
    console.log('You Win')
        snailX = 800;
    }
}
function evaluatePlayerInput(){
    let playerAnswer = playerInput.value;
    if(playerAnswer.toLowerCase() == currentWord.toLowerCase()){
        console.log('correct!')
        moveSnailForward();
        currentWord = randomWord();
        maxTime = 10;
    } else {
        console.log('incorrect')
    }

}

submitButton.addEventListener('click',e=>{
    evaluatePlayerInput();
})

const clueArray = ["green", "blue", "yellow", "brown", "orange", "purple", "pink", "white","black", "red"]
function randomNum(min, max) {
    return Math.floor(Math.random(clueArray) * (max - min + 1) ) + min;  
     // this function returns a random whole number between min (inclusive), max (inclusive)
  }
  currentWord = randomWord();
function shuffle(clue) {
    currentWord = randomWord();
    let randomWord = "";
    let holdIndex = [];
    let max = clueArray.length;
    let min = 0;
    let tempIndex;
    let i = 0;
    let word = clueArray.split('');
    do {
        tempIndex = Math.floor(Math.random() * (max-min));
        if(holdIndex.indexOf(tempIndex)<0) {
            randomWord[i] = clueArray[tempIndex];
            holdIndex.push(tempIndex);
            i++;
        }
    }
    while(tempIndex.length < max){
        return randomWord.join("").toString();
    }
    };

    //shuffle through array (random method)
    //iterate through each index and shuffle so each word is scrambled
    //create a place holder for the remainder of the array while the player is working on the current word
    //if and only if the input == the clue snail moves forward
    // add logic to make snail move forward when correct answer is inputted
    // if answer is incorrect activate remaining tries
    //if after 2 tries answer is incorrect snail moves backwards
    // remove "used" index from array before proceeding to the next word on list and so on
    //player must input all correct answers on array list to move to next level
    //checkWin function is activated

    /*
    
    function randomNum(min, max) {
      return Math.floor(Math.random() * (max - min + 1) ) + min;   // this function returns a random whole number between min (inclusive), max (inclusive)
    }
    let wordArray = ['hello', 'there', 'how', 'are', 'you'];
    let randomIndex = randomNum(0, wordArray.length-1);
    let randomWord = wordArray[randomIndex];
    wordArray.splice(randomIndex, 1);
    console.log(randomWord) 
    console.log(wordArray)
    console.log('==END==')
   

    let holder = []
    let newWord = " "
    function()
    for (let i=0; i = clueArray.length; i--) {
            Push(clueArray.length -1[])
    }
    
    */
