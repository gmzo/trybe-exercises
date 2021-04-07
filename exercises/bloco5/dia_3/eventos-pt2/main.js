const divUm = document.getElementById('divUm');
divUm.addEventListener('click', addTechClass);

const divDois = document.getElementById('divDois');
divDois.addEventListener('click', addTechClass);

const divTres = document.getElementById('divTres');
divTres.addEventListener('click', addTechClass);

const input = document.getElementById('input');
input.addEventListener('keyup', changeTech);

const myWebpage = document.getElementById('mySpotrybefy');

// ex 2 e 2.1
function addTechClass(event) {
	event.target.className = 'tech';
	let listaDeDivs = document.querySelectorAll('.container div');

	for (const div of listaDeDivs) {
		if (div != event.target) {
			div.className = '';
		}
	}
}

// ex 3
function changeTech(event) {
	let selectedDiv = document.querySelector('.tech');

	selectedDiv.innerText = input.value;
}

/*
 Copie esse arquivo e edite apenas ele;
 Crie uma função que adicione a classe 'tech' ao elemento selecionado;
1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
 Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
com a classe 'tech';
 Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
redirecione para alguma página;
1. Que tal redirecionar para seu portifólio?
 Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
a cor do mesmo;

Segue abaixo um exemplo do uso de event.target:
*/

function resetText(event) {
	// O Event é passado como um parâmetro para a função.
	event.target.innerText = 'Opção reiniciada';
	// O event possui várias propriedades, porém a mais usada é o event.target,
	// que retorna o objeto que disparou o evento.
}

divUm.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.
