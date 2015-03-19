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
