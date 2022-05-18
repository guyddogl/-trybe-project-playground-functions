// Desafio 1
function compareTrue(param1, param2) {
  // seu código aqui
  if (param1 === true && param2 === true) {
    return true;
  } else {
    return false;
  }
}
// let param1 = true;
// let param2 = true;
// console.log("Desafio 1: " + compareTrue(param1, param2));

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  resultado = ((base * height) / 2);
  return resultado;
}
// let base = 10;
// let height = 50;
// console.log("Desafio 2: " + calcArea(base, height));

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let resultado = string.split(" ");
  return resultado;
}
// let string = "go Trybe";
// console.log("Desafio 3: ", splitSentence(string));

// Desafio 4
function concatName(arrayNomes) {
  // seu código aqui
  let resultado = arrayNomes[arrayNomes.length - 1] + ', ' + arrayNomes[0];
  return resultado;
}
// let arrayNomes = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
// console.log("Desafio 4: " + concatName(arrayNomes));

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let resultado = ((wins *3 ) + ties);
  return resultado;
}
let wins = 14;
let ties = 8;
console.log("Desafio 5: ", footballPoints(wins, ties));

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
