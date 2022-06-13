const { compareTrue, calcArea, splitSentence } = require('./challenges');

// Testes compareTrue
describe('Desafio 1: Crie uma função usando o operador &&', () => {
  test('Retorna false quando executar a função compareTrue com um parâmetro false e outro true', () => {
    expect(false).toBe(compareTrue(false, true));
    expect(false).toBe(compareTrue(true, false));
  });
  test('Retorna false quando executar a função compareTrue com os parâmetros false e false', () => {
    expect(false).toBe(compareTrue(false, false));
  });
  test('Retorna true quando executar a função compareTrue com os parâmetros true e true', () => {
    expect(true).toBe(compareTrue(true, true));
  });
});

// Testes calcArea
describe('Desafio 2: Crie uma função que calcule a área de um triangulo', () => {
  test('Retorna 60 quando executar a função calcArea com os parâmetros base = 10 e height = 12', () => {
    expect(60).toBe(calcArea(10, 12));
  });
  test('Retorna 154 quando executar a função calcArea com os parâmetros base = 11 e height = 28', () => {
    expect(154).toBe(calcArea(11, 28));
  });
  test('Retorna 24.5 quando executar a função calcArea com os parâmetros base = 7 e height = 7', () => {
    expect(24.5).toBe(calcArea(7, 7));
  });
});

// Testes splitSentence
describe('Desafio 3: Crie uma função que divida uma frase', () => {
  test('Retorna [Dragon, Ball, Z] quando receber "Dragon Ball Z"', () => {
    expect(['Dragon', 'Ball', 'Z']).toEqual(splitSentence('Dragon Ball Z'));
  });
  test('Retorna [#vqv, Vamo, Que, Vamo] quando receber "#vqv Vamo Que Vamo"', () => {
    expect(['#vqv', 'Vamo', 'Que', 'Vamo']).toEqual(splitSentence('#vqv Vamo Que Vamo'));
  });
});
