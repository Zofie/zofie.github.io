var jsTheme =
{
	// init, something like a constructor
	init: function()
	{
		jsTheme.mobileNav.init();
		jsTheme.forms.init();
		jsTheme.toggle.init();
		// jsTheme.masonry.init();
		jsTheme.makeEqualHeight.init();
	}
};

$(jsTheme.init);
