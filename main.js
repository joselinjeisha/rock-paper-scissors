var me;
var opponent;
var myScore = 0;
var opponentScore = 0;


var choices = ["rock","paper","scissor"];

window.onload = function(){
    for(let i =0; i<3; i++)
    {
        let choice = document.createElement("img");
        choice.id = choices[i];
        choice.src = choices[i]+".jpg";
        choice.addEventListener("click", selectChoice);
        document.getElementById("options").append(choice);
    }
}

function selectChoice()
{
   me = this.id;
   document.getElementById("my-selection").src = me+".jpg"

   opponent = choices[Math.floor(Math.random()*3)];
   document.getElementById("opponent-selection").src = opponent+".jpg"

   if(me == opponent)
   {
    myScore+=1;
    opponentScore+=1;
   }
   else{
    if(me == "rock")
    {
        if(opponent =="scissor")
        {
            myScore+=1;
        }else if(opponent =="paper"){
            opponentScore+=1;
        }
    }
    else if(me =="scissor")
    {
        if(opponent == "paper")
        {
            myScore+=1;
        }else if(opponent =="rock"){
            opponentScore+=1;
        }
    }
    else if(me =="paper")
    {
        if(opponent == "rock")
        {
            myScore+=1;
        }else if(opponent =="scissor"){
            opponentScore+=1;
        }
    }
   }


   document.getElementById("opponent-point").innerText = opponentScore;
   document.getElementById("my-point").innerText = myScore;


}

function resetGame(){
    myScore = 0;
    opponentScore = 0;
    document.getElementById("opponent-point").innerText = 0;
    document.getElementById("my-point").innerText = 0;

}