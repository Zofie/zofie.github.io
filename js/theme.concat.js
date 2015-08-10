var chopstick =
{
    // init, something like a constructor
    init: function()
    {
        chopstick.loadObject(chopstick.mobileNav, 'chopstick.mobileNav');
        chopstick.loadObject(chopstick.hide, 'chopstick.hide');
        chopstick.loadObject(chopstick.toggle, 'chopstick.toggle');
        chopstick.loadObject(chopstick.fullpage, 'chopstick.fullpage');

        console.log("javascript is locked and loaded!") // for testing purposes. Check your console. Delete after you finished reading this. :-)
    },

    /**
     * This function will load an object by a given name
     *
     * If the object doesn't exist no error will be thrown
     * But if object exists but doesn't have an init method it will throw an error
     *
     * If everything is ok we'll initiate the given object
     */
    loadObject: function(obj, name)
    {
        // create object based on a name
        // var objName = window[objName];

        // check if object exists
        if(typeof obj != 'undefined') {

            // check if object has a method init
            if (typeof obj.init == 'undefined') {
                // we will throw an error so the designer / developer know there's a problem
                throw new Error('ERROR: "' + name + '" does not have an init function');

            } else {
                // everything is fine so initiate
                obj.init();
            }
        }
    }
};

chopstick.fullpage =
{
    init: function()
    {
        $(document).ready(function() {
            $('#fullpage').fullpage({
                autoScrolling: false,
                anchors:['home', 'blog', 'projects', 'timeline', 'contact'],
                menu: '#navigation',
                navigation: true,
                lockAnchors: true,
                sectionsColor: ['#FDFDFD', '#F5F5F5', '#FDFDFD', '#F5F5F5', '#FDFDFD', '#F5F5F5'],
                recordHistory: false,
                fitToSection: false,
                paddingTop: 0
            });
        });
    }
}
chopstick.hide =
{
    settings:
    {
        hide: $('.js-hide')
    },

    init: function()
    {
        settings = this.settings;
        chopstick.hide.hideContent();
    },

    hideContent: function ()
    {
        settings.hide.on('click', function(e)
        {
            e.preventDefault();
            $(this).closest(settings.hide).parent().addClass('is-hidden');
        });
    }
};

chopstick.mobileNav =
{
    settings:
    {
        navHolder: $('.js-nav-holder'),
        trigger: $('.js-nav-trigger'),
    },

    init: function()
    {
        settings = this.settings;

        chopstick.mobileNav.enableMobileNav();
        chopstick.mobileNav.buildMobileNav();
    },

    enableMobileNav: function()
    {
        $('html').addClass('has-mobile-nav');
    },

    // build mobile nav
    buildMobileNav: function()
    {
        settings.trigger.on('click', function() {
            $('.js-nav').toggleClass('is-visible');
            $(this).toggleClass('is-active');
        });
    }
};

chopstick.toggle =
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
            var targets = $(this).data('target').replace(' ', '').split(',');

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

$(chopstick.init);
