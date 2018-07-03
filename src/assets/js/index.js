import $ from 'jquery';
import * as fullpage from 'fullpage.js';

$(document).ready(function () {

	$('.splitscreen').fullpage({
		verticalCentered: false,
		navigation: true,
		onLeave: function(origin, destination, direction){
			randomBackgroundColor();
		}
	});

	setTimeout( () => {
		$('.loader').addClass('hidden');
	}, 300);

	setTimeout( () => {
		$('.splitscreen').removeClass('hidden');
	}, 600);

});

function randomBackgroundColor() {
	const colors = ["#FFDE03","#FF0266","#0336FF","03DAC5"];

	let rand = colors[Math.floor(Math.random() * colors.length)];

	$('body').css('background',rand);
}