document.addEventListener('DOMContentLoaded', () => {
    const slideImage = $(".slide-image");
    const slideContainer = $(".slide-container");
    const nextButton = $(".next-btn");
    const previousButton = $(".previous-btn");
    const navsDots = $(".nav-dots");

    function updateWidth() {
        setWidth(slideImage[0].clientWidth);
    }

    function setWidth(x) {
        return x
    }

    window.addEventListener('resize', () => {
        updateWidth()
    });

    let numberOfImages = slideImage.length;

    let slideWidth = setWidth(slideImage[0].clientWidth);

    let currentSlide = 0;

    init();

    function init() {
        slideImage.each((i,img) => {
            $(img).css("left", i * 100 + '%');
        });
        slideImage[0].classList.add("active");
    }

    function createNavDots () {
        slideImage.each((i) => {
            // console.log(navsDots[0])
            navsDots.append("<div></div>");
            $(".nav-dots div").addClass("single-dot")
                .on("click", () => {
                    goToSlide(i);
                })
        })
        $('.single-dot').first().addClass('active')
    }

    createNavDots();

    nextButton.on("click", () => {
        if (currentSlide >= numberOfImages - 1) {
            goToSlide(0)
            return;
        }
        currentSlide++;
        goToSlide(currentSlide);
    })


    previousButton.on("click", () => {
        if (currentSlide <= 0) {
            goToSlide(numberOfImages - 1)
            return;
        }
        currentSlide--;
        goToSlide(currentSlide);
    })

    function goToSlide(slideNumber) {
        slideContainer.css("transform", "translateX(-" + (slideWidth * slideNumber) + "px)");
        currentSlide = slideNumber;
        setActiveClass();
    }

    function setActiveClass() {
        let currentActive = document.querySelector(".single-dot.active");
        currentActive.classList.remove("active");
        slideImage[currentSlide].classList.add("active");

        // set active class for navigation dots

        let currentDot = document.querySelector('.slide-image.active');
        currentDot.classList.remove("active");
        $('.single-dot')[currentSlide].classList.add('active')
    }

})