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
