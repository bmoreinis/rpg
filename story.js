/* Uses Case Statements */

// variables
// var name = "";
var scene1=town;

function checkAnswers(answer) {
  switch(answer) {
    case "Think some more":
      thinkSomeMore();
      break;
    case "go into the forest":
      enterForest();
      break;
    case "ignore it and go home":
      homeEarly();
      break;
    }
}

function town(){
  // var name = prompt("what is your name?");
  story("One day you are on your way home from school and you hear a whisper coming from a dark forest you never remember seeing before.\
  \n\"Come here Come here!\"\
  \nit says. You can't place the voice, but there is something familiar about it. What do you do?");
  choices = ["Think some more", "go into the forest", "ignore it and go home"];
  answer = setOptions(choices);
}

// Places
function thinkSomeMore() {
  story("You think about it some more and are sure this forest was not here yesterday.  \
  \nWhere did it come from and how does it know your name?\
  \nWhat do you want to do?");
  choices = ["go into the forest", "ignore it and go home"];
  answer = setOptions(choices);
}

function enterForest() {
    var image = document.createElement("img");
    image.setAttribute("src", "https://www.weprepper.com/wp-content/uploads/2018/07/nature-2569214_960_720-1280x720.jpg");
    image.setAttribute("width", "400px");
    var storyBox = document.getElementById("storybox");
    storyBox.style.textAlign = "center";
    storyBox.appendChild(image);
    story("You enter the forest and soon become hopefully lost.\
    \nWhile you can't find your way out you do see a few places of interest.");
    forest();
}

function forest() {
  story("There is a house made of candy.\
  \nThere is a fruit vender.\
  \nThere is a small opening in the trees with a ring of mushroom in the middle.");
  choices = ["Think some more", "ignore it and go home"];
  answer = setOptions(choices);
}

function homeEarly() {
  var messages = ['You ignore it and walk home.',
    'Nothing exciting happens to you one the way.',
    "That was a very boring story, but you must be a boring person for having chosen to go home.",
    "If it was me there is no way I am passing up the chance to check out a new forest that just happens over night.",
    "To each his own I guess."
  ];
  delayText(messages, 1000);
}