var roundScores,scores,onGame,activePlayer,target,targetSelected;
initiateGame();
//for roll dice
document.querySelector('.btn-roll').addEventListener('click', function(){
    if (targetSelected=== false){
    alert('Select a Target') ;
    };
 if (onGame===true && targetSelected===true){
var diceNum = Math.ceil((Math.random()*6));
  console.log(diceNum);
    document.querySelector('.dice').src=('dice-'+diceNum+'.png');
    document.querySelector('.dice').style.display='block';
    if (diceNum != 1){
        roundScores= roundScores+ diceNum;
        document.getElementById('current-'+activePlayer).textContent=roundScores;
    }else{
        cleanCoding();
        
    }
}});
//for hold button
document.querySelector('.btn-hold').addEventListener('click',function(){
  if (onGame){ 
     scores[activePlayer] = scores[activePlayer]+roundScores;
    winner();
    document.getElementById('score-'+activePlayer).textContent=scores[activePlayer];
    cleanCoding();
  
  }

   
});

function cleanCoding(){
    roundScores=0;
        document.querySelector('.dice').style.display='none';
        document.getElementById('current-'+activePlayer).textContent=0;
         document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
    activePlayer===1 ? activePlayer=0 : activePlayer=1; 
     document.querySelector('.player-'+activePlayer+'-panel').classList.add('active');
}




//for winner
function winner (){
    if (scores[activePlayer] >= target && target !== 0){
        document.getElementById('name-'+activePlayer).textContent="Winner!";

        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        onGame=false;
        
    } else if (target===0) {
    
    };
   
};
function initiateGame(){
roundScores= 0;
scores =[0,0];
activePlayer=0;
onGame =true;    
targetSelected=false;
document.getElementById('name-0').textContent="Player 1";
document.getElementById('name-1').textContent="Player 2";
document.querySelector('.dice').style.display='none';
document.getElementById('score-0').textContent="0";
document.getElementById('score-1').textContent="0";
document.getElementById('current-0').textContent="0";
document.getElementById('current-1').textContent="0";
};

document.querySelector('.btn-new').addEventListener('click', function(){
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
     initiateGame();
}

   
    
);


document.querySelector('.select').addEventListener('click',function(){
    targetSelected=true;
    target = document.getElementById('target-score-input').value;
    console.log(target);
 document.getElementById('target-score-header').textContent= ('Target Score: '+target);
});
