let userScore = 0;
let computerScore = 0;

//dom variables
// usequerySelector for div classes
const userScore_span = document.getElementById("user-score"); // variables that store html elements
const computerScore_span = document.getElementById("computer-score"); //so that the computer will see the score
const scoreBoard_div = document.querySelector(".score-board"); // query gets class
const result_p = document.querySelector(".result > p"); // gets the paragraph tag inside result
const rock_div = document.getElementById("r"); // getElementById is for elements w IDs; individual elements
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice () {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3); // random function to give random number between 0-2
    return choices[randomNumber];
}

function convertToWord (letter) {
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return "Scissors";
}
function win(user, computer) {
    const smallUserWord = "user".fontsize(2).sup();
    const smallCompWord = "comp".fontsize(2).sup();
    const userChoice_div = document.getElementById(user);
    userScore++;
    userScore_span.innerHTML = userScore; // updates scoreboard
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(user)}${smallUserWord} beats ${convertToWord(computer)}${smallCompWord}. You win! 👉👌`; // converts everything to a string ${} = converts function to string
    userChoice_div.classList.add('green-glow');
    setTimeout(function() {userChoice_div.classList.remove('green-glow')}, 300); // removes class after, sec
}

function lose(user, computer) {
    const smallUserWord = "user".fontsize(2).sup();
    const smallCompWord = "comp".fontsize(2).sup();
    const userChoice_div = document.getElementById(user);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(user)}${smallUserWord} loses to ${convertToWord(computer)}${smallCompWord}. You lose... 🙁`;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 300); // same thing as the function in win; bc its one line we can get rid of curly brackets
}

function draw(user, computer) {
    const smallUserWord = "user".fontsize(2).sup();
    const smallCompWord = "comp".fontsize(2).sup();
    const userChoice_div = document.getElementById(user);
    result_p.innerHTML = `${convertToWord(user)}${smallUserWord} is equal to ${convertToWord(computer)}${smallCompWord}. It's a draw. 🏋️`;
    userChoice_div.classList.add('gray-glow');
    setTimeout(() => userChoice_div.classList.remove('gray-glow'), 300);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "sr":
        case "rp":
        case "ps":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', () => game("r"));// adds functionality into clicking the buttons; inspect->console

    paper_div.addEventListener('click', () => game("p"));

    scissors_div.addEventListener('click', () => game("s"));
}

main();