$(document).ready(function () {
    $(".menu-link").click(function() {
        $("menu").addClass('active-menu');
    })
    $(".closs-btn").click(function() {
        $("menu").removeClass('active-menu');
    })
});