function displayTitle(){
    alert('Welcome to the Rock,Paper,Scissors Game.')
}

function playGame(){
    let userChoice = prompt('Rock,Paper or Scissors?Enter your choice')
    
    
        if(userChoice != 'Rock' && userChoice != 'Paper' && userChoice != 'Scissors'){
            alert('Please enter a valid input Rock,Paper or Scissors')
         userChoice = prompt('Rock,Paper or Scissors?Enter your choice')
        } 
    
    let randomNum = Math.floor(Math.random() * 3 + 1)
    let compChoice = ''

    switch (randomNum) {
        case 1:
            compChoice = 'Rock' 
            
            break;
        case 2:
            compChoice = 'Paper'    
            break;
        case 3:
            compChoice = 'Scissors'
            break;
    
            }

    console.log(`user choice is ${userChoice}`)
    console.log(`comp choice is ${compChoice}`)
    winner(userChoice,compChoice)

}

function winner(userCh,compCh){
    switch (userCh){
        case 'Rock':
            if(compCh === 'Scissors'){
                alert("Rock destroys Scissors! You win!")
            }else if(compCh === 'Paper'){
                alert('Paper covers Rock!You lose!')
            }else if(compCh === 'Rock'){
                alert('Same choice!')
                let choice = prompt('Do you want to play again(y/n)')
                if(choice === 'y')
                playGame()
                else return
            }
            break;
        case 'Paper':
            if(compCh === 'Scissors'){
                alert("Scissors cut Paper! You lose!")
            }else if(compCh === 'Rock'){
                alert('Paper covers Rock!You win!')
            }else if(compCh === 'Paper'){
                alert('Same choice!')
                let choice = prompt('Do you want to play again(y/n)')
                if(choice === 'y')
                playGame()
                else return
            }
            break;
        case 'Scissors':
            if(compCh === 'Paper'){
                alert("Scissors cut Paper! You win!")
            }else if(compCh === 'Rock'){
                alert('Rock destroys Scissors!You lose!')
            }else if(compCh === 'Scissors'){
                alert('Same choice!')
                let choice = prompt('Do you want to play again(y/n)')
                if(choice === 'y')
                playGame()
                else return
            }
            break;
        }
}

function init(){
    displayTitle()
    let playAgain = 'y'
    while(playAgain === 'y'){
        playGame()
        playAgain = prompt('Do you want to play again?(y or n)')
    }
    alert('Thanks for playing the game!')
}
init()