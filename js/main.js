console.log("Loading...");

$(document).ready(function () {
	$('.splitscreen').fullpage({ verticalCentered: false });
	setTimeout( () => {
		$('.loader').addClass('hidden');
	}, 300);
	setTimeout( () => {
		$('.splitscreen').removeClass('hidden');
	}, 600);
});