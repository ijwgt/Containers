import Character from './Character';

export default class Daemon extends Character {
	constructor(name, type) {
		super(name, type);
		this.attack = 25;
		this.defence = 25;
	}
}