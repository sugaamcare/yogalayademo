
$('.event-carousel').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 1000, // Adjust the time interval (in milliseconds) as needed
    responsive: {
        0:{
            items:1
        },
        575:{
            items:1
        },
        767:{
            items:2
        },
        991:{
            items:3
        }
    }
});
(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });


    // Hero Header carousel
    $(".header-carousel").owlCarousel({
        animateOut: 'slideOutDown',
        items: 1,
        autoplay: true,
        smartSpeed: 1000,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });


    // International carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        items: 1,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ]
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:1
            },
            1200:{
                items:1
            }
        }
    });

    
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


})(jQuery);


// new WOW().init();
// $('.testimonial-carousel').owlCarousel({
//     loop: true,
//     margin: 30,
//     nav: false,
//     dots: true,
//     autoplay: true,
//     autoplayHoverPause: true,
//     responsive: {
//         0: {
//             items: 1
//         },
//         768: {
//             items: 2
//         },
//         992: {
//             items: 3
//         }
//     }
// });
// var players = [];
// function onYouTubeIframeAPIReady() {
//   var playerElements = document.querySelectorAll('iframe');
//   for (var i = 0; i < playerElements.length; i++) {
//     var player = new YT.Player(playerElements[i], {
//       events: {
//         'onStateChange': onPlayerStateChange
//       }
//     });
//     players.push(player);
//   }
// }
// var players = [];
//         var playing = false;
      
//         function onYouTubeIframeAPIReady() {
//           var playerElements = document.querySelectorAll('iframe');
//           for (var i = 0; i < playerElements.length; i++) {
//             var player = new YT.Player(playerElements[i], {
//               events: {
//                 'onStateChange': onPlayerStateChange
//               }
//             });
//             players.push(player);
//           }
//         }
      
//         function onPlayerStateChange(event) {
//           if (event.data == YT.PlayerState.PLAYING) {
//             playing = true;
//             $('#carouselVideoExample').carousel('pause');
//           } else if (event.data == YT.PlayerState.ENDED || event.data == YT.PlayerState.PAUSED) {
//             playing = false;
//             checkAutoSlide();
//           }
//         }
      
//         function checkAutoSlide() {
//           var allPlayersPaused = true;
//           for (var i = 0; i < players.length; i++) {
//             if (players[i].getPlayerState() !== YT.PlayerState.PAUSED) {
//               allPlayersPaused = false;
//               break;
//             }
//           }
//           if (allPlayersPaused && !playing) {
//             $('#carouselVideoExample').carousel('next');
//           }
//         }
// function onPlayerStateChange(event) {
//   if (event.data == YT.PlayerState.PLAYING) {
//     // Pause carousel interval when video is playing
//     $('#carouselVideoExample').carousel('pause');
//   } else if (event.data == YT.PlayerState.ENDED || event.data == YT.PlayerState.PAUSED) {
//     // Resume carousel interval when video ends or paused
//     $('#carouselVideoExample').carousel('cycle');
//   }
// }

// $(document).ready(function() {
//     $(".event-carousel-1").owlCarousel({
//         loop: true,
//         dots: false,
//         margin: 25,
//         autoplay: true,
//         slideTransition: 'linear',
//         autoplayTimeout: 0,
//         autoplaySpeed: 10000,
//         autoplayHoverPause: false,
//         responsive: {
//             0:{
//                 items:1
//             },
//             575:{
//                 items:1
//             },
//             767:{
//                 items:2
//             },
//             991:{
//                 items:3
//             }
//         }
//     });
// });
$('.event-carousel').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 1000, // Adjust the time interval (in milliseconds) as needed
    responsive: {
        0:{
            items:1
        },
        575:{
            items:1
        },
        767:{
            items:2
        },
        991:{
            items:3
        }
    }
});

   // Latest-news-carousel
   $(".latest-news-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 2000,
    center: false,
    dots: true,
    loop: true,
    margin: 25,
    nav : true,
    navText : [
        '<i class="bi bi-arrow-left"></i>',
        '<i class="bi bi-arrow-right"></i>'
    ],
    responsiveClass: true,
    responsive: {
        0:{
            items:1
        },
        576:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        },
        1200:{
            items:4
        }
    }
});
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
});
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"] // Customize navigation arrows
    });
});
(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });


    // Hero Header carousel
    $(".header-carousel").owlCarousel({
        animateOut: 'slideOutDown',
        items: 1,
        autoplay: true,
        smartSpeed: 1000,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });


    // International carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        items: 1,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ]
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:1
            },
            1200:{
                items:1
            }
        }
    });

    
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


})(jQuery);

