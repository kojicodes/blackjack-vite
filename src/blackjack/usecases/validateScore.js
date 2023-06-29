import { machineTurn } from "./";

/**
 * Funcion para validar el puntaje
 * @param {Number} playerScore Puntos minimos para cada jugador
 * @param {Array<string>} deck Arreglo de cartas
 * @param {Array<number>} scores Puntos de cada jugador
 */
export const validateScore = (playerScore, deck, scores) => {
  if (playerScore > 21) {
    machineTurn(playerScore, deck, scores);
  } else if (playerScore === 21) {
    machineTurn(playerScore, deck, scores);
  }
};
