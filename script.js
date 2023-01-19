const wordText = document.querySelector(".clue")
timeText = document.querySelector(".timeb")
inputField = document.querySelector("input")
refreshBtn = document.querySelector(".submit")

let correctWord, timer;

const initTimer = maxTime => {
    clearInterval(timer);
    timer = setInterval( () => {
        if (maxTime > 0) {
            maxTime--;
            return timeText.innerText = maxTime;
        }
        alert(`Time Is Up!The correct answe is: ${correctWord.toUpperCase()}'`);
        initGame();
    }, 1000);
}

const initGame = () => {
    initTimer(30);
    let randomobj = words[Math.floor(Math.random()* words.length)];
    let wordArray = randObj.word.split("");
    for (let i=wordArray.length -1; 1 >0; i--) {
        let j = Math.floor(Math.random() *(i +1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];

    }   
    wordText.innerText = wordArray.join("");
    correctWord = randomobj.word.toLowerCase();;
    inputField.value = "";
    inputField.setAttribute("maxlength", correctWord.length);
}
initGame ();

const checkWord = () => {
    let userWord = inputField.value.toLowerCase();
    if(!userWord) return alert("type in a word");
    if (userWord !== correctWord) return alert (`OOPS! ${userWord} is incorrect. Try again`)
    alert (`Good Job! ${correctWord.toUpperCase()} is correct`);
    initGame ();
}

refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);
