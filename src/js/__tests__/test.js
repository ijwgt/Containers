import Character from '../Character';
// import Bowman from '../bowman';
import Daemon from '../daemon';
// import Magician from '../magician';
// import Swordsman from '../swordsman';
// import Undead from '../undead';
import Zombie from '../zombie';

test.each([
	[Bowman],
	[Daemon],
	[Magician],
	[Swordsman],
	[Undead],
	[Zombie],
])('Выброс ошибки в случае, если имя имеет тип отличный от типа "строка"',
	(Character) => {
		const result = () => new Character(12345);
		const expected = 'Имя персонажа должно иметь тип "строка"';
		expect(result).toThrow(expected);
	}
)

test.each([
	[Bowman],
	[Daemon],
	[Magician],
	[Swordsman],
	[Undead],
	[Zombie],
])('Выброс ошибки в случае, если имя персонажа содержит менее 2-х символов', (Character) => {
	const result = () => new Character('s');
	const expected = 'Имя персонажа должно содержать от 2 до 10 символов';

	expect(result).toThrow(expected);
});

test.each([
	[Bowman],
	[Daemon],
	[Magician],
	[Swordsman],
	[Undead],
	[Zombie],
])('Выброс ошибки в случае, если имя персонажа содержит более 10 символов', (Character) => {
	const result = () => new Character('LongHeroName');
	const expected = 'Имя персонажа должно содержать от 2 до 10 символов';

	expect(result).toThrow(expected);
});


test('Выброс ошибки в случае, если тип персонажа неизвестен', () => {
	const result = () => new Character('Hero1', 'Archer');
	const expected = 'Неизвестный персонаж';

	expect(result).toThrow(expected);
});

test('Выброс ошибки, невозможно повысить показатели, персонаж мертв', () => {
	const pers1 = new Character('Орк', 'Daemon');

	pers1.health = 100;
	pers1.level = 10;
	pers1.attack = 10;
	pers1.defence = 40;
	pers1.levelUp();

	expect(pers1.health).toBe(100);
	expect(pers1.level).toBe(11);
	expect(pers1.attack).toBe(12);
	expect(pers1.defence).toBe(48);

	pers1.health = 0;

	expect(() => { pers1.levelUp(); }).toThrow('Персонаж мертв');
});

test('Проверка на улучшение показателей', () => {
    const pers2 = new Character('Вечный', 'Daemon');

    pers2.health = 2;
    pers2.level = 10;
    pers2.attack = 10;
    pers2.defence = 40;

    pers2.levelUp();

    const result = [pers2.level, pers2.attack, pers2.defence];
    const expected = [11, 12, 48];

    expect(result).toEqual(expected);
});

test('Проверка на нанесенный урон', () => {
    const pers1 = new Character('Орк', 'Daemon');
    pers1.defence = 40;
    pers1.damage(100);
    expect(pers1.health).toBe(40);
});