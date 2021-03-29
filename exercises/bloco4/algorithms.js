function palindrome(word) {
	if (word === word.split('').reverse().join('')) {
		console.log('Palindrome!');
	} else {
		console.log('No Palindrome!');
	}
}
palindrome('arara');
