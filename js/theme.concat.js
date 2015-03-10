var jsTheme =
{
	// init, something like a constructor
	init: function()
	{
		jsTheme.mobileNav.init();
		jsTheme.forms.init();
		jsTheme.toggle.init();
		jsTheme.masonry.init();
	}
};

$(jsTheme.init);

jsTheme.forms =
{
	init: function()
	{
		$('.alert-box').on('click', function(e)
		{
			e.preventDefault();
			$(this).closest('.alert-box').fadeOut(300);
		});
	}
};

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
		var navHolder = $('.nav-mobile__holder'),
		icon = $('.js-toggle-icon');

		navHolder.prepend('<span class="nav-mobile__trigger"><span class="js-toggle-icon icon icon--menu"></span></span>');

		var trigger = $('.nav-mobile__trigger');
		var nav = $('.nav-mobile');

		trigger.on('click', function() {
			navHolder.toggleClass('is-full');
			$('.js-toggle-icon').toggleClass('icon--close').toggleClass('icon--menu');
			nav.toggleClass();
			$(this).toggleClass("trigger-active");
		});
	}
};

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
