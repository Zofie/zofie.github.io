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
            $('.c-main-nav-trigger').toggleClass('c-icon--close').toggleClass('c-icon--menu');
        });
    }
};
