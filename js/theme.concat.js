var jsTheme =
{
	// init, something like a constructor
	init: function()
	{
		jsTheme.socialShareButtons.init();
		jsTheme.mobileNav.init();
		jsTheme.alerts.init();
		jsTheme.toggle.init();
		jsTheme.masonry.init();
		jsTheme.makeEqualHeight.init();

	}
};

$(jsTheme.init);

jsTheme.alerts =
{
	init: function()
	{
		$('.js-close-alert').on('click', function(e)
		{
			e.preventDefault();
			$(this).closest('.alert-box').fadeOut(300);
		});
	}
};

jsTheme.makeEqualHeight =
{
	init: function() {
        if ($(window).width() > 679) {
			$(window).load(function() {
				var $indexBlock = $('.js-equal-container .js-equal-item'),
				indexBlockHeight = 0;
				$indexBlock.each(function()
				{
					if($(this).height() > indexBlockHeight)
						{indexBlockHeight = $(this).height();}
				});
				$indexBlock.height(indexBlockHeight);
			});
		}
    }
}

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

jsTheme.mobileNav =
{
	init: function()
	{
		jsTheme.mobileNav.enableMobileNav();
		jsTheme.mobileNav.buildMobileNav();
	},

	// CSS is based on the class .mobile-nav
	//
	enableMobileNav: function()
	{
		$("html").addClass("mobile");
	},

	// build mobile nav
	buildMobileNav: function()
	{
		var navHolder = $('.nav--holder'),
		icon = $('.js-toggle-icon');

		navHolder.prepend('<span class="nav-mobile__trigger"><span class="js-toggle-icon icon icon--menu"></span></span>');

		var trigger = $('.js-toggle-icon');
		var nav = $('.nav--main');

		trigger.on('click', function() {
			console.log('hi');
			$('.js-toggle-icon').toggleClass('icon--close').toggleClass('icon--menu');
			nav.toggleClass('is-hidden');
		});
	}
};

jsTheme.socialShareButtons =
{
	init: function() {
		var title = $(document).prop('title');

		$(".js-facebook").click(function(e){
			e.preventDefault();
			window.open("https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent("+location.href+"?v=1)" , 'facebook-share-dialog', 'width=626,height=436');
		});

		$(".js-twitter").click(function(e){
			e.preventDefault();
			window.open("http://twitter.com/intent/tweet?text=" + title + " " + location.href, 'twitter', 'width=626,height=436');
		});
    }

}

jsTheme.toggle =
{
	init: function() {
		// The toggle is called with the '.js-toggle' class and one or more data-targets
		// Use the 'is-hidden' class to hide your elements"
		var toggle = $('.js-toggle');

		// Toggle functionality
		toggle.on('touchstart click', function(e){
			// Prevent the default action on links
			e.preventDefault();

			// Split the targets if multiple
			var targets = $(this).data("target").replace(" ", "").split(",");

			// Loop trough targets and toggle the 'is-hidden' class
			for (var i = targets.length - 1; i >= 0; i--) {
				if(targets[i]){
					// Toggle the 'is-hidden' class
					$(targets[i]).toggleClass('is-hidden');
				}
			}

			// Add an 'is-toggled' class to the trigger.
			// Use this class to style your icons, active states, etc.
			$(this).toggleClass('is-toggled');

			return false;
		});
	}
};
