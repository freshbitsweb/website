/*navbar white*/
$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll > '20') {
        $('.navbar-default').addClass('nav-white');
    } else if (scroll < '20') {
        $('.navbar-default').removeClass('nav-white');
    }
});

$(document).ready(function () {
    var scroll = $(window).scrollTop();

    if (scroll > '20') {
        $('.navbar-default').addClass('nav-white');
    } else if (scroll < '20') {
        $('.navbar-default').removeClass('nav-white');
    }
});

/*animated js start*/
$('.animated').each(function () {
    $(this).appear(function () {
        var element = $(this);
        var animation = element.attr('data-animation');

        if (!element.hasClass('visible')) {
            var animationDelay = element.attr('data-animation-delay');

            setTimeout(function () {
                element.addClass(animation + ' visible');
            }, animationDelay);
        }
    });
});

$('body').scrollspy({
    target: '#nav-main',
    offset: 72
});

/*animated svg js*/
function spinGlobe() {
    var tmax_tl = new TimelineMax({
        delay: 0.1675,
        repeat: -1
    });

    var globe_continents = [
        $('.globe .middle path'),
        $('.globe .left  path')
    ];

    var globe_speed = 10;

    var map_from = {
        y: 0
    };

    var map_to = {
        y: -80.5,
        ease: Linear.easeOut
    };

    tmax_tl.fromTo(globe_continents, globe_speed, map_from, map_to, 0);

    return tmax_tl;
}

spinGlobe();

/*marquee js*/
$('.marquee').marquee({
    duplicated: true,
    duration: 20000
});

/*slick slider js*/
$('.slick', '.vertical-slider').slick({
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    speed: 1000,
    centerMode: true,
    prevArrow: "<button class='why-slider-left'><img src='images/left-arrow.png'></button> ",
    nextArrow: "<button class='why-slider-right'><img src='images/right-arrow.png'></button> "
});

setTimeout(function () {
    $('.bg-inner').addClass('animate');
}, 1900);

setTimeout(function () {
    $('.main-wrapper').addClass('animate');
}, 2100);

setTimeout(function () {
    $('.navbar-brand').addClass('animate');
}, 1000);

setTimeout(function () {
    $('.navbar-nav li ').addClass('animate');
}, 1100);

setTimeout(function () {
    $(".svg-box").addClass("animate");
}, 1000);

setTimeout(function () {
    $(".svg-box.menusvg").addClass("animate2");
}, 1000);

jQuery(function ($) {
    var doAnimations = function () {
        var offset = $(window).scrollTop() + $(window).height(),
            $animatables = $('.animatable');

        if ($animatables.length == 0) {
            $(window).off('scroll', doAnimations);
        }

        // Check all animatables and animate them if necessary
        $animatables.each(function (i) {
            var $animatable = $(this);

            if (($animatable.offset().top + $animatable.height() - 20) < offset) {
                $animatable.removeClass('animatable').addClass('animated');
            }
        });
    };

    // Hook doAnimations on scroll, and trigger a scroll
    $(window).on('scroll', doAnimations);
    $(window).trigger('scroll');
});

/*animated text js*/
$(document).ready(function () {
    $('.tlt').textillate({
        // the default selector to use when detecting multiple texts to animate
        selector: '.load-text',
        // enable looping
        loop: true,
        // sets the minimum display time for each text before it is replaced
        minDisplayTime: 1000,
        // sets the initial delay before starting the animation
        // (note that depending on the in effect you may need to manually apply
        // visibility: hidden to the element before running this plugin)
        initialDelay: 0,

        // set whether or not to automatically start animating
        autoStart: true,
        // custom set of 'in' effects. This effects whether or not the
        // character is shown/hidden before or after an animation
        inEffects: [],
        // custom set of 'out' effects
        outEffects: ['hinge'],
        // in animation settings
        in: {
            effect: 'fadeIn',
            sequence: true,
            delay: 50,
            sync: false
        },
        // out animation settings.
        out: {
            effect: 'fadeOut',
            sequence: true,
            delay: 0
        }
    });
});

/*scrollspy js*/
$('body').scrollspy({
    target: '#nav-main',
    offset: 65
});

