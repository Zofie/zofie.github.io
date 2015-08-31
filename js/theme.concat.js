var chopstick =
{
    // init, something like a constructor
    init: function()
    {
        chopstick.loadObject(chopstick.mobileNav, 'chopstick.mobileNav');
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

var mobileNavSettings
chopstick.mobileNav =
{
    settings:
    {
      header: $('.js-header'),
      trigger: $('.js-trigger-header'),
    },

    init: function()
    {
        mobileNavSettings = chopstick.mobileNav.settings;
        chopstick.mobileNav.navigation();
    },

    navigation: function()
    {
      var header = $('.js-header');
      var trigger = $('.js-trigger-header');

      trigger.on('click', function(){
          header.toggleClass('is-active', 'in-inactive');
          $(this).toggleClass('is-open').toggleClass('is-closed')
      })
    }
};

$(chopstick.init);
