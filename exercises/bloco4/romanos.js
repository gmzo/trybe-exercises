// | I   | 1    |
// | --- | ---- |
// | IV  | 4    |
// | V   | 5    |
// | IX  | 9    |
// | X   | 10   |
// | XL  | 40   |
// | L   | 50   |
// | XC  | 90   |
// | C   | 100  |
// | CD  | 400  |
// | D   | 500  |
// | CM  | 900  |
// | M   | 1000 |

// usar endswith para verificar qual soma fazer

function convertRomanToDecimal(roman) {
	let romanArray = roman.split('');
	let individualRomanToDecimal = [];

	let romanAlphabet = {
		I: 1,
		II: 2,
		III: 3,
		IV: 4,
		V: 5,
		IX: 9,
		X: 10,
		XL: 40,
		L: 50,
		XC: 90,
		C: 100,
		CD: 400,
		D: 500,
		CM: 900,
		M: 1000,
	};

	// converte cada número romano individualmente em decimal
	// e guarda no array individualRomanToDecimal
	for (const roman of romanArray) {
		individualRomanToDecimal.push(romanAlphabet[roman]);
	}

	// variavel recebe o primeiro valor do array de decimais individuais
	// para servir de apoio na soma para chegar ao resultado final
	let decimalNumber = individualRomanToDecimal[0];

	let tamanhoEstaticoArray = individualRomanToDecimal.length;

	// soma para obter o numero decimal
	for (let i = 0; i < tamanhoEstaticoArray - 1; i++) {
		if (individualRomanToDecimal[i] >= individualRomanToDecimal[i + 1]) {
			decimalNumber += individualRomanToDecimal[i + 1];
		} else {
			decimalNumber +=
				individualRomanToDecimal[i + 1] - 2 * individualRomanToDecimal[i];
		}
	}
	return decimalNumber;
}

console.table(convertRomanToDecimal('MMMCMXCIX'));

//primeiro, como vou ler o input?
// se o número da frente é maior que o de trás, faz-se o da frente menos o de trás
// como primeiro passo, vou colocar o input em um array --FEITO!
//agora preciso associar cada elemento do array a um valor do objeto romanAlphabet.
// para isso posso converter os romanos nos respectivos numeros, e armazena-los em um array de romanos convertidos --FEITO!
// agora que tenho cada um dos valores individualmente, preciso criar a lógica que vai dizer qual soma e qual subtrai
// para isso tenho que verificar se o número a frente é maior ou menor que o número atual
// se ele for menor ou igual, vem com sinal positivo na soma, caso seja maior, negativo
// primeiro vamos criar o mecanismo que verifica! -- FEITO!
// agora tenho que criar a expressão que vai calcular o numero romano
// posso usar o for de verificação, para dentro da condição,
// somar o valor de forma negativa ou positiva à variável decimalNumber
