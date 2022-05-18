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
  return string.split(' '); // https://www.devmedia.com.br/javascript-split-dividindo-separando-strings/39254
}
// let string = "go Trybe";
// console.log("Desafio 3: ", splitSentence(string));

// Desafio 4
function concatName(arrayNomes) {
  // seu código aqui
  return arrayNomes[arrayNomes.length - 1] + ', ' + arrayNomes[0];
}
// let arrayNomes = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
// console.log("Desafio 4: " + concatName(arrayNomes));

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return ((wins *3 ) + ties);
}
// let wins = 14;
// let ties = 8;
// console.log("Desafio 5: ", footballPoints(wins, ties));

// Desafio 6
function highestCount(arrayNumeros) {
  // seu código aqui
  let maiorValor = Math.max(... arrayNumeros); // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max
  let count = 0;
  for ( let indexNumber of arrayNumeros) {
    if (indexNumber === maiorValor) {
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
  let distanciaMouseCat1 = Math.abs(cat1 - mouse); // https://www.w3big.com/pt/jsref/jsref-abs.html
  let distanciaMouseCat2 = Math.abs(cat2 - mouse);
  let resultado = '';
  if (distanciaMouseCat1 < distanciaMouseCat2) {
    resultado = 'cat1';
  } else if (distanciaMouseCat2 < distanciaMouseCat1) {
    resultado = 'cat2';
  } else {
    resultado = 'os gatos trombam e o rato foge';
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
function encode(stringEncodeDecode) {
  // seu código aqui
  let aTo1 = stringEncodeDecode.replace(/a/g, 1); // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll
  stringEncodeDecode = aTo1;
  let eTo2 = stringEncodeDecode.replace(/e/g, 2);
  stringEncodeDecode = eTo2;
  let iTo3 = stringEncodeDecode.replace(/i/g, 3);
  stringEncodeDecode = iTo3;
  let oTo4 = stringEncodeDecode.replace(/o/g, 4);
  stringEncodeDecode = oTo4;
  let uTo5 = stringEncodeDecode.replace(/u/g, 5);
  stringEncodeDecode = uTo5;
  return stringEncodeDecode;  
}
function decode(stringEncodeDecode) {
  // seu código aqui
  let oneToA = stringEncodeDecode.replace(/1/g, "a");
  stringEncodeDecode = oneToA;
  let twoToE = stringEncodeDecode.replace(/2/g, "e");
  stringEncodeDecode = twoToE;
  let threeToI = stringEncodeDecode.replace(/3/g, "i");
  stringEncodeDecode = threeToI;
  let fourToO = stringEncodeDecode.replace(/4/g, "o");
  stringEncodeDecode = fourToO;
  let fiveToU = stringEncodeDecode.replace(/5/g, "u");
  stringEncodeDecode = fiveToU;
  return stringEncodeDecode;
}
// let stringEncodeDecode = "hi there!";
// console.log("Desafio 9: Encode: ", encode(stringEncodeDecode), " Decode: ", decode(stringEncodeDecode));

// Desafio 10
function techList(techs, name) {
  // seu código aqui
}
// let name = "Lucas";
// let techs = ["React", "Jest", "HTML", "CSS", "JavaScript"];
// console.log("Desafio 10: ", techList(techs, name));

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
