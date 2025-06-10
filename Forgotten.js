// Random number between 4 and 10
let randomNrGen = Math.floor(Math.random() * (10 - 4 + 1)) + 4;

console.log(randomNrGen);

// variables for the functions
let sectionStats = document.getElementById("stats");
let btnRand = document.getElementById("btnRandom");
let statNr = 0;
let btnAllocate = document.getElementById("btnAllocate");
let txtA = document.getElementById("textAllocate");
let startGamebtn = document.getElementById("start-game");
let endGamebtn = document.getElementById("end-game");
let characterSheet = document.getElementById("character-sheet");
let showHideMenu = document.getElementById("show-hidemenu");

const sectionStat = document.createElement("section");
const sectionPara = document.createElement("p");
let main = document.getElementById("main");
main.appendChild(sectionStat);
sectionStat.appendChild(sectionPara);
let char = {
  strength: 10,
  agillity: 10,
  constitution: 10,
  wisdom: 10,
  intelligence: 10,
  charisma: 10,
};

// ul stats
let ulStats = document.getElementById("ul-stats");
// Stats
let str = document.getElementById("strength");
let agi = document.getElementById("agillity");
let con = document.getElementById("constitution");
let wis = document.getElementById("wisdom");
let int = document.getElementById("intelligence");
let cha = document.getElementById("charisma");

// store the stats in a array to be manipulated later in code easier
const stats = [str, agi, con, wis, int, cha];

// Function for the randomize button to generate random nr, make the allocate button visible and create text for the random nr p
function statPoints() {
  randomNrGen = Math.floor(Math.random() * (10 - 4 + 1)) + 4;
  sectionPara.textContent = `Here is a random nr: ${randomNrGen}`;
  statNr = randomNrGen;
  console.log(statNr);
  // add styling to the p that shows random nr
  sectionStat.classList.add("randomStats");
  //Show allocate button
  btnAllocate.classList.add("show");
  btnRand.removeEventListener("click", statPoints);
}

// Function to decrement the random counter by 1 each 1 point allocated to stats
// It also adds 1 point to each stat depending on what stat you clicked at
function decrementPoints(event) {
  if (statNr > 0) {
    const statName = event.currentTarget.id;
    console.log(statName);
    if (char.hasOwnProperty(statName)) {
      char[statName] += 1;
      statNr--;

      event.target.textContent = `${
        statName.charAt(0).toUpperCase() + statName.slice(1)
      }: ${char[statName]}`;
      sectionPara.textContent = `Remaining stat points: ${statNr}`;
    }
  } else if (statNr === 0) {
    sectionPara.textContent = `You have no more stat points: ${statNr}`;
    startGamebtn.classList.add("show");
  }
}

function randomAllocation() {
  console.log("stat nr = ", statNr);
  let charKeys = Object.keys(char);
  let remainingPoints = statNr;

  for (let c = 0; c < remainingPoints; c++) {
    let randomNrAllo = Math.floor(Math.random() * (5 - 0 + 1));
    console.log("Allocation random nr:", randomNrAllo);
    let randomStat = charKeys[randomNrAllo];
    console.log("stat number is: ", statNr);
    char[randomStat] += 1;
    statNr--;

    let randomBtn = document.getElementById(charKeys[randomNrAllo]);

    console.log("random button ID is: ", randomBtn);

    randomBtn.textContent = `${
      randomStat.charAt(0).toUpperCase() + randomStat.slice(1)
    }: ${char[randomStat]}`;
    sectionPara.textContent = `Remaining stat points: ${statNr}`;
  }
  if (statNr === 0) {
    sectionPara.textContent = `You have no more stat points: ${statNr}`;
    startGamebtn.classList.add("show");
  }
}

// buttons and eventlisteners
btnRand.addEventListener("click", statPoints);
btnAllocate.addEventListener("click", randomAllocation);
str.addEventListener("click", decrementPoints);
agi.addEventListener("click", decrementPoints);
con.addEventListener("click", decrementPoints);
wis.addEventListener("click", decrementPoints);
int.addEventListener("click", decrementPoints);
cha.addEventListener("click", decrementPoints);
startGamebtn.addEventListener("click", moveDarkelf);
showHideMenu.addEventListener("click", showHideStats);
//endGamebtn.addEventListener("click");

function showHideStats() {
  ulStats.classList.toggle("hide");
  ulStats.classList.toggle("ulist");
}
function moveDarkelf() {
  //Variable for moving the dark elf
  let darkElf = document.getElementById("dark-elf");
  //Show character sheet stats
  characterSheet.classList.add("show");
  characterSheet.classList.remove("hide");
  endGamebtn.classList.remove("hide");
  endGamebtn.classList.add("show");

  // Hide other elements
  sectionStats.classList.remove("show");
  sectionStats.classList.add("hide");
  startGamebtn.classList.remove("show");
  startGamebtn.classList.add("hide");
  let rStats = document.getElementById("randomStats");
  rStats.classList.remove("randomStats");
  rStats.classList.add("hide");
  sectionStat.classList.remove("show");
  sectionStat.classList.add("hide");

  //initial position
  let x = 0;
  let y = 0;

  document.addEventListener("keydown", function (event) {
    console.log(`keypressed ${event.key}, key code: ${event.code}`);
    //event.preventDefault();
    let position = darkElf.getBoundingClientRect();

    switch (event.key) {
      case "ArrowUp":
        console.log("ArrowUp Was pressed");
        y -= 10;
        break;
      case "ArrowDown":
        console.log("ArrowDown Was pressed");
        y += 10;
        break;
      case "ArrowLeft":
        console.log("ArrowLeft Was pressed");
        x -= 10;
        break;
      case "ArrowRight":
        console.log("ArrowRight Was pressed");
        x += 10;
        break;
    }
    darkElf.style.transform = `translate(${x}px, ${y}px)`;
  });
}
let character = [
  {
    name: "",
    level: 0,
    experience: 0,
    str: 10,
    agi: 10,
    con: 10,
    wis: 10,
    int: 10,
    cha: 10,
  },
];
