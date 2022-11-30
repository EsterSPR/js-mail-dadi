const diceValuePlayer = [1, 2, 3, 4, 5, 6]
const diceValuePlayerRandom = diceValuePlayer[Math.random() * diceValuePlayer.length | 0];
let player = "Dado giocatore: " + diceValuePlayerRandom;
console.log(player);

const diceValueComputer = [1, 2, 3, 4, 5, 6]
const diceValueComputerRandom = diceValueComputer[Math.random() * diceValueComputer.length | 0];
let computer = "Dado computer: " + diceValueComputerRandom;
console.log(computer);

if (diceValueComputerRandom > diceValuePlayerRandom) {
    console.log("Vince il computer");
} else if (diceValuePlayerRandom > diceValueComputerRandom) {
    console.log("Vince il giocatore");
} else {
    console.log("Pareggio");
}