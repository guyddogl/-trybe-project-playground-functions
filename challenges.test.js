const { compareTrue, calcArea, splitSentence, concatName, footballPoints, highestCount, catAndMouse, fizzBuzz, encode, decode, techList } = require('./challenges');

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
  test('Retorna 3 quando o parâmetro for [1, 2, 3, 7, 5, 7, 1, 2, 7]', () => {
    expect(highestCount([1, 2, 3, 7, 5, 7, 1, 2, 7])).toBe(3);
  });
  test('Retorna 1 quando o parâmetro for [1, 2, 3]', () => {
    expect(highestCount([1, 2, 3])).toBe(1);
  });
  test('Retorna 2 quando o parâmetro for [0, 0]', () => {
    expect(highestCount([0, 0])).toBe(2);
  });
});

// Testes catAndMouse
describe('Desafio 7: Crie uma função que verifica qual gato está mais perto do rato', () => {
  test('Retorna cat1 quando os parâmetros forem 0, 1 e 5', () => {
    expect(catAndMouse(0, 1, 5)).toBe('cat1');
  });
  test('Retorna cat2 quando os parâmetros forem 4, 2 e 5', () => {
    expect(catAndMouse(4, 2, 5)).toBe('cat2');
  });
  test('Retorna \'os gatos trombam e o rato foge\' quando os parâmetros forem 2, 3 e 3', () => {
    expect(catAndMouse(2, 3, 3)).toBe('os gatos trombam e o rato foge');
  });
});

// Testes fizzBuzz e numbersModule
describe('Desafio 8: Crie uma função que recebe um array de números e retorna um array de string de acordo com o resultado', () => {
  test('Retorna as strings [\'bug!\', \'fizzBuzz\', \'bug!\', \'fizz\', \'fizzBuzz\'] quando é passado os parâmetros [2, 15, 7, 9, 45] para função fizzBuzz', () => {
    expect(fizzBuzz([2, 15, 7, 9, 45])).toEqual(['bug!', 'fizzBuzz', 'bug!', 'fizz', 'fizzBuzz']);
  });
  test('Retorna as strings [\'bug!\', \'fizz\'] quando é passado os parâmetros [7, 9] para função fizzBuzz', () => {
    expect(fizzBuzz([7, 9])).toEqual(['bug!', 'fizz']);
  });
  test('Retorna as strings [\'fizz\', \'buzz\'] quando é passado os parâmetros [9, 25] para função fizzBuzz', () => {
    expect(fizzBuzz([9, 25])).toEqual(['fizz', 'buzz']);
  });
});

// Testes encode e decode
describe('Desafio 9: Implemente uma função que codifica e decodifica uma frase, trocando vogais por números ou números por vogais. ', () => {
  test('Retorne uma string codificada quando a função encode for utilizada', () => {
    expect(encode('hello')).toBe('h2ll4');
    expect(encode('How are you today?')).toBe('H4w 1r2 y45 t4d1y?');
    expect(encode('This is an encoding test.')).toBe('Th3s 3s 1n 2nc4d3ng t2st.');
    expect(encode('go Trybe!')).toBe('g4 Tryb2!');
  });
  test('Retorne uma string decodificada quando a função decode for utilizada', () => {
    expect(decode('h2ll4')).toBe('hello');
    expect(decode('H4w 1r2 y45 t4d1y?')).toBe('How are you today?');
    expect(decode('Th3s 3s 1n 2nc4d3ng t2st.')).toBe('This is an encoding test.');
    expect(decode('g4 Tryb2!')).toBe('go Trybe!');
  });
});

// Testes techList
describe('10 - Crie uma função de Lista de tecnologias', () => {
  test('Retorne uma lista de objetos ordenados quando é passada uma lista com 5 tecnologias deve', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas',
      },
      {
        tech: 'HTML',
        name: 'Lucas',
      },
      {
        tech: 'JavaScript',
        name: 'Lucas',
      },
      {
        tech: 'Jest',
        name: 'Lucas',
      },
      {
        tech: 'React',
        name: 'Lucas',
      },
    ]);
  });
});