jQuery(function($){
    $(document).ready(function(){

        //Adaptive Menu
        $('#adaptive-toggle-button').on('click', function(){
            $('.box-mobile-menu').toggle(500);
            $('.mobile-menu-overlay').show();
        });
        $('#mobile-menu-close, .mobile-menu-overlay, .mobile-menu-bottom li').on('click', function(){
            $('.box-mobile-menu').toggle(500);
            $('.mobile-menu-overlay').hide();
        });

        /*Slider*/
        $('#ftc-slider').slick({
            arrows: false,
            dots: true,
            autoplay: true,
            autoplaySpeed: 3000,
        });

        /*Animation*/
        new WOW().init();

    });
});










