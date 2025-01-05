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
    spinner();
    
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
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
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

    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    // Background container dengan 3 gambar
    const backgroundImages = document.querySelectorAll('.background-image');
    let currentImage = 0;

    setInterval(() => {
        backgroundImages[currentImage].classList.remove('active');
        currentImage = (currentImage + 1) % backgroundImages.length;
        backgroundImages[currentImage].classList.add('active');
    }, 10000); // change the background every 5 seconds

})(jQuery);

document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.rating .fa-star');
    let selectedRating = 0;

    stars.forEach((star, index) => {
        // Hover effect
        star.addEventListener('mouseover', function() {
            resetStars();
            for (let i = 0; i <= index; i++) {
                stars[i].classList.remove('far');
                stars[i].classList.add('fas');
            }
        });

        // Mouse leave effect
        star.addEventListener('mouseleave', function() {
            resetStars();
            for (let i = 0; i < selectedRating; i++) {
                stars[i].classList.remove('far');
                stars[i].classList.add('fas');
            }
        });

        // Click effect
        star.addEventListener('click', function() {
            selectedRating = index + 1;
            resetStars();
            for (let i = 0; i < selectedRating; i++) {
                stars[i].classList.remove('far');
                stars[i].classList.add('fas');
            }
            // You can add a hidden input to store the rating value
            const ratingInput = document.getElementById('rating-value') || createHiddenInput();
            ratingInput.value = selectedRating;
        });
    });

    function resetStars() {
        stars.forEach(star => {
            star.classList.remove('fas');
            star.classList.add('far');
        });
    }

    function createHiddenInput() {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.id = 'rating-value';
        input.name = 'rating';
        document.querySelector('.rating').appendChild(input);
        return input;
    }
});