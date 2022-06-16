'use strict';

// alert('Exiting Or Reloading May Result In Lose Of Design');
// const updateBtn = document.getElementById('update');

///// DOM ELEMENTS (INPUTS)
const backgroundColorPicker = document.getElementById('color--bg').value;
const accentColorPicker = document.getElementById('color--accent').value;
const middleTextSize = document.getElementById('midFontSize').value;
const sideTextSize = document.getElementById('sideFontSize').value;
const topTextSize = document.getElementById('topFontSize').value;
const bottomTextSize = document.getElementById('bottomFontSize').value;

//////// ARTBOARD ELEMENTS ////////
const controlsBtn = document.getElementById('controlsBtn');
const artBackground = document.getElementById('artBackground');
const artMiddleText = document.getElementById('middle__text');
const artSideText = document.getElementById('left__text');
const artTopText = document.getElementById('top__text');
const artBottomText = document.getElementById('bottom__text');

(function () {
	artBackground.style.backgroundColor = backgroundColorPicker;
})();

// RESET FUNCTIONALITY
const reset = function () {
	const promtAnswer = confirm('Reset Design?');

	if (promtAnswer === true) {
		artMiddleText.innerHTML = '';
		artSideText.innerHTML = '';
		artTopText.innerHTML = '';
		artBottomText.innerHTML = '';

		document.documentElement.style.setProperty('--art-accent-clr', '');
		artBackground.style.backgroundColor = '';
	}
};

// COLOR PICKER FUNCTIONALITY //////////////////////
document.getElementById('color--bg').addEventListener('change', function () {
	const backgroundColorPicker = document.getElementById('color--bg').value;
	console.log('change');
	artBackground.style.backgroundColor = backgroundColorPicker;
});
document
	.getElementById('color--accent')
	.addEventListener('change', function () {
		const accentColorPicker = document.getElementById('color--accent').value;
		document.documentElement.style.setProperty(
			'--art-accent-clr',
			accentColorPicker
		);
	});

///////////////////////////////////////////////////
// TEXT INPUT FUNCTIONALITY ///////////////////////
document
	.getElementById('middle__text--input')
	.addEventListener('input', function () {
		const middleText = document.getElementById('middle__text--input').value;
		artMiddleText.innerText = middleText;
	});
document
	.getElementById('top__text--input')
	.addEventListener('input', function () {
		const topText = document.getElementById('top__text--input').value;
		artTopText.innerText = topText;
	});
document
	.getElementById('side__text--input')
	.addEventListener('input', function () {
		const sideText = document.getElementById('side__text--input').value;
		artSideText.innerText = sideText;
	});
document
	.getElementById('bottom__text--input')
	.addEventListener('input', function () {
		const bottomText = document.getElementById('bottom__text--input').value;
		artBottomText.innerText = bottomText;
	});

///////////////////////////////////////////////////
// POSITIONING FUNCTIONALITY /////////////////////////
// MIDDLE
document.querySelector('#midPosX').addEventListener('input', function (e) {
	let midPosX = e.currentTarget.value;
	console.log(midPosX);
	artMiddleText.style.left = `${midPosX}%`;
});
document.querySelector('#midPosY').addEventListener('input', function (e) {
	let midPosY = e.currentTarget.value;
	console.log(midPosY);
	artMiddleText.style.top = `${midPosY}%`;
});
// TOP
document.querySelector('#topPosX').addEventListener('input', function (e) {
	let topPosX = e.currentTarget.value;
	console.log(topPosX);
	artTopText.style.left = `${topPosX}%`;
});
document.querySelector('#topPosY').addEventListener('input', function (e) {
	let topPosY = e.currentTarget.value;
	console.log(topPosY);
	artTopText.style.top = `${topPosY}%`;
});
// SIDE
document.querySelector('#sidePosX').addEventListener('input', function (e) {
	let sidePosX = e.currentTarget.value;
	console.log(sidePosX);
	artSideText.style.left = `${sidePosX}%`;
});
document.querySelector('#sidePosY').addEventListener('input', function (e) {
	let sidePosY = e.currentTarget.value;
	console.log(sidePosY);
	artSideText.style.top = `${sidePosY}%`;
});
// BOTTOM
document.querySelector('#botPosX').addEventListener('input', function (e) {
	let bottomPosX = e.currentTarget.value;
	console.log(bottomPosX);
	artBottomText.style.left = `${bottomPosX}%`;
});
document.querySelector('#botPosY').addEventListener('input', function (e) {
	let bottomPosY = e.currentTarget.value;
	console.log(bottomPosY);
	artBottomText.style.top = `${bottomPosY}%`;
});

