'use strict';
// const { default: jsPDF } = require('jspdf');
// alert('Exiting Or Reloading May Result In Lose Of Design');
const updateBtn = document.getElementById('update');
///// DOM ELEMENTS (INPUTS)
const backgroundColorPicker = document.getElementById('color--bg').value;
const accentColorPicker = document.getElementById('color--accent').value;
const middleTextSize = document.getElementById('middle__size').value;
//////// ARTBOARD ELEMENTS ////////
const artBackground = document.getElementById('artBackground');
const artMiddleText = document.getElementById('middle__text');
const artLeftText = document.getElementById('left__text');
const artTopText = document.getElementById('top__text');
const artBottomText = document.getElementById('bottom__text');
// Refresh Update function
const updateDesign = function () {
	// Get Input values
	const backgroundColorPicker1 = document.getElementById('color--bg').value;
	const accentColorPicker1 = document.getElementById('color--accent').value;
	const middleTextSize1 = document.getElementById('middle__size').value;
	const topTextSize = document.getElementById('top__size').value;
	const sideTextSize = document.getElementById('side__size').value;
	const bottomTextSize = document.getElementById('bottom__size').value;
	const middleText = document.getElementById('middle__text--input').value;
	const sideText = document.getElementById('side__text--input').value;
	const topText = document.getElementById('top__text--input').value;
	const bottomText = document.getElementById('bottom__text--input').value;
	// SWAP COLORS
	document.documentElement.style.setProperty(
		'--art-accent-clr',
		accentColorPicker1
	);
	artBackground.style.backgroundColor = backgroundColorPicker1;
	// SWAP FONT SIZES ----------------------------------------
	if (middleTextSize1 === 'none') artMiddleText.style.display = 'none';
	else {
		artMiddleText.style.display = '';
		artMiddleText.style.fontSize = middleTextSize1;
	}
	if (sideTextSize === 'none') artLeftText.style.display = 'none';
	else {
		artLeftText.style.display = '';
		artLeftText.style.fontSize = sideTextSize;
	}
	if (topTextSize === 'none') artTopText.style.display = 'none';
	else {
		artTopText.style.display = '';
		artTopText.style.fontSize = topTextSize;
	}
	if (bottomTextSize === 'none') artBottomText.style.display = 'none';
	else {
		artBottomText.style.display = '';
		artBottomText.style.fontSize = bottomTextSize;
	}
	// --------------------------------------------------------
	console.log(middleText);
	artMiddleText.innerHTML = middleText;
	artLeftText.innerHTML = sideText;
	artTopText.innerHTML = topText;
	artBottomText.innerHTML = bottomText;
};
(function () {
	artBackground.style.backgroundColor = backgroundColorPicker;
	artMiddleText.style.fontSize = middleTextSize;
})();
const reset = function () {
	const promtAnswer = confirm('Reset Design?');
	if (promtAnswer === true) {
		artMiddleText.innerHTML = '';
		artLeftText.innerHTML = '';
		artTopText.innerHTML = '';
		artBottomText.innerHTML = '';
		document.documentElement.style.setProperty('--art-accent-clr', '');
		artBackground.style.backgroundColor = '';
	}
};
document.getElementById('color--bg').addEventListener('change', function () {
	const backgroundColorPicker2 = document.getElementById('color--bg').value;
	console.log('change');
	artBackground.style.backgroundColor = backgroundColorPicker2;
});
document
	.getElementById('color--accent')
	.addEventListener('change', function () {
		const accentColorPicker2 = document.getElementById('color--accent').value;
		document.documentElement.style.setProperty(
			'--art-accent-clr',
			accentColorPicker2
		);
	});
document
	.getElementById('middle__text--input')
	.addEventListener('keyup', function () {
		const middleText = document.getElementById('middle__text--input').value;
		artMiddleText.innerHTML = middleText;
	}); // DOWNLOAD FUNCTIONALITY
// #artboard        THing I want to save
// #save__btn   save()

//# sourceMappingURL=index.d66c3f0e.js.map
