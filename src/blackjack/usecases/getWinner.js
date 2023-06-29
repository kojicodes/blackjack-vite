/**
 * Funcion para obtener al ganador
 * @param {Array<number>} scores Array con los puntos del jugador y computadora
 */
export const getWinner = (scores) => {
  const [playerScore, machineScore] = scores;

  setTimeout(() => {
    if (machineScore === playerScore) {
      alert("Tie!");
      console.warn("Tie!");
    } else if (
      playerScore > 21 ||
      (machineScore > playerScore && machineScore <= 21)
    ) {
      alert("Computer wins!");
      console.warn("Computer wins!");
    } else if (machineScore > 21 || playerScore > machineScore) {
      alert("Player wins!");
      console.warn("Player wins!");
    }
  }, 100);
};
