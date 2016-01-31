<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script>window.jQuery || document.write('<script src="js/vendor/jquery-1.9.1.min.js"><\/script>')</script>
<script src="js/skrollr.js"></script>
<script src="js/_main.js"></script>

			$('#satu').click(function() {
				$(this).addClass("fadeIn");
			});
		</script>
		<script>
			$(window).scroll(function() {
				$('#satu').each(function(){
				var imagePos = $(this).offset().top;

				var topOfWindow = $(window).scrollTop();
					if (imagePos < topOfWindow+400) {
						$(this).addClass("fadeIn");
					}
				});
			});
