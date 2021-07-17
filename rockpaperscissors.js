const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput ==='paper' || userInput ==='scissors' || userInput === 'bomb'){
        return userInput;
    }else{
      console.log('Enter a valid value.')
    }
  }
  
  const getComputerChoice = () => {
   const randomNum = Math.floor(Math.random() * 3);
  
   switch(randomNum){
     case 0:
      return 'paper';
     break;
     case 1:
      return 'scissors';
     break;
     case 2: 
      return 'rock'
     break;
     default:
      return 'sorry'
     break;
   }
  }
  
  const determineWinner = (userChoice, computerChoice) => {
    if(userChoice === computerChoice){
      return 'Game was a tie';
    }
    if(userChoice === 'rock'){
      if(computerChoice === 'paper'){
        return 'Computer won';
      }else{
        return 'You won';
      }
    }
    if(userChoice === 'paper'){
      if(computerChoice === 'scissors'){
        return 'Computer won!'
      }else{
        return 'You won'
      }
    }
    if(userChoice === 'scissors'){
      if(computerChoice === 'rock'){
        return 'Computer won'
      }else{
        return 'You won'
      }
    }
  
    if(userChoice === 'bomb'){
      return 'You won.'
    }
  };
  
  const playGame = () => {
    const userChoice = getUserChoice('paper');
    const computerChoice = getComputerChoice();
    console.log(`You throw: ${userChoice}`);
    console.log(`The computer threw: ${computerChoice}`);
  
    console.log(determineWinner(userChoice, computerChoice));
  };
   playGame();
  