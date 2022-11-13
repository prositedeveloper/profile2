$(function() {

	$('#burger').on('click', function() {
		$('#menu').show(400);
		$(this).hide(400);
	});

	$('#close').on('click', function() {
		$('#menu').hide(400);
		$('#burger').show(400);
	});

});