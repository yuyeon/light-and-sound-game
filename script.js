// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = generatePattern();
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var numMistakes = 0;

function startGame(){
    //initialize game variables
    numMistakes = 0;
    progress = 0;
    gamePlaying = true;
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    playClueSequence();
}

function stopGame(){
    //change game state
    pattern = generatePattern();
    gamePlaying = false;
    document.getElementById("startBtn").classList.remove("hidden");
    document.getElementById("stopBtn").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.63,
  2: 293.66,
  3: 329.63,
  4: 349.23,
  5: 392,
  6: 440,
  7: 493.88
}

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  clueHoldTime = 1000;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
    clueHoldTime -= 100;
  }
}

function winGame(){
  stopGame();
  alert("Game Over. You won.");
}
function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  
  if(btn != pattern[guessCounter]){ // if guess is wrong
    numMistakes++;
    if(numMistakes == 3){
      loseGame();
    }
    else{
      alert("You have made a mistake. You have " + (3 - numMistakes) + " chances left.");
    }
  }
  else if(guessCounter < progress){ // if guess is correct but turn is not over
    guessCounter++;
  }
  else if(progress != 7){ // if guess is correct and turn is over, but there are still more turns
    progress++;
    playClueSequence();
  }
  else { // if guess is correct, turn is over, and all turns have been played
    winGame();
  }
  
}

function generatePattern(){
  let newPattern = new Array(8);
  for(let j = 0; j < 8; j++){
    newPattern[j] = Math.floor(Math.random() * 7) + 1;
  }
  return newPattern;
}