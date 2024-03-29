$(document).ready(function() {
    const isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i)
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i)
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i)
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i)
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i)
        },
        any: function () {
            return (
                isMobile.Android() ||
                isMobile.BlackBerry() ||
                isMobile.iOS() ||
                isMobile.Opera() ||
                isMobile.Windows());
        },
    };

    if (isMobile.any()) {
        document.body.classList.add('_touch');
        let menuArrows = document.querySelectorAll('.menu__link-catalog')
        if (menuArrows.length > 0) {
            for (let index = 0; index < menuArrows.length; index++) {
                const menuArrow = menuArrows[index];
                menuArrow.addEventListener('click', function (e) {
                    menuArrow.parentElement.classList.toggle('_active');
                });
            }
        }

    } else {
        document.body.classList.add('_pc');
    }

    const iconMenu = document.body.querySelector('.menu__icon')
    const iconMenuBlock = document.body.querySelector('.menu__icon-block')

    if (iconMenu) {
        const menuBody = document.body.querySelector('.menu__body')
        iconMenuBlock.addEventListener('click', function (e) {
            document.body.classList.toggle('_lock')
            iconMenu.classList.toggle('_active')
            menuBody.classList.toggle('_active')
        })
    }

});
$(function() {
    let header = $('.header_scroll');
    let header_mob = $('.header-mob');
    // let header_mob_hide = $('.header-mob.hide');

    $(window).scroll(function() {
        if($(this).scrollTop() > 15) {
            header.addClass('header_fixed');
            header_mob.addClass('header_fixed');
            // header_mob_hide.addClass('hide-block');
        } else {
            header.removeClass('header_fixed');
            header_mob.removeClass('header_fixed');
        }
    });
});

let array1 = document.querySelectorAll('.cases_item-block');
for (let i = 3; i < array1.length; i++) {
    array1[i].classList.add('none');
}
const button1 = document.querySelector('#cases_btn');
const button2 = document.querySelector('#cases_action-hide');
const button3 = document.querySelector('#cases_action-show');
if (button1) {
    button1.addEventListener('click', () => {
        let elements1 = document.querySelectorAll('.cases_item-block.none');

        for (let i = 0; i < elements1.length; i++) {
            elements1[i].classList.remove('none');
        }
        button1.classList.add('none');
        button2.classList.add('none');
        button3.classList.remove('none');
    });
}

$(".reviews_items").slick({
    dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    nextArrow: '<div class="arrow-next"><svg width="52" height="50" viewBox="0 0 52 50" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '  <path fill-rule="evenodd" clip-rule="evenodd" d="M51.623 25C51.623 11.2093 40.05 0 25.8118 0C11.5737 0 0.00062561 11.2093 0.00062561 25C0.00062561 38.7907 11.5737 50 25.8118 50C40.05 50 51.623 38.7907 51.623 25ZM21.172 34.3895C21.5321 34.7384 21.9883 34.9012 22.4445 34.9012C22.9007 34.9012 23.3569 34.7384 23.7171 34.3895L32.1928 26.1802C32.8891 25.5058 32.8891 24.3895 32.1928 23.7151L23.7171 15.5058C23.0208 14.8314 21.8683 14.8314 21.172 15.5058C20.4757 16.1802 20.4757 17.2965 21.172 17.9709L28.3751 24.9477L21.172 31.9244C20.4757 32.5988 20.4757 33.7151 21.172 34.3895Z" fill="#161414"/>\n' +
        '  </svg></div>',
    adaptiveHeight: true,
    responsive: [
        {
            breakpoint: 1380,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                adaptiveHeight: true,
            }
        }
    ]
});



$(".advertisingTarget_items").slick({
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 3,
    focusOnSelect: true
});


$(".team_items-slider").slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '<div class="arrow-next"><svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '  <path fill-rule="evenodd" clip-rule="evenodd" d="M41.2979 20.248C41.2979 9.21549 32.0394 0.248047 20.6489 0.248047C9.25834 0.248047 -8.01086e-05 9.21549 -8.01086e-05 20.248C-8.01086e-05 31.2806 9.25834 40.248 20.6489 40.248C32.0394 40.248 41.2979 31.2806 41.2979 20.248ZM16.937 27.7597C17.2251 28.0387 17.5901 28.169 17.955 28.169C18.32 28.169 18.685 28.0387 18.9731 27.7597L25.7536 21.1922C26.3107 20.6527 26.3107 19.7597 25.7536 19.2201L18.9731 12.6527C18.416 12.1132 17.494 12.1132 16.937 12.6527C16.38 13.1922 16.38 14.0853 16.937 14.6248L22.6995 20.2062L16.937 25.7876C16.38 26.3271 16.38 27.2201 16.937 27.7597Z" fill="#161414"/>\n' +
        '  </svg></div>',
});

function openInfo(evt, info) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(info).style.display = "block";
    evt.currentTarget.className += " active";
}
