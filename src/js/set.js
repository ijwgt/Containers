export default class Team {
	constructor() {
		this.members = new Set();
	}
	add(member) {
		this.members.forEach((item) => {
			if (item === member) {
				throw new Error('Объект уже существует в команде');
			}
		});
		this.members.add(member);
	}

	addAll(...members) {
		members.forEach(member => {
			this.members.add(member);
		});
	}

	toArray() {
		return Array.from(this.members);
	}
}