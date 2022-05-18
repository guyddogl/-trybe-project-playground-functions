// Desafio 1
function compareTrue(param1, param2) {
  // seu código aqui
  if (param1 && param2) {
    return true;
  } 
  return false;
}
// let param1 = true;
// let param2 = true;
// console.log("Desafio 1: " + compareTrue(param1, param2));

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return ((base * height) / 2);
}
// let base = 10;
// let height = 50;
// console.log("Desafio 2: " + calcArea(base, height));

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  return string.split(' ');
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
// let wins = 14;
// let ties = 8;
// console.log("Desafio 5: ", footballPoints(wins, ties));

// Desafio 6
function highestCount(arrayNumeros) {
  // seu código aqui
  let maiorValor = Math.max(... arrayNumeros);
  let count = 0;
  for ( let index = 0; index < arrayNumeros.length; index += 1) {
    if (arrayNumeros[index] === maiorValor) {
      count += 1;
    }
  }
  return count;
}
// let arrayNumeros = [9, 1, 2, 3, 9, 5, 7];
// console.log("Desafio 6: ", highestCount(arrayNumeros));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distanciaMouseCat1 = (cat1 - mouse) * -1;
  let distanciaMouseCat2 = (cat2 - mouse) * -1;
  let resultado = "";

  if (distanciaMouseCat1 < distanciaMouseCat2) {
    resultado = "cat1";
  } else if (distanciaMouseCat2 < distanciaMouseCat1) {
    resultado = "cat2";
  } else {
    resultado = "os gatos trombam e o rato foge";
  }

  return resultado;
}
// let mouse = 1;
// let cat1 = 0;
// let cat2 = 2;
// console.log("Desafio 7: ", catAndMouse(mouse, cat1, cat2));

// Desafio 8
function fizzBuzz(arrayFizzBuzz) {
  // seu código aqui
  let fizzBuzzResultado = [];
  for (let index = 0; index < arrayFizzBuzz.length; index += 1) {
    if ((arrayFizzBuzz[index] % 3) === 0 && (arrayFizzBuzz[index]) % 5 === 0) {
      fizzBuzzResultado.push("fizzBuzz");
    } else if ((arrayFizzBuzz[index]) % 3 === 0) {
      fizzBuzzResultado.push("fizz");
    } else if ((arrayFizzBuzz[index]) % 5 === 0) {
      fizzBuzzResultado.push("buzz");
    } else {
      fizzBuzzResultado.push("bug!");
    }
  }
  return fizzBuzzResultado;
}
// let arrayFizzBuzz = [2, 15, 7, 9, 45];
// console.log("Desafio 8: ", fizzBuzz(arrayFizzBuzz));

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
