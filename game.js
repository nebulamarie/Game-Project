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
let maxTime = 11;
let timeText = document.querySelector("#maxTime")
let triesLeft = 3
let triesLeftTextArea = document.querySelector("#triesLeft")

document.addEventListener("keydown", e => {
    // Check what key is pressed
    
    if(e.key == "Enter"){// If key is enter key, submit whatever is in the input box
        evaluatePlayerInput()
    }
    // If the input box is empty, do nothing

}) 

window.onload =function(){//what viewer will see upon start of game
    draw();//
}
function draw(){
    ctx.clearRect(0,0,canvas.width, canvas.height)
    ctx.drawImage(backgroundImage, 0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(playerImage, snailX, 400, playerImage.width / 8, playerImage.height / 8);
}

function beginTimer(){//timer function
    setInterval(()=>{
        if (maxTime <= 0) {//if max time is less than or equal zero 
            console.log('Time is up!') //display 'time is up'. 
            maxTime = 11 //reset clock. reset word. 
            triesLeft = 3;
            triesLeftTextArea.innerText = `${triesLeft}`
            currentWord = randomWord(); //reset word. 
            if(snailX < 800){ //move snail backwrd
                moveSnailBackward()
            }

        }
        maxTime--;//maxTime decrement from 1000 milisecond
        timeText.innerText=maxTime//reset clock to show player time left
    }, 1000)
}
beginTimer()
function moveSnailForward(){//function to move snail forward. snail will only move forward if player answer is correct
    snailX -= 100 //snail 'x' axis 
    checkWin()//apply checkWin function
    draw()//impose snail to new position
}
function moveSnailBackward(){
    snailX += 100 //snail 'x' axis interval
    draw() //impose snail to new position
}

function checkWin() {
    if (snailX <= 0) {
    console.log('You Win')
        snailX = 800;
    }
}
function evaluatePlayerInput(){//function for evaluating player input/submit
    let playerAnswer = playerInput.value;// answer box = value being submitted by player
    console.log(playerAnswer, currentWord)// display player answer and current word
    if(playerAnswer.toLowerCase() == currentWord.toLowerCase()){//if player answer is equal to currentword
        console.log('correct!')//display 'correct'
        moveSnailForward();//snail moves forward
        currentWord = randomWord();//next word will be displayed from the array of words
        maxTime = 11;// maxTime resets
        triesLeft = 3;
        triesLeftTextArea.innerText = `${triesLeft}`
       
    } else {
        console.log('incorrect')// if input is not correct display 'incorrect'
        triesLeft = triesLeft-1; 
        triesLeftTextArea.innerText = `${triesLeft}`
        if (triesLeft==0){
            currentWord = randomWord();
            maxTime = 11;// maxTime resets
            moveSnailBackward();
            triesLeft=3;
            triesLeftTextArea.innerText = `${triesLeft}`
        }
        //clear input box to be empty//set player answer to empty string
    }
    playerInput.value = ""
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

  function randomWord(wordArray){
    let word = clueArray[randomNum(0,clueArray.length-1)]
    let wordArea = document.querySelector('#scrambledWord');
    wordArea.innerText = shuffleWord(word);
    return word;
  }

  function shuffleWord(word){
    word = word.split(''); // split word into array    'red' -> ['r', 'e', 'd']
    wordLength = word.length; // store the word's length in a variable (because we will be changing the word array, the length will change as well)
    let scrambled = '' // placeholder for our new scrambled word
    for(let i = 0; i < wordLength; i++)
      {
        let randomLetterIndex = randomNum(0, word.length-1);  // gets us a random index from the current word array.
        scrambled += word[randomLetterIndex]; // add whatever the random letter is to our new scrambled word
        word.splice(randomLetterIndex, 1)  // remove random index from word so we dont scramble the same index multiple times
      }
    return scrambled;//display 'scrambled' word to player
  }

  /*TO DO
  1. clear input field when player submits answer
  2. remaining tries to decrement when incorrect answer submitted
  3. reset interval for time left so that it is not continually running
  4. move snail backward after player has 3 incorrect answers or a combo of incorrect answer and clock run out
  5. INSTRUCTIONS WINDOW
  6. design enhancements
  PMVP time permitting
  // Dictionary -> {
//  3: [red, pie, car, cat, dog, ...],start with 3 letter words
//  4: [blue, tree, ...], next set of words will be 4 letter words
//  5: [green, apple, ...], next set of words will be 5 letter words
sound and maybe some animation when time is up clock spin maybe
//}
    */
