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
