var paragraph = document.querySelectorAll('p')[0];
paragraph.style.color = 'blue';
paragraph.innerText =
	"I'm gonna be honest, just put that one because it's a good movie but it's not my favorite at all. \nIdk what's my favorite movie. ";

var title = document.querySelector('h2');

title.innerText = 'Forrest Gump';

var subtitle = document.querySelector('h4');
subtitle.innerText = 'Memento';

var pageParagraphs = document.querySelectorAll('p');

for (let index = 0; index < pageParagraphs.length; index++) {
	pageParagraphs[index].style.color = 'yellow';
}

var secondParagraph = document.querySelector('#filme2 p');
secondParagraph.innerText =
	"People say that's a good movie but when I whatch it I have just been like 'What?'";
