const { compareTrue, calcArea, splitSentence, concatName, footballPoints, highestCount } = require('./challenges');

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
describe('Desafio 3: Crie uma função que divide uma frase', () => {
  test('Retorna [Dragon, Ball, Z] quando receber \'Dragon Ball Z\'', () => {
    expect(['Dragon', 'Ball', 'Z']).toEqual(splitSentence('Dragon Ball Z'));
  });
  test('Retorna [#vqv, Vamo, Que, Vamo] quando receber \'#vqv Vamo Que Vamo\'', () => {
    expect(['Vamo', 'Que', 'Vamo']).toEqual(splitSentence('Vamo Que Vamo'));
  });
  test('Retorna [#vqv] quando receber \'#vqv\'', () => {
    expect(['#vqv']).toEqual(splitSentence('#vqv'));
  });
});

// Testes concatName
describe('Desafio 4: Crie uma função que retorne a primeira e a última string de um array', () => {
  test('Retorna \'Campeão, Flamengo\' ao receber [\'Flamengo\', \'Octa\', \'Campeão\']', () => {
    expect('Campeão, Flamengo').toBe(concatName(['Flamengo', 'Octa', 'Campeão']));
  });
  test('Retorna \'Campeão, Flamengo\' ao receber [\'Pague\', \'a\', \'série\', \'B\']', () => {
    expect('B, Pague').toBe(concatName(['Pague', 'a', 'série', 'B']));
  });
  test('Retorna \'Novo, Vice\' ao receber [\'Vice\', \'de\', \'Novo\'', () => {
    expect('Novo, Vice').toBe(concatName(['Vice', 'de', 'Novo']));
  });
});

// Testes footballPoints
describe('Desafio 5: Crie uma função que calcule a pontuação de um campeonato de futebol', () => {
  test('Retorna 30 pontos quando o time tiver 8 vitórias e 6 empates', () => {
    expect(footballPoints(8, 6)).toBe(30);
  });
  test('Retorna 0 pontos quando o time tiver 0 vitórias e 0 empates', () => {
    expect(footballPoints(0, 0)).toBe(0);
  });
  test('Retorna 8 pontos quando o time tiver 2 vitórias e 2 empates', () => {
    expect(footballPoints(2, 2)).toBe(8);
  });
});

// Testes highestCount
describe('Desafio 6: Crie uma função que retorne a quantidade de vezes que o maior número de um array se repete', () => {

});
