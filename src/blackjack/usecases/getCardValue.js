/**
 * Funcion para obtener el valor de la carta
 * @param {String} card nombre de la carta
 * @param {Number} value valor obtenido del nombre de la carta
 * @returns {Number} retorna el valor de la carta
 */
export const getCardValue = (
  card,
  value = card.substring(0, card.length - 1)
) => (isNaN(value) ? (value === "A" ? 11 : 10) : parseInt(value));

// export default getCardValue;
