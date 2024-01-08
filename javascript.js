let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");
const genComputerChoice=()=>{
    const options=["rock","paper","scissors"];
    //rock,paper,scissors
    //math is its generat random number
   const randIdx=Math.floor(Math.random() * 3) ;/*hum 3 ka guna is liye kiye hai kyuki math .random koi bhi decimal random numer deta hum 3 ka gunna karenge to yah 1 se tee
   n k bich hi koi number dega jise hum index ki tarah use kar sakte h */
   return options[randIdx];
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
    console.log("you win!");
    userScore++;
    userScorepara.innerText=`${userScore}`;
    msg.innerText=`you win! ${userChoice} beats ${compChoice}`
    msg.style.backgroundColor="green";
}
     else{
        console.log("comp win!");
        compScore++;
        compScorepara.innerText=`${compScore}`;
        msg.innerText=`comp win! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="yellow";
     }
}
const drawGame=(userChoice,compChoice)=>{
    console.log(" game was draw");
    msg.innerText=`Game Draw play again ${userChoice} equal  ${compChoice}`;
    msg.style.backgroundColor="blue";

}
const playGame=(userChoice)=>{
    console.log("userChoice=",userChoice);
//Generate computer choice;
const compChoice=genComputerChoice();
console.log("com choice=",compChoice);
if(userChoice===compChoice)
{
    //Draw Game
    drawGame(userChoice,compChoice);
}
else{
    let userWin=true;
    if(userChoice==="rock"){
        //scissors,paper
        userWin=compChoice==="paper"?false:true;
    }
    else if(userChoice==="paper")
  {  //rock ,scissor
userWin=compChoice==="scissors"?false:true;
}
else 
{//rock,paper
    userWin=compChoice==="rock"?false:true;
}
showWinner(userWin,userChoice,compChoice);
}
};




choices.forEach((choice)=>{
    //console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
    // console.log("choice was clicked",userChoice);
     playGame(userChoice);
    });

});
