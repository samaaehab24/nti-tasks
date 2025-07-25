

    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();

        let name = document.getElementById('name').value.trim();
        let email = document.getElementById('email').value.trim();
        let subject = document.getElementById('subject').value.trim();
        let message = document.getElementById('message').value.trim();
        let successMessage = document.getElementById('successMessage');

        if (name === '' || email === '' || subject === '' || message === '') {
            alert('Please fill in all fields.');
        } else if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
        } else {
            
            successMessage.classList.remove('d-none');
            successMessage.classList.add('show');

           
            document.getElementById('contactForm').reset();

            
            setTimeout(function() {
                successMessage.classList.remove('show');
                setTimeout(() => {
                    successMessage.classList.add('d-none');
                }, 500); 
            }, 3000);
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email.toLowerCase());
    }



