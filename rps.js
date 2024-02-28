let userScore =0;
let computerScore =0;
const userScore_span= document.getElementById("user_score");
const computerScore_span = document.getElementById("computer_score");
const scoreboard_div = document.querySelector(".score_board");
const result_div = document.querySelector(".result >p");
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

function getComputerChoice(){
  const choices=['r','p','s'];
  const randomNumber = Math.floor(Math.random()*3);
  return choices[randomNumber];
}
function convertToWOrd(word){
  if (word === 'r'){
    return 'Rock'
  }
  else if (word === 'p'){
    return 'Paper'
  }
  else{
    return 'Scissor'
  }
  

}

function wins(user,computer){
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_div.innerHTML = convertToWOrd(user) + ' beats ' + convertToWOrd(computer) + '. You win!!' 
}
function lose(user, computer){

  computerScore++;
  computerScore_span.innerHTML = computerScore;
  userScore_span.innerHTML = userScore;
  result_div.innerHTML = convertToWOrd(computer) + ' beats ' + convertToWOrd(user) + '. YOU LOSE :('

}
function draw(user, computer){
  computerScore_span.innerHTML = computerScore;
  userScore_span.innerHTML = userScore;
  result_div.innerHTML =  'Both chose ' + convertToWOrd(user) + ". It's a DRAW:/"
  
}
function game(userChoice){
  const computer_choice = getComputerChoice();
  switch (userChoice + computer_choice){
    case 'rs':
    case 'pr':
    case 'sp':
      wins(userChoice,computer_choice);
      break;
    case 'sr':
    case 'ps':
    case 'rp':
      lose(userChoice,computer_choice);

      break;
    case 'rr':
    case 'ss':
    case 'pp':
      draw(userChoice, computer_choice);
      break;
  }
}
function main(){
  rock_div.addEventListener('click', function() {
    game('r');
    
  })
  
  paper_div.addEventListener('click', function(){
    game('p');
  })
  scissors_div.addEventListener('click',function(){
    game('s');
  })
}
main();





