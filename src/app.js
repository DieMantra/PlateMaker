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

function download() {
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

document.querySelector('#save__btn').addEventListener('click', download);
// document.querySelector('main').addEventListener('click', download);
