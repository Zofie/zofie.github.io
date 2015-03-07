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
		var navHolder = $('.nav-mobile__holder');
		// $('.nav-mobile').hide();

		navHolder.prepend('<span class="nav-mobile__trigger"> >> </span>');

		var trigger = $('.nav-mobile__trigger');
		var nav = $('.nav-mobile');

		trigger.on('click', function() {
			navHolder.toggleClass('is-full');
			nav.toggleClass();
			$(this).toggleClass("trigger-active");
		});
	}
};
