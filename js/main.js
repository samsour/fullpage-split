console.log("Loading...");

$(document).ready(function () {
	console.log("Starting...");

	$('.splitscreen').fullpage({ verticalCentered: false });
	$('.loader').fadeOut('slow');
	$('.splitscreen').fadeIn('slow');
	console.log("Finished!");
});