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

// Ex 1

//Thinking proccess

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

// Ex 2

//Thinking proccess

// funcao que cria botao de feriados recebendo string como parametro
// declarar variavel button que armazenara a criacao do elemento html 'button'
// atribuir a button a classe .btn-holiday
// atribuir ao texto interno de button  a string passada para a função
// achar a div que contem a classe .buttons-container
// inserir button como filho dessa div

var button = document.createElement('button');
function createHolidayButton(string) {
	button.classList = 'btn-holiday';
	button.innerText = string;
	document.querySelector('.buttons-container').appendChild(button);
}

createHolidayButton('Feriados');

// Ex 3

//Thinking proccess

// funcao que adiciona a button o efeito de ao clica-lo mudar o background color das li's que tem a classe holiday
// relembrar a sintaxe de criacao de eventListener
//  - elementoHTML.eventListener('evento', funcao);
// reunir li's que possuem a classe holiday utilizando a ferramenta querySelectorAll
// armazenar estas li's em uma variavel holidays
// percorrer cada elemento da lista holidays com forof
// aplicar a mudanca de background color para cada elemento com a funcao .style.backgroundColor

//v2
// condicao: se holiday.style.backgroundColor === '' , aplica 'yellow'
//    senao, se holiday.style.backgroundColor === 'yellow' , aplica ''
// '' vazio porque as li's nao tem background color, então se estiver vazio quer dizer
// que estao com o fundo padrao, o fundo da página em si

button.addEventListener('click', highlightHolidays);

let holidays = document.querySelectorAll('.holiday');

function highlightHolidays(event) {
	for (const holiday of holidays) {
		if (holiday.style.backgroundColor === '') {
			holiday.style.backgroundColor = 'yellow';
		} else if (holiday.style.backgroundColor === 'yellow') {
			holiday.style.backgroundColor = '';
		}
	}
}
