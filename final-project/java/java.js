/*buttons*/
const filterButtons = document.querySelectorAll('.filter-btn');
const imageItems = document.querySelectorAll('.image-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');
        let shownSrcs = []; // Array to track displayed images (for 'all' filter)

        imageItems.forEach(item => {
            const imgSrc = item.querySelector('img').getAttribute('src');

            if (filterValue === 'all') {
                if (!shownSrcs.includes(imgSrc)) {
                    item.style.display = 'block';
                    shownSrcs.push(imgSrc);
                } else {
                    item.style.display = 'none';
                }
            } else if (item.getAttribute('data-category') === filterValue) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Automatically trigger "All" filter when page loads
window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.filter-btn[data-filter="all"]').click();
});


/*buttons*/



    const radios = document.querySelectorAll('input[name="cardToggle"]');
    radios.forEach(radio => {
        radio.addEventListener('change', function() {
            document.getElementById('group1').classList.add('d-none');
            document.getElementById('group2').classList.add('d-none');

            if (this.id === 'group1btn') {
                document.getElementById('group1').classList.remove('d-none');
            } else if (this.id === 'group2btn') {
                document.getElementById('group2').classList.remove('d-none');
            }
        });
    });




    
    document.getElementById("subscribeBtn").addEventListener("click", function() {
        let email = document.getElementById("emailInput").value.trim();
        let messageDiv = document.getElementById("message");

        if (email === "") {
            showMessage("Please enter your email!", "danger");
        } else if (!validateEmail(email)) {
            showMessage("Please enter a valid email address!", "warning");
        } else {
            showMessage("Thank you for subscribing, " + email + "!", "success");
            document.getElementById("emailInput").value = "";
        }
    });

    function validateEmail(email) {
        let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function showMessage(msg, type) {
        let messageDiv = document.getElementById("message");
        messageDiv.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                    ${msg}
                                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                </div>`;
    }


$(document).ready(function(){
    $('.owl-carousel.company_carousel').owlCarousel({
        dots: false,
        nav: true,  
        navText: ["<i class='fa fa-arrow-left'></i>", "<i class='fa fa-arrow-right'></i>"],
        loop: true,
        margin: 30,
        stagePadding: 2,
        autoplay: true,
        autoplayTimeout: 1500,
        autoplayHoverPause: true,
        nav: true,
        navText: ["<i class='fa fa-arrow-left'></i>", "<i class='fa fa-arrow-right'></i>"],
        responsive:{
            0:{ items: 1 },
            768:{ items: 2 },
            992:{ items: 2 }
        }
    });
});








