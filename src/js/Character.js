export default class Character {
	constructor(name, type) {
		const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie']

		if (name.length < 2 || name.length > 10) {
			throw new Error('Имя персонажа должно содержать от 2 до 10 символов');
		}

		if (typeof name !== 'string') {
			throw new Error('Имя персонажа должно иметь тип "строка"')
		}

		if (!types.includes(type)) {
			throw new Error('Неизвестный персонаж');
		}

		this.name = name;
		this.type = type;

		this.health = 100;
		this.level = 1;
		this.attack = undefined;
		this.defence = undefined;
	}

	levelup() {
		if (this.health > 0) {
			this.level += 1;
			this.attack *= 1.2;
			this.defence *= 1.2;
			this.health = 100;
		} else {
			throw new Error('Невозможно повысить показатели, персонаж мертв');
		}
	}

	damage(points) {
		if (this.health - points * (1 - this.defense / 100) < 0) {
			this.health = 0;
		} else {
			this.health -= points * (1 - this.defense / 100);
		}
	}
}