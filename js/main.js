$('.navigate-to-about').click(() => {
   $('html,body').animate({
       scrollTop: $('.section-about')
           .offset()
           .top
   },200)
});