//Logic & Variables
var score = 0;
var playerChoice;
//data set for game choices
var readable = {
  "0":["Rock","Scissors","Lizard"],
  "1":["Paper","Rock","Spock"],
  "2":["Scissors","Paper","Lizard"],
  "3":["Lizard","Paper","Spock"],
  "4":["Spock","Rock","Scissors"]
};
// random cpu choice
var cpuChoice = {
  init: function() {
    this.store = Math.floor(Math.random()*5);
    this.text = readable[this.store][0];
  },
  store:"",
  text: ""
};
// choose winner function
var chooseWinner = function(player,cpu){
  if(readable[player][0] == readable[cpu][0]) {
    return "The game is tied. Try again?";
    }
    if (readable[player][1] == readable[cpu][0]|readable[player][2]==readable[cpu][0]){
      score ++;
      return "You Won!";
    } else {
      score--;
      return "You Lost!";
    }
};
// initialize cpu's choice.
cpuChoice.init();

var paragraph = document.querySelector('p');
var assignClick = function(element, pos) {
  //assign a click listener
  element.addEventListener ('click',function(){
    //set player choice
    playerChoice = pos;
    //check if they've won the game
    cpuChoice.init();
    //print out win/lose feedback
    paragraph.innerText= "The computer chose " + cpuChoice.text;
    //determine a winner
    paragraph.innerText += "\n" +  chooseWinner(playerChoice,cpuChoice.store);
//display the winner and the current score
    paragraph.innerText += "\n" + "SCORE: " + score;
  });
};
//Event listener for img clicks and game behavior
var images = {
  tags: document.getElementsByTagName('img'),
  init: function() {
    for(var step = 0;step < this.tags.length; step++) {
      assignClick(this.tags[step], step);
    }
  }
};
//initialize the behavior and event listener
images.init();
