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
