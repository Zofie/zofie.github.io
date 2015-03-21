jsTheme.disqus =
{
    init: function()
    {
          /* * * CONFIGURATION VARIABLES * * */
          var disqus_shortname = 'sophiedebrabander';

          /* * * DON'T EDIT BELOW THIS LINE * * */
          (function() {
              var disqus = document.createElement('script');
              disqus.type = 'text/javascript';
              disqus.async = true;

              disqus.src = '//' + disqus_shortname + '.disqus.com/embed.js';

              (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(disqus);
          })();
    }
};
