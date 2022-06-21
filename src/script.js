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
const controlsBtn = document.getElementById('controls-check-btn');
const fontSizeBtn = document.getElementById('font-size-check-btn');
const artBackground = document.getElementById('artBackground');
const artMiddleText = document.getElementById('middle__text');
const artSideText = document.getElementById('left__text');
const artTopText = document.getElementById('top__text');
const artBottomText = document.getElementById('bottom__text');
console.log(controlsBtn);

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

// DRAG AND MOVE TEXT FUNCTIONALITY ////////////

//Make the DIV element draggagle:

let moveActivateArray = [artMiddleText, artSideText, artBottomText, artTopText];
let midTextBox = document.getElementById('middle__text__box');
let topTextBox = document.getElementById('top__text__box');
let sideTextBox = document.getElementById('left__text__box');
let bottomTextBox = document.getElementById('bottom__text__box');
let textBoxArray = [midTextBox, topTextBox, sideTextBox, bottomTextBox];

const DragBtnX = document.getElementById('DragBtnX');
const DragBtnY = document.getElementById('DragBtnY');
let xDragOnOff = false;
let yDragOnOff = false;

DragBtnX.addEventListener('change', () => {
	xDragOnOff = xDragOnOff != true;
	console.log(xDragOnOff);
});
DragBtnY.addEventListener('change', () => {
	yDragOnOff = yDragOnOff != true;
	console.log(yDragOnOff);
});

textBoxArray.forEach((textelmnt) => {
	dragElement(textelmnt);
});

function dragElement(elmnt) {
	let pos1 = 0,
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
		if (yDragOnOff === true && xDragOnOff === true) {
			elmnt.style.left = elmnt.offsetLeft - pos1 + 'px';
			elmnt.style.top = elmnt.offsetTop - pos2 + 'px';
		} else if (yDragOnOff === true) {
			elmnt.style.top = elmnt.offsetTop - pos2 + 'px';
		} else if (xDragOnOff === true) {
			elmnt.style.left = elmnt.offsetLeft - pos1 + 'px';
		} else {
			return;
			// run animation on x y switches
		}
	}

	function closeDragElement() {
		/* stop moving when mouse button is released:*/
		document.onpointerup = null;
		document.onpointermove = null;
	}
}
// function dragElementX(elmnt) {
// 	let pos1 = 0,
// 		pos3 = 0;
// 	if (document.getElementById(elmnt.id.replace('__box', '') + '--movespan')) {
// 		/* if present, the header is where you move the DIV from:*/
// 		document.getElementById(
// 			elmnt.id.replace('__box', '') + '--movespan'
// 		).onpointerdown = dragMouseDown;
// 	} else {
// 		/* otherwise, move the DIV from anywhere inside the DIV:*/
// 		elmnt.onpointerdown = dragMouseDown;
// 	}

// 	function dragMouseDown(e) {
// 		e = e || window.event;
// 		e.preventDefault();
// 		// get the mouse cursor position at startup:
// 		pos3 = e.clientX;
// 		document.onpointerup = closeDragElement;
// 		// call a function whenever the cursor moves:
// 		document.onpointermove = elementDrag;
// 	}

// 	function elementDrag(e) {
// 		e = e || window.event;
// 		e.preventDefault();
// 		// calculate the new cursor position:
// 		pos1 = pos3 - e.clientX;
// 		pos3 = e.clientX;
// 		// set the element's new position:

// 		elmnt.style.left = elmnt.offsetLeft - pos1 + 'px';
// 	}

// 	function closeDragElement() {
// 		/* stop moving when mouse button is released:*/
// 		document.onpointerup = null;
// 		document.onpointermove = null;
// 	}
// }
// function dragElementY(elmnt) {
// 	let pos2 = 0,
// 		pos4 = 0;
// 	if (document.getElementById(elmnt.id.replace('__box', '') + '--movespan')) {
// 		/* if present, the header is where you move the DIV from:*/
// 		document.getElementById(
// 			elmnt.id.replace('__box', '') + '--movespan'
// 		).onpointerdown = dragMouseDown;
// 	} else {
// 		/* otherwise, move the DIV from anywhere inside the DIV:*/
// 		elmnt.onpointerdown = dragMouseDown;
// 	}

