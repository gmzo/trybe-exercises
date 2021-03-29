let prizeDraw = [];

// Gera o jogo campeão
for (let i = 0; i < 6; i++) {
	let number = 0;
	number = Math.ceil(Math.random() * 60);
	prizeDraw.push(number);
}

let game = [17, 26, 59, 31, 12, 20];

let numberOfHits = 0;

for (let number of prizeDraw) {
	let currentNumber = prizeDraw[number];

	for (let gameNumber of game) {
		if (currentNumber === gameNumber) {
			numberOfHits += 1;
		}
	}
}

console.log(
	'SEU JOGO:',
	prizeDraw,
	'\nGABARITO: ',
	game,
	'\n\nACERTOS: ',
	numberOfHits
);
