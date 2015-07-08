

$(document).ready( function () {
	$('.treasure-box').on('mouseenter', function () {
		$(this).find('img').show();

		// $(this).find('.hint').on('click', function () {
		// 	$(this).closest('.treasure-box').find('.hidden-treasure').show();
		// 	$(this).hide();
		// });

	});

	$('.hint').on('click', function () {
		$(this).next().show();
		$(this).hide();

	});



	$('.treasure-box').on('mouseleave', function () {
		$(this).find('img').hide();
		$(this).find('.hidden-treasure').hide();

	});
});

// Add treasure box or heart that pops up on hover and then change
// the picture to show up on click