// 	function dragMouseDown(e) {
// 		e = e || window.event;
// 		e.preventDefault();
// 		// get the mouse cursor position at startup:
// 		pos4 = e.clientY;
// 		document.onpointerup = closeDragElement;
// 		// call a function whenever the cursor moves:
// 		document.onpointermove = elementDrag;
// 	}

// 	function elementDrag(e) {
// 		e = e || window.event;
// 		e.preventDefault();
// 		// calculate the new cursor position:
// 		pos2 = pos4 - e.clientY;
// 		pos4 = e.clientY;
// 		// set the element's new position:

// 		elmnt.style.top = elmnt.offsetTop - pos2 + 'px';
// 	}

// 	function closeDragElement() {
// 		/* stop moving when mouse button is released:*/
// 		document.onpointerup = null;
// 		document.onpointermove = null;
// 	}
// }

// MOVEMENT BTNS ///////////
const eventArray = ['click', 'ontouchstart'];
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
const gridAlignXArray = document.querySelectorAll('.span--x');
const gridAlignYArray = document.querySelectorAll('.span--y');

const artBoardID = document.getElementById('artboardid');
controlsBtn.addEventListener('click', function () {
	if (artBoardID.classList.contains('notouch')) {
		artBoardID.classList.remove('notouch');
		gridAlignXArray.forEach((element) => {
			element.classList.toggle('remove-it');
		});
		gridAlignYArray.forEach((element) => {
			element.classList.toggle('remove-it');
		});
	} else {
		artBoardID.classList.add('notouch');
		gridAlignXArray.forEach((element) => {
			element.classList.toggle('remove-it');
		});
		gridAlignYArray.forEach((element) => {
			element.classList.toggle('remove-it');
		});
	}
});
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

// controlsBtn.addEventListener('click', () => {
// 	textBoxArray.forEach((textElmt) => {
// 		textElmt.classList.toggle('outlineRed');
// 	});
// });

let fontCount = 0;
console.log(fontCount);
fontSizeBtn.addEventListener('click', () => {
	if (fontCount === 3) {
		fontCount = 0;
	} else {
		fontCount++;
	}
	console.log(fontCount);
	const fontArray = ['regofont', 'morrissans', 'serioucity', 'herticalserif'];
	document.documentElement.style.setProperty(
		'--art-font',
		`${fontArray[fontCount]}`
	);
});

/// text field active functionality
// 1) switch changes
// 2) corresponding text movement functionality is removed

const mdOnOff = document.getElementById('on-off__sw--md');
const sdOnOff = document.getElementById('on-off__sw--sd');
const topOnOff = document.getElementById('on-off__sw--top');
const btmOnOff = document.getElementById('on-off__sw--btm');
// console.log(onoff);

mdOnOff.addEventListener('change', () => {
	midTextBox.classList.toggle('remove-text');
});
sdOnOff.addEventListener('change', () => {
	sideTextBox.classList.toggle('remove-text');
});
topOnOff.addEventListener('change', () => {
	topTextBox.classList.toggle('remove-text');
});
btmOnOff.addEventListener('change', () => {
	bottomTextBox.classList.toggle('remove-text');
});

// 	SLIDE OUT CONTROLS ANIMATION
////////////////////////////////////////////
controlsBtn.addEventListener('change', () => {
	const posXlabelControl = document.querySelector('.pos__controls--x');
	const posYlabelControl = document.querySelector('.pos__controls--y');
	let dragBtnArr = [posXlabelControl, posYlabelControl];
	dragBtnArr.forEach((item) => {
		if (item.classList.contains('slide-out--right')) {
			item.classList.toggle('slide-out--left');
		} else {
			item.classList.toggle('slide-out--right');
		}
	});
});
// const fontSizeLabel = document.getElementById('fontBtnLabel');
// const glowFlash = function (elmnt) {
// 	let e = elmnt;
// 	e.addEventListener('click', () => {
// 		if (!e.classList.contains('glow')) {
// 			e.classList.add('glow');
// 		} else {
// 			e.classList.remove('glow');
// 		}
// 	});
// };

// glowFlash(fontSizeLabel);
