let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;
//Generates random secretTarget between 0 and 9
const generateTarget = () =>
    {
    return Math.floor(Math.random()*9);
    };
console.log('Generated Target is ' + generateTarget()) 
//comparing guesses
const compareGuesses = (humanGuess, computerGuess, secretTarget ) =>
{
   //test guess differences
    const humanMinusTarget = Math.abs(secretTarget - humanGuess)
    const compMinusTarget = Math.abs(secretTarget - computerGuess)
    return humanMinusTarget <= compMinusTarget;
};

console.log('Result of compare guesses is ' + compareGuesses() + '. If TRUE, human wins ');
//Function of string value representing winner
//increases score variable humanScore or computerScore by 1 based on winner passed onto updateScore
//string passed is either 'human' or 'computer'
const updateScore = (winner) =>
{
        if (winner === 'human')
        {
            humanScore++;
        }
        else if (winner === 'computer')
        {
            computerScore++;
        }
};
console.log ('Human score is ' + humanScore);
console.log ('Computer score is ' + computerScore);
const  advanceRound = () => currentRoundNumber++;