$(document).ready(function () {
    $('.droplist').on('click', function (e) {
        e.preventDefault();
        $('body').toggleClass('showdrop');
    });
});