import { takeCard, getWinner, getCardImage, getScore } from "./";

const btnDraw = document.querySelector("#btn-draw"); // Se asigna la seleccion del boton de Robo como una referencia por variable.
const btnStop = document.querySelector("#btn-stop");

/**
 *  Funcion para el turno de la computadora
 * @param {Number} minPts puntos minimos que la computadora necesita para ganar
 * @param {Array<string>} deck Arreglo con el mazo de cartas
 * @param {Array<number>} scores Arreglo con los puntos del jugador y computadora
 */
export const machineTurn = (minPts, deck, scores) => {
  if (!minPts) throw new Error("Se necesitan los puntos minimos");
  if (!deck) throw new Error("No se tiene un deck");

  btnDraw.disabled = true;
  btnStop.disabled = true;

  let machineScore = 0;

  do {
    const card = takeCard(deck);
    machineScore = getScore(card, scores.length - 1, scores);
    getCardImage(card, scores.length - 1);
  } while (machineScore < minPts && minPts <= 21);

  getWinner(scores);
};
