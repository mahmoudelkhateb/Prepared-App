// @ts-nocheck
/*global $, alert, console*/
$(document).ready(function () {
  "use strict";
  $(" .navbar-nav .nav-link").click(function () {
    $("body, html").animate(
      {
        // scrollTop = divId.offset().top

        scrollTop:
          $("#" + $(this).data("target")).offset().top -
          $(".navbar").innerHeight() +
          30,
      },
      400
    );
  });

  $(window).scroll(function () {
    //sync nav links with sections
    $("section").each(function () {
      if (
        $(window).scrollTop() >=
        $(this).offset().top - $(".navbar").innerHeight()
      ) {
        var bebo = $(this).attr("id");
        $(".navbar-nav .nav-item").removeClass("act");
        $('.navbar-nav .nav-item a[data-target = "' + bebo + '"]')
          .parent()
          .addClass("act");
      }
    });
  });


  // scroll to top element
  var scrolling = $(".scroll-element");
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 600) {
      scrolling.slideDown();
    } else {
      scrolling.slideUp();
    }
  });
  scrolling.click(function () {
    "use strict";
    $("html,body").animate({ scrollTop: 0 }, 400);
  });

// side bar 

  $(".navbar .navbar-toggler").click(function () {});

  $(".navbar .navbar-toggler").on("click", function () {
    var fixedMenu = $(".navbar .navbar-nav");
    $(".navbar .navbar-toggler i").toggleClass("fa-bars fa-times");
    fixedMenu.toggleClass("is-visible");
    if (fixedMenu.hasClass("is-visible")) {
      fixedMenu.animate(
        {
          left: 0,
        },
        500
      );
    } else {
      fixedMenu.animate(
        {
          left: "-" + '285px',
        },
        500
      );
    }
  });

// chanf=ge color theme 

  $('.fixed-menu ul li').on ('click', function(){
    $(this).addClass('active').siblings().removeClass('active')
    //change site color
    $('body').attr('default-color', $(this).data('color'));
});

//start fixed menu
$('.fixed-menu .fa-cog').on('click', function(){
  var fixedParent = $(this).parent('.fixed-menu');
  $(this).parent('.fixed-menu').toggleClass('visible');
  if(fixedParent.hasClass('visible')){
      fixedParent.animate({
          right :0
      }, 400);
  }else{
      fixedParent.animate({
          right:'-' + fixedParent.innerWidth()
      }, 400);
  }
});
});
