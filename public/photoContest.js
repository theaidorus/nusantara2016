$(window).on('load', function() {
	// var $container = $('#masonry-grid');
	// // initialize
	// $container.masonry({
	//   columnWidth: 200,
	//   itemSelector: '.grid-item'
	// });
	// console.log('tete');
	loadInstagram();
});

var loadInstagram = (function() {

	var photoGrid = $('.grid-item')[0].outerHTML;
	var tag = 'obama';
	var masonGrid = $('#masonry-grid');
	masonGrid.html('');
	// var url = 'https://api.instagram.com/v1/tags/'+tag+'/media/recent?access_token=33228722.18b244b.1997064779cd4939bc2c91caabcecbe1';
	var url = 'http://localhost:3000/photos'

	var makeGetRequest = function(onSuccess, onFailure) {
       $.ajax({
           type: 'GET',
           url: url,
           dataType: "json",
           success: onSuccess,
           error: onFailure
       });
   };

   	var onSuccess = function(data) {
   		var photos = data;

        for (var i = 0; i < photos.length; i++) {
        	var currPhoto = photos[i]
            var newElem = $(photoGrid);
            newElem.attr('id', currPhoto.id); 
            newElem.attr('src', currPhoto.image_full);
            masonGrid.append(newElem);
            console.log(i);
        };

		var $container = $('#masonry-grid');
		// initialize
		$container.masonry({
		  columnWidth: 200,
		  itemSelector: '.grid-item'
		});      
   	};

   	var onFailure = function() { 
            console.error('Fetching instagram Failed'); 
        };

   	makeGetRequest(onSuccess, onFailure);


});