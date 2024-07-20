import Team from '../set';
import Daemon from '../daemon';
import Zombie from '../zombie';

const zombie = new Zombie('name');
const daemon = new Daemon('name');

test('simple addition', () => {
	const team = new Team();
	team.add(zombie);
	const result = team.toArray();
	expect(result).toEqual([zombie]);
});

test('adding multiple elements', () => {
	const team = new Team();
	team.addAll(zombie, daemon);
	const result = team.toArray();
	expect(result).toEqual([zombie, daemon]);
});

test('adding the same object', () => {
	const team = new Team();
	team.add(zombie);
	expect(() => team.add(zombie)).toThrow();
});