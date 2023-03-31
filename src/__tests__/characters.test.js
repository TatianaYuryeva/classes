import {
  Boweman, Daemon, Magician, Swordsman, Undead, Zombie,
} from '../js/characters';

const boweman = new Boweman('name', 'Boweman');
const swordsman = new Swordsman('name', 'Swordsman');
const magician = new Magician('name', 'Magician');
const daemon = new Daemon('name', 'Daemon');
const undead = new Undead('name', 'Undead');
const zombie = new Zombie('name', 'Zombie');

test('invalid name', () => {
  expect(() => new Boweman('n', 'Boweman')).toThrow('Укажите корректное имя персонажа');
});

test('invalid type', () => {
  expect(() => new Boweman('name', 'man')).toThrow('Укажите корректный тип персонажа');
});

test('create character', () => {
  expect(boweman).toEqual({
    name: 'name',
    type: 'Boweman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
  expect(swordsman).toEqual({
    name: 'name',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
  expect(magician).toEqual({
    name: 'name',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
  expect(daemon).toEqual({
    name: 'name',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
  expect(undead).toEqual({
    name: 'name',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
  expect(zombie).toEqual({
    name: 'name',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});
