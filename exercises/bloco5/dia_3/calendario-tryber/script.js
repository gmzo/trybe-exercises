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

// Ex 4 e 5

// Basicamente mesma coisa dos ex's 2 e 3

// Ex 4

var button2 = document.createElement('button');
function createFridayButton(string) {
	button2.classList = 'btn-friday';
	button2.innerText = string;
	document.querySelector('.buttons-container').appendChild(button2);
}

createFridayButton('Sexta-feira');

// Ex 5

button2.addEventListener('click', highlightFridays);

let fridays = document.querySelectorAll('.friday');

function highlightFridays(event) {
	for (const friday of fridays) {
		if (friday.style.backgroundColor === '') {
			friday.style.backgroundColor = 'yellow';
		} else if (friday.style.backgroundColor === 'yellow') {
			friday.style.backgroundColor = '';
		}
	}
}

// Ex 6

// Thinking proccess

//duas funcoes
//	1 - ao botar o ponteiro do mouse em um dia do calendario, aumente a fonte do número do dia
//	2 - ponteiro do mouse sai do dia, o tamanho da fonte volta ao padrão

// antes de fazer a primeira funcao, criar eventListener 'zoom' em cada um dos li's
// para fazer isto:
//	dar um querySelectorAll('.day') e armazenar numa variável 'unzoomedDays'
// 	'unzoomedDays' é um array com todos os elementos html li com a classe '.day'
//	agora criando event listener em cada unzoomedDay of unzoomedDays:
//		forof em cada unzoomedDay of unzoomedDays:
//		unzoomedDay.addEventListener('mouseover', zoomIn)

let unzoomedDays = document.querySelectorAll('.day');

for (const unzoomedDay of unzoomedDays) {
	unzoomedDay.addEventListener('mouseover', zoomIn);
	unzoomedDay.addEventListener('mouseleave', zoomOut);
}

//  primeira função 'zoomIn' que recebe event como parametro
//	o elemento html que chamou o evento, ou seja, o event.target, vai receber .style.size = '40px'

function zoomIn(event) {
	event.target.style.fontSize = '2em';
}

// segunda função 'zoomOut'

function zoomOut(event) {
	event.target.style.fontSize = '1em';
}

// Ex 7

// Thinking proccess

//	função createTasks que recebe como parametro uma string 'task' e cria elemento span contendo 'task'
//		variavel actualTask armazena a criação do elemento html '<span>'
//		atribui valor do texto interno (innerText) de actualTask a string passada como parâmetro 'task'
//		variavel divMyTasks armazena o query por div que tenha a classe ('.my-tasks')
//		introduz actualTask como filha de divMyTasks

function createTask(task) {
	var actualTask = document.createElement('span');
	actualTask.innerText = task;

	var divMyTasks = document.querySelector('.my-tasks');

	divMyTasks.appendChild(actualTask);
	return actualTask;
}

createTask('ESTUDAR');

// Ex 8

// Thinking proccess

// funcao que recebe como parametro string 'cor' cria elemento html div com classe '.task'
// sendo filha da div com classe '.my-tasks' e tendo atributo .style.backgroundColor = color;

//	criar variavel coloredBackground que vai receber a criação do elemento html div
//	atribuir a coloredBackground a className: 'task'
//	atribuir a coloredBackground o style.backgroundColor = color;
// 	criar variavel divMyTasks que recebe o valor da div do query pela classe ('.my-tasks')
//	atribuir coloredBackground como filha de divMyTasks

function makeColoredDiv(color) {
	var coloredBackground = document.createElement('div');
	coloredBackground.className = 'task';
	coloredBackground.style.backgroundColor = color;

	var divMyTasks = document.querySelector('.my-tasks');

	divMyTasks.appendChild(coloredBackground);
}

makeColoredDiv('red');

// Ex 9

// Thinking proccess

// funcao que atribui classe '.task selected' a div que tenha a classe '.task' quando clidada
//	primeiro, criando eventListener necessario:
//		criar variavel 'task' que armazenara o query por um elemento html com classe 'task'
//		adicionar a 'task' um eventListener('click', selectTask)

var task = document.querySelector('.task');
task.addEventListener('click', selectTask);

// funcao selectTask que recebe parametro event e atribui ao elemento html que chamou o evento
// (event.target) a classe 'selected';
//		atribuir a event.target.classList.add('selected')
//		estou usando o add da funcao classList pois nao quero sobrescrever as funcoes do
//		elemento html que chamou o evento, quero adicionar a classe 'selected' às classes
//		que o elemento ja possui

// v2

//	tenho que, ao clicar novamente, voltar a ter apenas a classe 'task'
//	posso aplicar condicao:
//		se event.target.className === 'task': event.target.classList.add('selected');
//		se event.target.className === 'task selected': event.target.classList.remove('selected');

function selectTask(event) {
	if (event.target.className === 'task') {
		event.target.classList.add('selected');
	} else if (event.target.className === 'task selected') {
		event.target.classList.remove('selected');
	}
}
