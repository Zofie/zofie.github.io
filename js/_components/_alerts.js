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
