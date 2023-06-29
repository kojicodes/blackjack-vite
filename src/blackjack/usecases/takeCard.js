/**
 * Funcion para tomar una carta
 * @param {Array<string>} deck
 * @returns {String} Retorna una carta del deck
 */
export const takeCard = (deck) =>
  !deck || deck.length === 0
    ? console.warn("No cards left in deck")
    : deck.pop();

// export default takeCard;
