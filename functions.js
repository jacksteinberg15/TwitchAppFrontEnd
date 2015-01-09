$(document).ready(function () {}

    function AuthenticateLogin() {
        window.location = "profile.html";
    }

    function cFunc() {
        $('Cal').show();
        $('Lis').hide();
        $('Fol').hide();
    }

    function lFunc() {
        $('Lis').show();
        $('Cal').hide();
        $('Fol').hide();
    }

    function fFunc() {
        $('Fol').show();
        $('Lis').hide();
        $('Cal').hide();
    }