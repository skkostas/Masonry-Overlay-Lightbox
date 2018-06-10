$(window).load( function() {

   var $container = $('#container').masonry({
        itemSelector: ".item",
        columnWidth: ".grid-sizer",
     gutter: ".gutter-sizer",
     percentPosition: true
        
    });

   $container.imagesLoaded().progress( function() {
        $container.masonry('layout');
   });

 
      
});

$(document).ready(function() {

 $(".item").each(function() {
            var item = $(this); 
            var image = item.children('img').attr('src');
            $(item).find('.description p').append('<a href="' + image + '" data-featherlight="image">View Larger</a>');

         });  

 $('.back-to-top-container a').smoothScroll({
    offset: -20

 });

});
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});