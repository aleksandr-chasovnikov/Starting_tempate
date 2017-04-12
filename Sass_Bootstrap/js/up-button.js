$(document).ready(function() {

    $(window).scroll(function() {
        // Высота проявления кнопки
        if ($(this).scrollTop() > 200) {
            $('.up-button').fadeIn();
        } else {
            $('.up-button').fadeOut();
        }
    });
    
    $('.up-button').click(function() {
        $('body,html').animate({
            scrollTop: 0
        // Скорость подъема
        }, 1000);
        return false;
    });

});