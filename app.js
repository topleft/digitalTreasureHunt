

$(document).ready( function () {
	$('.treasure-box').on('mouseenter', function () {
		$(this).find('div').show();

	});
	$('.treasure-box').on('mouseleave', function () {
		$(this).find('div').hide();

	});
});