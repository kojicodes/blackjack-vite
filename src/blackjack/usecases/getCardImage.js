/**
 *
 * @param {string} card carta aleatoria robada
 * @param {number} turn turno jugador o computadora
 */

// Funcion para obtener la imagen de la carta
export const getCardImage = (card, turn) => {
  const cardImg = document.createElement("img");
  const divPlayerCards = document.querySelectorAll(".divCards");

  cardImg.src = `assets/cartas/${card}.png`;
  cardImg.classList.add("carta");

  divPlayerCards[turn].append(cardImg);
};
