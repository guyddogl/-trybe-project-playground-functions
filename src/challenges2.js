// Desafio 11
function generatePhoneNumber(arrayNumbers) {
  // seu código aqui
  if (arrayNumbers.length === 11) {
    for (let value of arrayNumbers) {
      if (value >= 0 && value <= 9) {
        let count = 0;
        for (let countNumber of arrayNumbers) {
          if (value === countNumber) {
            count += 1;
          }
        }
        if (count >= 3) {
          return 'não é possível gerar um número de telefone com esses valores';
        }
      } else {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
    return '(' + arrayNumbers[0] + arrayNumbers[1] + ') ' + arrayNumbers[2] + arrayNumbers[3] + arrayNumbers[4] + arrayNumbers[5] + arrayNumbers[6] + '-' + arrayNumbers[7] + arrayNumbers[8] + arrayNumbers[9] + arrayNumbers[10];
  }
  return 'Array com tamanho incorreto.'
}
// let arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];
// console.log("Desafio 11: ", generatePhoneNumber(arrayNumbers));

// Desafio 12
function triangleCheck(linaA, lineB, lineC) {
  // seu código aqui
  let sumlineAlineB = linaA + lineB;
  let sumLineAlineC = linaA + lineC;
  let sumLineBlineC = lineB + lineC;

  if (linaA > sumLineBlineC || lineB > sumLineAlineC || lineC > sumlineAlineB) {
    return false;
  }
  return true;
}
// let lineA = 10, lineB = 14, lineC = 8;
// console.log("Desafio 12: ", triangleCheck(lineA, lineB, lineC));

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
