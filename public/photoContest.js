$(window).on('load', function() {
	// var $container = $('#masonry-grid');
	// // initialize
	// $container.masonry({
	//   columnWidth: 200,
	//   itemSelector: '.grid-item'
	// });
	// console.log('tete');
	
	var userFeed = new Instafeed({
		get: 'tagged',
		tagName: 'makeamericagreatagain',
		clientId: '18b244b809e449a3b0476022c032e80d',
		userId: 'bhaktiemangasu',
		accessToken: '2712978932.18b244b.2468e739bd7b49f8b306bfe183926918',
		template: '<div><img src="{{image}}" /> <span>kodok</span></div>'
	});
	userFeed.run();

	$(function() {
		var $c = $('#instafeed'),
			$w = $(window);
	 
		$c.carouFredSel({
			align: false,
			items: 1,
			scroll: {
				items: 1,
				duration: 2000,
				timeoutDuration: 0,
				easing: 'linear',
				pauseOnHover: 'immediate'
			}
		});
	 
		
		$w.bind('resize.example', function() {
			var nw = $w.width();
			if (nw < 990) {
				nw = 990;
			}
	 
			$c.width(nw * 3);
			$c.parent().width(nw);
	 
		}).trigger('resize.example');

		console.log("jalan gan");
	 
	});
	
	// $("#scroller").simplyScroll();
	
	// loadInstagram();
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
