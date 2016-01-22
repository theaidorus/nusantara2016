$(window).scroll(function() {
	$('#satu').each(function(){
	var imagePos = $(this).offset().top;

	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+400) {
			$(this).addClass("fadeIn");
		}
	});
});
$('#satu').click(function() {
	$(this).addClass("fadeIn");
});
