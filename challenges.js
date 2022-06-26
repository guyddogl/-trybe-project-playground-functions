// Desafio 1
const compareTrue = (param1, param2) => param1 && param2;

// Desafio 2
const calcArea = (base, height) => ((base * height) / 2);

// Desafio 3
const splitSentence = (string) => string.split(' ');

// Desafio 4
const concatName = (arrayNomes) => `${arrayNomes[arrayNomes.length - 1]}, ${arrayNomes[0]}`;

// Desafio 5
const footballPoints = (wins, ties) => ((wins * 3) + ties);

// Desafio 6
const highestCount = (arrayNumeros) => {
  let maiorValor = Math.max(...arrayNumeros);
  let count = 0;
  for (let indexNumber of arrayNumeros) {
    if (indexNumber === maiorValor) count += 1;
  }
  return count;
};

// Desafio 7
const catAndMouse = (mouse, cat1, cat2) => {
  let resultado = '';
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    resultado = 'cat1';
  } else if (Math.abs(cat2 - mouse) < Math.abs(cat1 - mouse)) {
    resultado = 'cat2';
  } else {
    resultado = 'os gatos trombam e o rato foge';
  }
  return resultado;
};

// Desafio 8
const numbersModule = (indexNumber, fizzBuzzResultado) => {
  if ((indexNumber % 3) === 0 && (indexNumber) % 5 === 0) fizzBuzzResultado.push('fizzBuzz');
  else if ((indexNumber) % 3 === 0) fizzBuzzResultado.push('fizz');
  else if ((indexNumber) % 5 === 0) fizzBuzzResultado.push('buzz');
  else fizzBuzzResultado.push('bug!');
};

const fizzBuzz = (arrayFizzBuzz) => {
  let fizzBuzzResultado = [];
  for (let indexNumber of arrayFizzBuzz) {
    numbersModule(indexNumber, fizzBuzzResultado);
  }
  return fizzBuzzResultado;
};

// Desafio 9
const encode = (stringEncodeDecode) => {
  let aTo1 = stringEncodeDecode.replace(/a/g, 1);
  let eTo2 = aTo1.replace(/e/g, 2);
  let iTo3 = eTo2.replace(/i/g, 3);
  let oTo4 = iTo3.replace(/o/g, 4);
  return oTo4.replace(/u/g, 5);
};

const decode = (stringEncodeDecode) => {
  let oneToA = stringEncodeDecode.replace(/1/g, 'a');
  let twoToE = oneToA.replace(/2/g, 'e');
  let threeToI = twoToE.replace(/3/g, 'i');
  let fourToO = threeToI.replace(/4/g, 'o');
  return fourToO.replace(/5/g, 'u');
};

// Desafio 10
const techList = (techs, name) => {
  if (techs.length !== 0) {
    techs.sort();
    let arrayTechs = [];
    for (let indexTechs of techs) {
      let objTechs = {
        tech: indexTechs,
        name,
      };
      arrayTechs.push(objTechs);
    }
    return arrayTechs;
  }
  return 'Vazio!';
};

module.exports = {
  compareTrue,
  calcArea,
  splitSentence,
  concatName,
  footballPoints,
  highestCount,
  catAndMouse,
  numbersModule,
  fizzBuzz,
  encode,
};