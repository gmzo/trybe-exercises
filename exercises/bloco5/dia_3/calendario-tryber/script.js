function createDaysOfTheWeek() {
	const weekDays = [
		'Domingo',
		'Segunda',
		'Terça',
		'Quarta',
		'Quinta',
		'Sexta',
		'Sábado',
	];
	const weekDaysList = document.querySelector('.week-days');

	for (let index = 0; index < weekDays.length; index += 1) {
		const days = weekDays[index];
		const dayListItem = document.createElement('li');
		dayListItem.innerHTML = days;

		weekDaysList.appendChild(dayListItem);
	}
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
const dezDaysList = [
	29,
	30,
	1,
	2,
	3,
	4,
	5,
	6,
	7,
	8,
	9,
	10,
	11,
	12,
	13,
	14,
	15,
	16,
	17,
	18,
	19,
	20,
	21,
	22,
	23,
	24,
	25,
	26,
	27,
	28,
	29,
	30,
	31,
];

// Thinking proccess

// função que criará elementos li para cada dia do array dezDaysList como filho da ul com id #days
// forof percorrendo array dezDaysList
//    1- variavel day armazena a criacao de novo elemento html 'li'
//    2- se for feriado: aplica classe holiday, se for sexta: aplica classe friday
//    3 - aplica classe day
//    4 - busca ul com id #days e aplica appendChild nele levendo day como parametro
function createDays() {
	for (const days of dezDaysList) {
		var day = document.createElement('li');
		day.innerText = days;
		day.className = 'day';

		if (days === 24 || days === 25 || days === 31) {
			day.classList.add('holiday');
		}

		if (days === 4 || days === 11 || days === 18 || days === 25) {
			day.classList.add('friday');
		}

		document.querySelector('#days').appendChild(day);
	}
}

createDays();
