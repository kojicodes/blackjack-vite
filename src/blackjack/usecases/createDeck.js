/**
 * Funcion para revolver los valores de un array
 * @param {Array<string>} arr
 * @returns {Array<string>} retorna deck revuelto
 */
const shuffle = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
};

/**
 * Funcion para crear el deck
 * @param {Array<string>} cardTypes tipos de cartas, ejemplo: ["C", "D", "H", "S"];
 * @param {Array<string>} specialCards cartas especiales, ejemplo: ["A", "J", "Q", "K"];
 * @param {Array<string>} deck Arreglo de cartas
 * @returns {Array<string>} retorna un nuevo deck de cartas
 */
export const createDeck = (cardTypes, specialCards, deck = []) => {
  if (!cardTypes || cardTypes.length === 0)
    throw console.error("Card types are needed!");

  if (!specialCards || specialCards.length === 0)
    throw console.error("Special cards are needed!");

  for (let i = 2; i <= 10; i++) {
    for (let type of cardTypes) {
      deck.push(`${i}${type}`);
    }
  }

  for (let special of specialCards) {
    for (let type of cardTypes) {
      deck.push(`${special}${type}`);
    }
  }

  return shuffle(deck);
};

// export default createDeck; // Cuando se quiere solo exportar una funcion o metodo se recomienda hacerlo de esta forma
