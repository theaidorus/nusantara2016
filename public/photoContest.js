$(window).on('load', function() {
	var $container = $('#masonry-grid');
	// initialize
	$container.masonry({
	  columnWidth: 200,
	  itemSelector: '.grid-item'
	});
	console.log('tete');
});