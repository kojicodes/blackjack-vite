// Funcion para obtener el marcador del jugador
import { getCardValue } from "./";

/**
 * Funcion para obtener los puntos de cada jugador
 * @param {String} card
 * @param {Number} turn
 * @param {Array<Number>} scores
 * @returns
 */
export const getScore = (card, turn, scores) => {
  const scoreboard = document.querySelectorAll(".points");

  scores[turn] += getCardValue(card);
  scoreboard[turn].innerText = scores[turn];

  return scores[turn];
};
