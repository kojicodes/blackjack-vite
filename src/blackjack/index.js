// import { createDeck } from "./usecases/create-deck"; // Individual export
import {
  createDeck,
  takeCard,
  getCardImage,
  machineTurn,
  validateScore,
  getScore,
} from "./usecases/index";

let deck = [];
let scores = [];

// Variables globales
const types = ["C", "D", "H", "S"]; // Tipos de cartas: Clubs, Diamonds, Hearts, Spades.
const specials = ["A", "J", "Q", "K"]; // Tipos especiales de cartas: Aces, Jacks, Queens, Kings

// Referencias HTML
const btnDraw = document.querySelector("#btn-draw"); // Se asigna la seleccion del boton de Robo como una referencia por variable.
const btnStop = document.querySelector("#btn-stop");
const btnReset = document.querySelector("#btn-reset");

const scoreboard = document.querySelectorAll(".points"); // Asignamos la seleccion de todos los campos 'small' referenciados en una variable.
const divPlayerCards = document.querySelectorAll(".divCards");
const scorePoints = document.querySelectorAll(".points");

// Inicializacion del deck
const initGame = (numPlayers = 2) => {
  console.clear();
  scores = [];
  scorePoints.value = 0;
  deck = createDeck(types, specials);

  btnDraw.disabled = false;
  btnStop.disabled = false;

  for (let i = 0; i < numPlayers; i++) {
    scores.push(0);
    scoreboard[i].innerText = 0;
    divPlayerCards[i].innerHTML = "";
  }
};

// Se le asigna un eventListener que activara una funcion callback cuando sea presionado el boton de Robo.
btnDraw.addEventListener("click", () => {
  // Tomamos una carta
  const card = takeCard(deck);
  // Obtenemos la carta y su valor, mostrando el resultado de la suma de las cartas en el marcador del jugador
  const playerScore = getScore(card, 0, scores);
  //Agregar imagen de carta cuando presionas el boton de 'Robo'
  getCardImage(card, 0);
  // Llama a la funcion para validar el puntaje.
  validateScore(playerScore, deck, scores);
});

// Listener para el boton de 'Detener', deshabilia los botones de 'robo' y 'detener', cambia al turno de la computadora.
btnStop.addEventListener("click", () => machineTurn(scores[0], deck, scores));

//  Listener para el boton de 'Nuevo juego', pone todos los valores en cero, habilita los botones y limpia los div y small
btnReset.addEventListener("click", () => initGame());
