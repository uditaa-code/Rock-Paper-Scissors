let userScore=0;
let compScore=0;


const choices=document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");


const genComputerChoice=()=>{
    const options=["rock","paper","scissors"];
    const randomInx =Math.floor(Math.random()*3);
    return options[randomInx];
};
const drawGame=()=>{
    console.log("game was drawn");
    msg.innerText="Game was drawn,Play again";
    msg.style.backgroundColor="yellow";

}

const showWinner=(userWin)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("Wow!! You Won");
        msg.innerText="Wow!! You Won";
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("Oops! You Lost");
        msg.innerText="Oops! You Lost";
        msg.style.backgroundColor="red";
    }

}
const playGame=(userChoice)=>{
console.log("userChoice=" , userChoice);
//generating comp choice

const compChoice=genComputerChoice();
console.log("comp Choice=",compChoice);

if(userChoice===compChoice){
    //draw condition
    drawGame();
}else{
    let userWin=true;
    if(userChoice==="rock"){
         userWin=compChoice==="paper"? false:true;
    }else if(userChoice==="paper"){
userWin=compChoice==="scissors"?false:true;
    } else{
       userWin= compChoice==="rock"?false:true;
    }
    showWinner(userWin);
}
};

choices.forEach((choice)=>{
    
    choice.addEventListener("click",() =>
    {
        const userChoice=choice.getAttribute("id");
        
        playGame(userChoice)
    
});

});