let userScore=0;
let  compScore=0;
const userScore_span=document.getElementById('user-score');
const compScore_span=document.getElementById('comp-score');
const scoreBoard_div=document.getElementsByClassName('score-board');
const result_div=document.querySelector('.result >p');
const rock_div=document.getElementById('r');
const paper_div=document.getElementById('p');
const scissors_div=document.getElementById('s');

function compChoice(){
    const choices= ['r', 'p', 's'];
    const randomNumber= Math.floor(Math.random()*3)
    return choices[randomNumber];
} 
// console.log(compChoice());

function covertToWord(letter){
    if(letter == 'r') return "Rock";
    if(letter == 'p') return "Paper";
    return "Scissors";
}


function win(userChoice , CompChoice){
    userScore++;
    // console.log(userScore);
    // console.log("WIN");
    userScore_span.innerHTML=userScore;
    compScore.innerHTML=compScore;
    const smallUserWord= "user".fontsize(3).sup();
    const smallcompWord= "comp".fontsize(3).sup();
    const userChoice_div=document.getElementById(userChoice)
    result_div.innerHTML= `${covertToWord(userChoice)}${smallUserWord} beats ${covertToWord(CompChoice)}${smallcompWord} . You win!`;
    userChoice_div.classList.add('green-glow');
    setTimeout(()=>userChoice_div.classList.remove('green-glow'), 300);
}
    
    
function lose(userChoice, CompChoice){
    compScore++;
    userScore_span.innerHTML=userScore;
    compScore_span.innerHTML=compScore;
    const userChoice_div=document.getElementById(userChoice)
    const smallUserWord= "user".fontsize(3).sup();
    const smallcompWord= "comp".fontsize(3).sup();
    result_div.innerHTML= `${covertToWord(userChoice)}${smallUserWord} lost by ${covertToWord(CompChoice)}${smallcompWord} . You lost!`;
    userChoice_div.classList.add('red-glow');
    setTimeout(()=>userChoice_div.classList.remove('red-glow'), 300);
}
    
function draw(userChoice, CompChoice){
    const userChoice_div=document.getElementById(userChoice)
    const smallUserWord= "user".fontsize(3).sup();
    const smallcompWord= "comp".fontsize(3).sup();
    result_div.innerHTML= `${covertToWord(userChoice)}${smallUserWord} equals ${covertToWord(CompChoice)}${smallcompWord} . It's a draw!`;
    userChoice_div.classList.add('gray-glow');
    setTimeout(()=>userChoice_div.classList.remove('gray-glow'), 300);
}

function game(userChoice){
    const CompChoice= compChoice();
    // console.log(userChoice);
    // console.log(CompChoice);
    

    switch(userChoice + CompChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, CompChoice);
            // console.log("USER WINS");
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, CompChoice);
            // console.log("USER LOSES");
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, CompChoice);
            // console.log("ITs A DRAW");
            break;
    }
}
function main(){
    rock_div.addEventListener('click' , ()=>game('r'));
    
    paper_div.addEventListener('click' , ()=>game('p'));
         
    scissors_div.addEventListener('click' , ()=>game('s'));
}
    
main();
   
    
    


