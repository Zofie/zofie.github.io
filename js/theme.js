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
