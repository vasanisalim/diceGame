const startBtn=document.querySelector("#startButton");          //get a reference to the startButton
startBtn.addEventListener("click", playGame2);                   //add click event to button that calls playGame function
const resultsText = document.getElementById("resultsText");     //get reference to resultsText
const dice1=document.getElementById("imgPlayer1");              //get reference to imgPlayer1
const dice2=document.getElementById("imgPlayer2");              //get reference to imgPlayer2
const audio = new Audio("dice.mp3");                            //create new audio object for dice.mp3


function playGame1(){
    resultsText.innerHTML = "&nbsp";                            //clear results area
    audio.play();                                               //play audio
    let roll1 = Math.floor(Math.random()*6)+1;                  //randomly generate a number between 1 and 6 for player1
    let roll2 = Math.floor(Math.random()*6)+1;                  //randomly generate a number between 1 and 6 for player2
    dice1.src="images/dice"+roll1+".png"                        //update dice1 image
    dice2.src="images/dice"+roll2+".png"                        //update dice2 image
    
    //compare dice1 and dice2 and display results
    if(roll1===roll2){
        resultsText.innerHTML="Draw"
    }else if(roll1>roll2){
        resultsText.innerHTML="Player 1 wins"
    }else{
        resultsText.innerHTML="Player 2 wins"
    }
}






function playGame2(){
    resultsText.innerHTML = "&nbsp";                            //clear results area
    audio.play();                                               //play audio
    

    //use setInterval to randomly display dice images every 0.2 seconds
    let rollingAnimator = setInterval( ()=> {
        dice1.src = "images/dice"+(Math.floor(Math.random()*6)+1)+".png";
        dice2.src = "images/dice"+(Math.floor(Math.random()*6)+1)+".png";
        }, 200);
    


    //use setTimeout to delay results by 2 seconds
    setTimeout(()=>{
        clearInterval(rollingAnimator);                 //stop the animation using clearInterval
        let roll1 = Math.floor(Math.random()*6)+1;      //randomly generate a number between 1 and 6 for player1
        let roll2 = Math.floor(Math.random()*6)+1;      //randomly generate a number between 1 and 6 for player2
        dice1.src="images/dice"+roll1+".png"            //update dice1 image
        dice2.src="images/dice"+roll2+".png"            //update dice2 image
        
        //compare dice1 and dice2 and display results
        if(roll1===roll2){
            resultsText.innerHTML="Draw"
        }else if(roll1>roll2){
            resultsText.innerHTML="Player 1 wins"
        }else{
            resultsText.innerHTML="Player 2 wins"
        }
        },2000);
    }



        //This is just another way of changing an attribute
        //dice1.setAttribute("src","images/dice"+roll1+".png");
        //dice2.setAttribute("src","images/dice"+roll2+".png");