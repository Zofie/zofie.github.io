var heightsSettings
chopstick.heights =
{
    settings:
    {
      header: $('.js-header'),
      trigger: $('.js-trigger-header'),
    },

    init: function()
    {
        heightsSettings = chopstick.heights.settings;
        chopstick.heights.makeEqualHeights();
    },

    makeEqualHeights: function()
    {
      if ($(window).width() > 679) {
      	$(window).load(function() {
      		var $indexBlock = $('.js-container .js-item'),
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
};
