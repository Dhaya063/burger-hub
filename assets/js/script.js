// header 
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
    let translateYValue = 0;
    const maxTranslateY = -40; // Maximum value to move up by 30px
    const minTranslateY = 40;  // Minimum value to move down by 30px
    let activeMenuDetails = null; // The currently hovered menu details


// Function to handle scrolling
    function handleScroll() {
        if (!activeMenuDetails) return; // Exit if no menu container is hovered

        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop && translateYValue > maxTranslateY) {
            // Scrolling down and within the limit
            translateYValue -= 1; // Move up
        } else if (scrollTop < lastScrollTop && translateYValue < minTranslateY) {
            // Scrolling up and within the limit
            translateYValue += 1; // Move down
        }

        // Apply the transform to the active menu-details element
        activeMenuDetails.style.transform = `translateX(-50%) translateY(${translateYValue}px)`;

        // Update lastScrollTop
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Handle mouse enter and leave events for each menu container
    const menuContainers = document.querySelectorAll('.menu-container');
    menuContainers.forEach(container => {
        container.addEventListener('mouseenter', function() {
            activeMenuDetails = container.querySelector('.menu-details, .menu-details-left');
        });
        container.addEventListener('mouseleave', function() {
            activeMenuDetails = null;
        });
    });
});

// Visit Us Scrolling

document.addEventListener("DOMContentLoaded", function() {
    let lastScrollTop = 0;
    const visitDetails = document.querySelector('.visit-details');
    const visitUs = document.querySelector('.visit-us')
    let translateYValue = 0;
    const maxTranslateY = -30; // Maximum value to move up by 30px
    const minTranslateY = 30; // Minimum value to move down back to 0px

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Check if the mouse is over the visit-details section
        const isHovering = visitUs.matches(':hover');

        if (isHovering) {
            if (scrollTop > lastScrollTop && translateYValue > maxTranslateY) {
                translateYValue -= 1; // Move up
            } else if (scrollTop < lastScrollTop && translateYValue < minTranslateY) {
                translateYValue += 1; // Move down
            }

            visitDetails.style.transform = `translate(-60%) translateY(${translateYValue}px)`;
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
});



// Latest Burger

document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector('.carousel');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentIndex = 0;

    function updateCarousel() {
        carousel.style.transition = 'transform 0.5s ease';
        carousel.style.transform = `translateX(-${currentIndex * (100 / 3)}%)`;
    }

    function jumpToCard(index) {
        carousel.style.transition = 'none';
        carousel.style.transform = `translateX(-${index * (100 / 3)}%)`;
    }

    prevButton.addEventListener('click', function() {
        if (currentIndex === 0) {
            // Move the last card to the front
            const lastCard = carousel.lastElementChild;
            carousel.insertBefore(lastCard, carousel.firstElementChild);
            currentIndex = 1;  // Set the index to the first card
            jumpToCard(currentIndex);
            setTimeout(() => {
                currentIndex = 0;
                updateCarousel();
            }, 20);
        } else {
            currentIndex--;
            updateCarousel();
        }
    });

    nextButton.addEventListener('click', function() {
        if (currentIndex === carousel.children.length - 3) {
            // Move the first card to the end
            const firstCard = carousel.firstElementChild;
            carousel.appendChild(firstCard);
            currentIndex--;  // Stay at the same visual position
            jumpToCard(currentIndex);
            setTimeout(() => {
                currentIndex++;
                updateCarousel();
            }, 20);
        } else {
            currentIndex++;
            updateCarousel();
        }
    });

    updateCarousel();
});

// Book Table

document.addEventListener("DOMContentLoaded", function() {
    const today = new Date().toISOString().split('T')[0];
    const now = new Date().toISOString().split('T')[1].substring(0, 5);

    const dateInput = document.getElementById('date');
    const timeInput = document.getElementById('time');

    dateInput.setAttribute('min', today);
    timeInput.setAttribute('min', now);

    const form = document.getElementById('reservation-form');
    const successMessage = document.getElementById('success-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent actual form submission
        
        // You can handle form submission here (e.g., via AJAX)
        
        // Show success message
        form.style.display = 'none'; // Hide the form
        successMessage.style.display = 'block'; // Show the success message
    });
});