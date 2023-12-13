document.addEventListener('DOMContentLoaded', function () {
    var openBtn = document.getElementById('openContactFormBtn');
    var closeBtn = document.getElementById('closeContactFormBtn');
    var popup = document.querySelector('.popup');

    openBtn.addEventListener('click', function () {
        popup.style.display = 'block';
        console.log("open");
    });

    closeBtn.addEventListener('click', function () {
        console.log("close one");
        popup.style.display = 'none';
    });

    // Close the popup if the user clicks outside of it
    window.addEventListener('click', function (event) {
        console.log("window clicked");
        if (event.target == popup) {
            popup.style.display = 'none';
            console.log("close");
        }
    });
});
