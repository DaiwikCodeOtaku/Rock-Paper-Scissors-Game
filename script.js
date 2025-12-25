let userscore = 0;
let botscore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");

const userscoretext = document.querySelector('#user');
const botscoretext = document.querySelector('#bot');

const computerChoice = () =>{
  const choices = ['Rock','Paper','Scissors'];
  const num = Math.floor((Math.random()*3));
  console.log("Computer choice was : ",choices[num]);
  return choices[num];
};
const draw = ()=>{
  msg.innerText = "Draw!";
  msg.style.backgroundColor = 'black';
}
const showWinner = (userWin,userChoice,compChoice) => {
  if(userWin){
    userscore++;
    userscoretext.innerText = userscore;
    msg.innerText= `Yay!! Yours ${userChoice} beats ${compChoice}`;
    
    msg.style.backgroundColor = 'green';
  }
  else{
    botscore++;
    botscoretext.innerText = botscore;
    msg.innerText = ` Oh! ${compChoice} beats your choice ${userChoice}`;
    
     msg.style.backgroundColor = '#8B0000';
  }
};

const playGame = (userChoice) => {
  const compChoice = computerChoice();
  if(userChoice == compChoice){
    draw();
  }
  else{
    let userWin = true;
    if(userChoice === 'Scissors'){
        userWin = compChoice === 'Rock'?false:true;
    }
     if(userChoice === 'Rock'){
        userWin = compChoice === 'Paper'?false:true;
    }
     if(userChoice === 'Paper'){
        userWin = compChoice === 'Scissors'?false:true;
    }
    showWinner(userWin,userChoice,compChoice);
  }
};

choices.forEach((choice)=>{
 choice.addEventListener("click",()=>{
    const userChoice = choice.getAttribute("id");
    console.log("Clicked ",userChoice);
    playGame(userChoice);
 });
});