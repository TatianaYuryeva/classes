export class Character {
  #types = ['Boweman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

  constructor(name, type, attack, defence, health = 100, level = 1) {
    if (typeof (name) !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Укажите корректное имя персонажа');
    }
    if (!this.#types.includes(type)) {
      throw new Error('Укажите корректный тип персонажа');
    } else {
      this.name = name;
      this.type = type;
      this.health = health;
      this.level = level;
      this.attack = attack;
      this.defence = defence;
    }
  }
}

export class Boweman extends Character {
  attack = 25;

  defence = 25;
}

export class Swordsman extends Character {
  attack = 40;

  defence = 10;
}

export class Magician extends Character {
  attack = 10;

  defence = 40;
}

export class Daemon extends Character {
  attack = 10;

  defence = 40;
}

export class Undead extends Character {
  attack = 25;

  defence = 25;
}

export class Zombie extends Character {
  attack = 40;

  defence = 10;
}
