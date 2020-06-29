$(function() {
    //toggle class open on button
    $('#navbarNav').on('hide.bs.collapse', function () {
       $('.navbar-toggler').removeClass('open');
    })
    $('#navbarNav').on('show.bs.collapse', function () {
       $('.navbar-toggler').addClass('open');
    })
 });