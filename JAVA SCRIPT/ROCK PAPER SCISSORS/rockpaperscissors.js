function declareWinner() {
  const userAInput = document.getElementById("num1").value;

  const userBInput = document.getElementById("num2").value;
  if (userAInput === "rock" && userBInput === "paper") {
    alert("Player B wins! Paper beats rock");
  } else if (userAInput === "rock" && userBInput === "scissors") {
    alert("Player A wins! Rock beats scissors");
  } else if (userAInput === "rock" && userBInput === "rock") {
    alert("It's a tie!");
    // User Chooses Paper
  } else if (userAInput === "paper" && userBInput === "rock") {
    alert("Player A wins! Paper beats rock");
  } else if (userAInput === "paper" && userBInput === "paper") {
    alert("Its a tie!");
  } else if (userAInput === "paper" && userBInput === "scissors") {
    alert("Player B wins! Scissors beats paper");
    // User Chooses Scissors
  } else if (userAInput === "scissors" && userBInput === "rock") {
    alert("Player B wins! Rock beats scissors");
  } else if (userAInput === "scissors" && userBInput === "paper") {
    alert("Player Awins! Scissors beats paper!");
  } else if (userAInput === "scissors" && userBInput === "scissors") {
    alert("It is a tie!");
  }
}
