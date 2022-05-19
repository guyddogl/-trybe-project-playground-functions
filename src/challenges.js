// Desafio 1
function compareTrue(param1, param2) {
  // seu código aqui
  return param1 && param2;
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
  return `${arrayNomes[arrayNomes.length - 1]}, ${arrayNomes[0]}`;
}
// let arrayNomes = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
// console.log("Desafio 4: " + concatName(arrayNomes));

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return ((wins * 3) + ties);
}
// let wins = 14;
// let ties = 8;
// console.log("Desafio 5: ", footballPoints(wins, ties));

// Desafio 6
function highestCount(arrayNumeros) {
  // seu código aqui
  let maiorValor = Math.max(...arrayNumeros); // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max
  let count = 0;
  for (let indexNumber of arrayNumeros) {
    if (indexNumber === maiorValor) count += 1;
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
  for (let indexNumber of arrayFizzBuzz) {
    if ((indexNumber % 3) === 0 && (indexNumber) % 5 === 0) fizzBuzzResultado.push('fizzBuzz');
    else if ((indexNumber) % 3 === 0) fizzBuzzResultado.push('fizz');
    else if ((indexNumber) % 5 === 0) fizzBuzzResultado.push('buzz');
    else fizzBuzzResultado.push('bug!');
  }
  return fizzBuzzResultado;
}
// let arrayFizzBuzz = [2, 15, 7, 9, 45];
// console.log("Desafio 8: ", fizzBuzz(arrayFizzBuzz));

// Desafio 9
function encode(stringEncodeDecode) {
  // seu código aqui
  let aTo1 = stringEncodeDecode.replace(/a/g, 1); // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll
  let eTo2 = aTo1.replace(/e/g, 2);
  let iTo3 = eTo2.replace(/i/g, 3);
  let oTo4 = iTo3.replace(/o/g, 4);
  return oTo4.replace(/u/g, 5);
}
function decode(stringEncodeDecode) {
  // seu código aqui
  let oneToA = stringEncodeDecode.replace(/1/g, 'a');
  let twoToE = oneToA.replace(/2/g, 'e');
  let threeToI = twoToE.replace(/3/g, 'i');
  let fourToO = threeToI.replace(/4/g, 'o');
  return fourToO.replace(/5/g, 'u');
}
// let stringEncodeDecode = "hi there!";
// console.log("Desafio 9: Encode: ", encode(stringEncodeDecode), " Decode: ", decode(stringEncodeDecode));

// Desafio 10
function techList(techs, name) {
  // seu código aqui
  if (techs.length !== 0) {
    techs.sort(); // https://ricardo-reis.medium.com/o-m%C3%A9todo-sort-do-array-javascript-482576734e0a
    let arrayTechs = [];
    for (let indexTechs of techs) {
      let objTechs = {
        tech: indexTechs,
        name, // Mentoria. Se propriedade e valor forem iguais não precisa repetir o nome (name: name)
      };
      arrayTechs.push(objTechs);
    }
    return arrayTechs;
  }
  return 'Vazio!';
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