$(function () {
    diariesData.sort(() => Math.random() - Math.random()).slice(0, 5).map(function (data) {
        $('#image-container').append(`
            <a href="https://www.freshbits.in/diaries#`+ data.id + `" target="_blank" id="images-` + data.id + `">
                <div class="animated" data-animation="fadeInUp" data-animation-delay="600"></div>
            </a>
        `);

        data.images.sort(() => Math.random() - Math.random()).slice(0, 1).map(function (image) {
            return $('#image-container #images-' + data.id).css({ "background-image": "url(" + image.thumbnail + ")", "background-repeat": "no-repeat", "background-position": "center", "background-size": "140px" });
        });
    });

    $('a.page-scroll').bind('click', function (event) {
        if ($(window).width < 768) {
            var $anchor = $(this);

            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 50
            }, 1500, 'easeInOutExpo');

            event.preventDefault();
        } else {
            var $anchor = $(this);

            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 65
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        }
    });

    $('.btn-submit').popover({
        content: "Thank you. Form submitted successfully. We will get in touch soon.",
        placement: "right",
        trigger: "manual"
    });

    $("#contact-form").submit(function (e) {
        e.preventDefault();

        var contactForm = $(this);
        $.post(
            contactForm.attr("action"),
            contactForm.serialize()
        ).done(function () {
            $("#contact-form")[0].reset();

            $('.btn-submit').popover('show');

            setTimeout(function () {
                $('.btn-submit').popover('hide');
            }, 4000);
        }).fail(function () {
            alert("Not done!");
        });
    });
});


const blogUl = document.getElementById('blog-ul');
if (blogUl) {
    window.onload = function () {
        axios.post('/fetch-blogs').then((result) => {
            const articles = result.data.data.user.publication.posts;
            const blogDisplayTemplate = document.getElementById('blog-item');

            articles.forEach((element, index) => {
                const blogDisplayCard = blogDisplayTemplate.content.cloneNode(true);
                if (index < 2) {
                    blogDisplayCard.querySelector('.blog-link').href = "https://blog.freshbits.in/" + element.slug;
                    blogDisplayCard.querySelector('.blog-cover-image').src = element.coverImage;
                    blogDisplayCard.querySelector('.blog-cover-image').alt = element.title;
                    blogDisplayCard.querySelector('.title-of-blog').innerText = element.title;
                    blogDisplayCard.querySelector('.body-of-blog').innerText = element.brief;
                    blogUl.append(blogDisplayCard);
                }
            });
        });
    }
}

const templateDairy = document.getElementById('dairy-card');
if (templateDairy) {
    const freshbitsDairiesDiv = document.getElementById('freshbits-dairies-div');
    diariesData.reverse();

    function displayActivityFor(filterName = 'all', currentElement) {
        const currentActiveClass = document.getElementsByClassName("active-filter-button");
        currentActiveClass[0].className = currentActiveClass[0].className.replace(" active-filter-button", "");
        currentElement.className += " active-filter-button";

        freshbitsDairiesDiv.innerHTML = "";
        diariesData.forEach((dairyData) => {
            if (dairyData.tag === filterName || filterName === 'all') {
                const dairiesCard = templateDairy.content.cloneNode(true);
                const linkAndImageTemplate = dairiesCard.querySelector('#images-and-link');
                const imageDiv = dairiesCard.querySelector('#add-images');

                dairiesCard.querySelector('.freshbits-diaries-row').id = dairyData.id;
                dairiesCard.querySelector('.event-date').innerHTML = dairyData.date;
                dairiesCard.querySelector('.event-date').href = "#" + dairyData.id;
                dairiesCard.querySelector('.card-title').innerHTML = dairyData.title;
                dairiesCard.querySelector('.card-topic').innerHTML = dairyData.topic;
                freshbitsDairiesDiv.append(dairiesCard);

                dairyData.images.forEach((image) => {
                    let imagesAndLinkDiv = linkAndImageTemplate.content.cloneNode(true);
                    imagesAndLinkDiv.querySelector('.image').href = image.media;
                    imagesAndLinkDiv.querySelector('.thumbnail-image').src = image.thumbnail;
                    imagesAndLinkDiv.querySelector('.thumbnail-image').alt = dairyData.title;
                    imageDiv.append(imagesAndLinkDiv);
                });
            }
        });
    }

    const allFilterButton = document.getElementById('all-filter-button');
    displayActivityFor('all', allFilterButton);
}