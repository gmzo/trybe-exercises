function palindrome(word) {
	if (word === word.split('').reverse().join('')) {
		console.log('Palindrome!');
	} else {
		console.log('No Palindrome!');
	}
}

function greatestNumber(array) {
	return Math.max.apply(null, array);
}

function greatestWord(words) {
	let wordSize = [];
	for (const word of words) {
		wordSize.push(word.length);
	}

	let indexGreatest = wordSize.indexOf(greatestNumber(wordSize));

	return words[indexGreatest];
}

function mostApparitions(numbers) {
	// posso criar um for que vai contar quantas vezes cada um dos elementos apareceu
	// e armazenar essas informações em outro array --FEITO!
	// depois usar a funcao greatNumber para ver o maior, resgatar seu indice
	// que será o mesmo do array principal -- FEITO!
	let currentNumberCount = 0;
	let numbersFrequency = [];

	for (const number of numbers) {
		for (let i = 0; i < numbers.length; i++) {
			if (numbers[i] === number) {
				currentNumberCount += 1;
			}
		}

		numbersFrequency.push(currentNumberCount);
		currentNumberCount = 0;
	}

	let indexOfMostFrequent = numbersFrequency.indexOf(
		greatestNumber(numbersFrequency)
	);

	return numbers[indexOfMostFrequent];
}

function sumBetween(number) {
	// let sum = 0;
	// let aux = number;
	// for (let i = 1; i <= number; i++) {
	// 	sum += aux;
	// 	aux -= 1;
	// }

	return (number * (number + 1)) / 2; // MATEMÁGICA!!!
}

function stringEndsWith(word, ending) {
	return word.endsWith(ending);
}

console.log(stringEndsWith('joaofernando', 'fernan'));
