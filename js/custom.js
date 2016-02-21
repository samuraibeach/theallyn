(function () {
    var observer = new FontFaceObserver('Roboto', {
        weight: 400
    });

    observer.check()
        .then( function(){
            $('#home').addClass('fonts-loaded');
        });

    $(window).scroll(function () {
        var top = $(document).scrollTop();
        console.log($(document).width());
        $('.cover').css({
            'background-position': '0px ' + (top / 3).toFixed(2) + 'px'
        });

        if (top > 50) {
            $('#home > .navbar').removeClass('navbar-transparent');
            $('.logo').css('height', '55px');
        } else {
            $('.logo').css('height', 'auto');

            $('#home > .navbar').addClass('navbar-transparent');
        }
    });
})();
