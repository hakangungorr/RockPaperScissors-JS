let  score= JSON.parse(localStorage.getItem('score'));
    
     
    
    

   
   
  
     if (score === null) {
      score= {
        wins  :0,
        losses : 0,
        tie : 0,
      }
    } 

    
    updateScoreElement();
    

    
    

    function playgame(playermove){
      const computerMove = pickComputerMove();
      let result='';
  
    if (playermove === 'rock'){
      if(computerMove === 'rock') {
          result = 'tie';
      } else if(computerMove === 'paper') {
          result='lose'
      } else if (computerMove === 'scissors') {
          result='win';
      }

    }else if (playermove === 'paper') {
      if (computerMove ==='rock'){
          result = 'win';
      }else if (computerMove ==='paper'){
          result = 'tie';
      }else if (computerMove ==='scissors'){
          result= 'lose';
      }

    }else if (playermove ==='scissors'){
      if (computerMove==='rock') {
          result='lose';

      }else if(computerMove==='paper'){
          result= 'win';
      }else if (computerMove==='scissors'){
          result = 'tie';
      }
      }

    
      
      

        if ( result === 'win'){
        score.wins += 1;

        }else if ( result === 'lose'){
          score.losses += 1;
      }else if ( result === 'tie'){
        score.tie += 1;
      }
      

    localStorage.setItem('score', JSON.stringify(score)) // sadece stringleri destekliyor bu yüzden JSON lazım
    
    updateScoreElement();
    document.querySelector('.js-result').innerHTML = `you ${result}.`; 
    

    document.querySelector('.js-moves').innerHTML = `you ${playermove} - Computer ${computerMove}.`;


      

  }

  function updateScoreElement(){
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins} , Losses: ${score.losses} , Ties: ${score.tie}`;




  }

  

  
  

    function pickComputerMove () {
      const randomNumber = Math.random();
      let computerMove = '';
      
      if (randomNumber >=0 && randomNumber < 1/3) {
     computerMove ='rock' ;

  }else if (randomNumber >= 1/3 && randomNumber < 2/3) {
     computerMove = 'paper' ; 
  }else if (randomNumber >=2 /3 && randomNumber < 1) {
    computerMove = 'scissors' ;
  } 
   return computerMove;
    
}
