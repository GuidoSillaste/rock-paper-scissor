window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

         // need this id so i get the email. If you read this write everything wrong in textarea and send it to me. No spams pls.

         emailjs.init('user_ZW40QdJXGThHrmrlYX5xs');

        // generate a five digit number for the contact_number variable

        this.contact_number.value = Math.random() * 100000 | 0;

        // these IDs from the previous steps

        emailjs.sendForm('contact_service', 'contact_form', this)
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}

