console.log("Loading...");

$(document).ready(function () {
	$('.splitscreen').fullpage({ verticalCentered: false });
	$('.loader').fadeOut('slow');
	$('.splitscreen').fadeIn('slow');
});