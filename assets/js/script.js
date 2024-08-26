document.addEventListener("DOMContentLoaded", function() {
    let lastScrollTop = 0;
    const header = document.querySelector('.header');

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scrolling down
            header.style.top = "-80px"; // Adjust the value based on your header's height
        } else {
            // Scrolling up
            header.style.top = "0";
        }
        lastScrollTop = scrollTop;
    });
});


// Menu details 

document.addEventListener("DOMContentLoaded", function() {
    let lastScrollTop = 0;
    const menuDetails = document.querySelector('.menu-details');
    let translateYValue = 0;

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scrolling down
            translateYValue -= 1; // Move down
        } else {
            // Scrolling up
            translateYValue += 1; // Move up
        }

        // Apply the transform to the menu-details element
        menuDetails.style.transform = `translateX(-50%) translateY(${translateYValue}px)`;

        // Update lastScrollTop
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
});
