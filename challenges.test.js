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
