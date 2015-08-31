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
