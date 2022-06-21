// 'use strict';
// DOWNLOAD FUNCTIONALITY
// #artboard        THing I want to save
// #save__btn   save()

import * as htmlToImage from 'html-to-image';

// function save() {
// 	const art = document.getElementById('artboard');
// 	toPng(art)
// 		.then(function (dataUrl) {
// 			var img = new Image();
// 			img.src = dataUrl;
// 			document.body.appendChild(img);
// 		})
// 		.catch(function (error) {
// 			console.error('oops, something went wrong!', error);
// 		});
// }
let moveActivateArray = [artMiddleText, artSideText, artBottomText, artTopText];
let midTextBox = document.getElementById('middle__text__box');
let topTextBox = document.getElementById('top__text__box');
let sideTextBox = document.getElementById('left__text__box');
let bottomTextBox = document.getElementById('bottom__text__box');
let textBoxArray = [midTextBox, topTextBox, sideTextBox, bottomTextBox];

// function downloadSvg() {
// 	document.getElementById('artBackground').style.scale = 1;

// 	function clear() {
// 		moveActivateArray.forEach((eventcall) => {
// 			document
// 				.getElementById(eventcall.id + '--movespan')
// 				.classList.add('hidden--instant');
// 			document
// 				.getElementById(eventcall.id + '--movespan')
// 				.classList.remove('show');
// 		});
// 	}
// 	clear();
// 	function clearBorder() {
// 		textBoxArray.forEach((textElmt) => {
// 			textElmt.classList.remove('outlineRed');
// 		});
// 	}
// 	clearBorder();
// 	htmlToImage
// 		.toSvg(document.getElementById('artBackground'), {
// 			quality: 1,
// 			canvasWidth: 2100,
// 			canvasHeight: 690.6,
// 		})
// 		.then(function (dataUrl) {
// 			var link = document.createElement('a');
// 			link.download = 'my-image-name.svg';
// 			link.href = dataUrl;
// 			link.click();
// 		})
// 		.then(function () {
// 			document.getElementById('artBackground').style.scale = '';
// 		});
// }
function downloadPng() {
	document.getElementById('artBackground').style.scale = 1;

	function clear() {
		moveActivateArray.forEach((eventcall) => {
			document
				.getElementById(eventcall.id + '--movespan')
				.classList.add('hidden--instant');
			document
				.getElementById(eventcall.id + '--movespan')
				.classList.remove('show');
		});
	}
	clear();
	function clearBorder() {
		textBoxArray.forEach((textElmt) => {
			textElmt.classList.remove('outlineRed');
		});
	}
	clearBorder();
	htmlToImage
		.toPng(document.getElementById('artBackground'), {
			quality: 1,
			canvasWidth: 2100,
			canvasHeight: 690.6,
		})
		.then(function (dataUrl) {
			var link = document.createElement('a');
			link.download = 'my-image-name.png';
			link.href = dataUrl;
			link.click();
		})
		.then(function () {
			document.getElementById('artBackground').style.scale = '';
		});
}

// const requestimg = function () {
// 	const promtAnswer = confirm('Cancel: SVG || Confirm: PNG');

// 	if (promtAnswer === true) {
// 		downloadPng();
// 	} else {
// 		downloadSvg();
// 	}
// };

document.querySelector('#save__btn').addEventListener('click', downloadPng);
// document.querySelector('main').addEventListener('click', download);
