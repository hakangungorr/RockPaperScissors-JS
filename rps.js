let  score= JSON.parse(localStorage.getItem('score'));
    
     
    
    

   
   
  
     if (score === null) {
      score= {
        wins  :0,
        losses : 0,
        tie : 0,
      }
    } 
    updateScoreElement();

    
    let isAutoPlaying = false;
    let intervalId; 
    
  

    // const autoPLay = () => {}  Arrow Function 
    function autoPlay() {
      if (!isAutoPlaying) {
       intervalId = setInterval(function(){
        const playermove = pickComputerMove()
        playgame(playermove);
      },1000);
      isAutoPlaying = true;
      buttonAutoPlay.innerHTML='Stop playing';
    }else {
      clearInterval(intervalId);
      isAutoPlaying = false;
      buttonAutoPlay.innerHTML='Auto Play';
    }
    }
    buttonReset = document.querySelector('.reset-button')
    buttonAutoPlay = document.querySelector('.js-autoplay-button')
    buttonRock=document.querySelector('.js-rock-button')
    buttonPaper=document.querySelector('.js-paper-button') 
    buttonScissors=document.querySelector('.js-scissors-button')
   /*  buttonRock.addEventListener('click',playgame('rock'))  //playgame('rock') is common mistakes dont do that */ 
   buttonReset.addEventListener('click',()=>{
     
    score.wins =0;
    score.losses = 0;
    score.tie = 0;
    localStorage.removeItem('score');
    updateScoreElement();
    console.log(score);
  
    document.querySelector('.js-moves').innerHTML='';
    document.querySelector('.js-result').innerHTML='';

   })
   
   buttonRock.addEventListener('click',()=>{
   playgame('rock')
   }) 
   buttonPaper.addEventListener('click',()=>{
    playgame('paper')
   }) 
   buttonScissors.addEventListener('click',()=>{
    playgame('scissors')
   }) 

   buttonAutoPlay.addEventListener('click',()=>{
    autoPlay();
   })

   document.body.addEventListener('keydown',(event)=>{
    
    if(event.key === 'r'){
      playgame('rock')

    }else if(event.key === 'p'){
      playgame('paper')
    }else if(event.key === 's'){
      playgame('scissors')
    }else if(event.key ==='a'){
      autoPlay();
    }else if(event.key === 'Backspace'){
      score.wins =0;
    score.losses = 0;
    score.tie = 0;
    localStorage.removeItem('score');
    updateScoreElement();
    console.log(score);
  
    document.querySelector('.js-moves').innerHTML='';
    document.querySelector('.js-result').innerHTML='';

  }})



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
