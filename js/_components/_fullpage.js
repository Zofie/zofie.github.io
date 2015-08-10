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