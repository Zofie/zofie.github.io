jsTheme.masonry =
{
	init: function() {
		// $('.masonry--container').masonry({
		// 	"columnWidth": 60,
		// 	gutter: 10;
		//   itemSelector: 'masonry--item',
		// });

		var container = document.querySelector('.masonry--container');
		// initialize Masonry after all images have loaded
		imagesLoaded( container, function() {
		  msnry.layout();
		});
		var msnry = new Masonry( container, {
		  itemSelector: '.masonry--item',
		});
  }
};
