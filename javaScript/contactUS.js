// JavaScript to handle opening and closing the contact form popup

document.addEventListener('DOMContentLoaded', function () {
    var openBtn = document.getElementById('openContactFormBtn');
    var closeBtn = document.getElementById('closeContactFormBtn');
    var popup = document.getElementById('contactFormPopup');

    openBtn.addEventListener('click', function () {
        popup.style.display = 'block';
    });

    closeBtn.addEventListener('click', function () {
        popup.style.display = 'none';
    });

    // Close the popup if the user clicks outside of it
    window.addEventListener('click', function (event) {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    });
});
