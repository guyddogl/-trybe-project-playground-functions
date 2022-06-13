const challenges = require('./challenges');
const { compareTrue } = require('./challenges');

describe('Desafio 1: Crie uma função usando o operador &&', () => {
  test('Retorna false quando executar a função compareTrue com um parâmetro false e outro true', () => {
    expect(false).toBe(compareTrue(false, true));
    expect(false).toBe(compareTrue(true, false));
  });
});