// body background color
var container = document.querySelector('#container');
container.style.backgroundColor = 'beige';

// header background color
var header = document.querySelector('header');
header.style.backgroundColor = 'green';

//the blocks

// left side: background color of EMERGENCY BLOCKS
for (const blocks of document.querySelectorAll('.emergency-tasks div')) {
	blocks.style.backgroundColor = 'pink';
}

// right side: background color of NO EMERGENCY BLOCKS
for (const blocks of document.querySelectorAll('.no-emergency-tasks div')) {
	blocks.style.backgroundColor = 'yellow';
}

// left side: background color of EMERGENCY TITLES
for (const titles of document.querySelectorAll('.emergency-tasks h3')) {
	titles.style.backgroundColor = 'blue';
}

// right side: background color of NO EMERGENCY TITLES
for (const titles of document.querySelectorAll('.no-emergency-tasks h3')) {
	titles.style.backgroundColor = 'black';
}

// footer

var footer = document.querySelector('#footer-container');
footer.style.backgroundColor = 'black';
