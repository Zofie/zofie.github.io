var jsTheme =
{
    // init, something like a constructor
    init: function()
    {
        jsTheme.mobileNav.init();
        jsTheme.forms.init();
        jsTheme.toggle.init();
        jsTheme.disqus.init();
    }
};

$(jsTheme.init);

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

jsTheme.forms =
{
    init: function()
    {
        $('.c-alert-box').on('click', function(e)
        {
            e.preventDefault();
            $(this).closest('.c-alert-box').fadeOut(300);
        });
    }
};

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
        $("html").addClass("c-mobile-nav");
    },

    // build mobile nav
    buildMobileNav: function()
    {
        var navHolder = $('.o-header--mobile');


        navHolder.prepend('<span class="c-main-nav-trigger c-icon c-icon--menu"></span>');

        var trigger = $('.c-main-nav-trigger');
        var nav = $('.c-main-nav');

        $('.c-main-nav-trigger').on('click', function() {
            $('.o-header').toggleClass('active');
        });
    }
};

jsTheme.toggle =
{
    init: function() {
        // The toggle is called with the '.js-toggle' class and one or more data-targets
        // Use the 'is-hidden' class to hide your elements"
        var toggle = $('.js-toggle');

        // Toggle functionality
        toggle.on('touchstart click', function(e){
            // Prevent the default action on links
            e.preventDefault();

            // Split the targets if multiple
            var targets = $(this).data("target").replace(" ", "").split(",");

            // Loop trough targets and toggle the 'is-hidden' class
            for (var i = targets.length - 1; i >= 0; i--) {
                if(targets[i]){
                    // Toggle the 'is-hidden' class
                    $(targets[i]).toggleClass('is-hidden');
                }
            }

            // Add an 'is-toggled' class to the trigger.
            // Use this class to style your icons, active states, etc.
            $(this).toggleClass('is-toggled');

            return false;
        });
    }
};