///////////////////////////////////////////////////
// CLEAR TEXT INPUT FUNCTIONALITY ///////////////////
const clearMidTxt = function () {
	document.getElementById('middle__text--input').value = '';
	artMiddleText.innerHTML = document.getElementById(
		'middle__text--input'
	).value;
};
const clearSideTxt = function () {
	document.getElementById('side__text--input').value = '';
	artSideText.innerHTML = document.getElementById('side__text--input').value;
};
const clearTopTxt = function () {
	document.getElementById('top__text--input').value = '';
	artTopText.innerHTML = document.getElementById('top__text--input').value;
};
const clearBotTxt = function () {
	document.getElementById('bottom__text--input').value = '';
	artBottomText.innerHTML = document.getElementById(
		'bottom__text--input'
	).value;
};

///////////////////////////////////////////////////
// FONT SIZE FUNCTIONALITY ///////////////////
document.querySelector('#midFontSize').addEventListener('input', function (e) {
	let midFontSize = e.currentTarget.value;
	console.log(midFontSize);
	artMiddleText.style.fontSize = `${midFontSize}rem`;
});
document.querySelector('#topFontSize').addEventListener('input', function (e) {
	let topFontSize = e.currentTarget.value;
	console.log(topFontSize);
	artTopText.style.fontSize = `${topFontSize}rem`;
});
document.querySelector('#sideFontSize').addEventListener('input', function (e) {
	let sideFontSize = e.currentTarget.value;
	console.log(sideFontSize);
	artSideText.style.fontSize = `${sideFontSize}rem`;
});
document
	.querySelector('#bottomFontSize')
	.addEventListener('input', function (e) {
		let bottomFontSize = e.currentTarget.value;
		console.log(bottomFontSize);
		artBottomText.style.fontSize = `${bottomFontSize}rem`;
	});

// document.body.addEventListener('pointermove', (e) => {
// 	console.log(e);
// });

// artMiddleText.addEventListener('pointermove', (e) => {
// 	let mov;
// 	mov += e.movementX;

// 	moveMidX(mov);
// 	console.log(e.movementX);
// });

// function moveMidX(e) {
// 	artMiddleText.style.left = `${e}%`;
// 	console.log(e);
// }

// DRAG AND MOVE TEXT FUNCTIONALITY ////////////

//Make the DIV element draggagle:

let moveActivateArray = [artMiddleText, artSideText, artBottomText, artTopText];
let midTextBox = document.getElementById('middle__text__box');
let topTextBox = document.getElementById('top__text__box');
let sideTextBox = document.getElementById('left__text__box');
let bottomTextBox = document.getElementById('bottom__text__box');
let textBoxArray = [midTextBox, topTextBox, sideTextBox, bottomTextBox];

textBoxArray.forEach((textElement) => {
	dragElement(textElement);
});
function dragElement(elmnt) {
	var pos1 = 0,
		pos2 = 0,
		pos3 = 0,
		pos4 = 0;
	if (document.getElementById(elmnt.id.replace('__box', '') + '--movespan')) {
		/* if present, the header is where you move the DIV from:*/
		document.getElementById(
			elmnt.id.replace('__box', '') + '--movespan'
		).onpointerdown = dragMouseDown;
	} else {
		/* otherwise, move the DIV from anywhere inside the DIV:*/
		elmnt.onpointerdown = dragMouseDown;
	}

	function dragMouseDown(e) {
		e = e || window.event;
		e.preventDefault();
		// get the mouse cursor position at startup:
		pos3 = e.clientX;
		pos4 = e.clientY;
		document.onpointerup = closeDragElement;
		// call a function whenever the cursor moves:
		document.onpointermove = elementDrag;
	}

	function elementDrag(e) {
		e = e || window.event;
		e.preventDefault();
		// calculate the new cursor position:
		pos1 = pos3 - e.clientX;
		pos2 = pos4 - e.clientY;
		pos3 = e.clientX;
		pos4 = e.clientY;
		// set the element's new position:
		elmnt.style.top = elmnt.offsetTop - pos2 + 'px';
		elmnt.style.left = elmnt.offsetLeft - pos1 + 'px';
	}

	function closeDragElement() {
		/* stop moving when mouse button is released:*/
		document.onpointerup = null;
		document.onpointermove = null;
	}
}

// MOVEMENT BTNS ///////////
// const eventArray = ['click', 'ontouchstart'];
// moveActivateArray.forEach((textElement) => {
// 	eventArray.forEach((evt) =>
// 		textElement.addEventListener(evt, function (e) {
// 			document
// 				.getElementById(e.currentTarget.id + '--movespan')
// 				.classList.toggle('show');
// 			document
// 				.getElementById(e.currentTarget.id + '--movespan')
// 				.classList.toggle('hidden');
// 		})
// 	);
// });

moveActivateArray.forEach((eventcall) => {
	controlsBtn.addEventListener('click', function () {
		document
			.getElementById(eventcall.id + '--movespan')
			.classList.remove('hidden--instant');
		document
			.getElementById(eventcall.id + '--movespan')
			.classList.toggle('show');
		document
			.getElementById(eventcall.id + '--movespan')
			.classList.toggle('hidden');
	});
});

controlsBtn.addEventListener('click', () => {
	textBoxArray.forEach((textElmt) => {
		textElmt.classList.toggle('outlineRed');
	});
});
