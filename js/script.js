const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')


btn.addEventListener('click', function () {
    btn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})

// Swiper
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});


// Send mail
function sendMail() {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        emailjs.sendForm('citydeluxe', 'template_bd3kss9', '#contact-form')
            .then(function (response) {
                // success alert 
                Swal.fire({
                    title: 'Success!',
                    text: 'Your message has been sent successfully!',
                    icon: 'success',
                    confirmButtonText: 'Done'
                })

            }, function (error) {
                // failure 
                Swal.fire({
                    title: 'Failed!',
                    text: 'Oops! Something went wrong. Please try again later.',
                    icon: 'error',
                    confirmButtonText: 'Try Again'
                })
            });
    });
}
// FAQ

const questions = document.querySelectorAll('.question-answers');
const answers = document.querySelectorAll('.exact-answer');
const icon = document.querySelectorAll('.fa-chevron-down');
// for each
questions.forEach((question, index) => {
    question.addEventListener('click', function () {
        answers[index].classList.toggle('hidden');
        answers[index].classList.toggle('flex');
        icon[index].classList.toggle('fa-chevron-down');
        icon[index].classList.toggle('fa-chevron-up');
    })

})

// TABS for rooms
const tabButtons = document.querySelectorAll('.tabButtonsRooms');
const tabContent = document.querySelectorAll('.cont');
// forEach 
tabButtons.forEach((tab, index) => {
    tab.addEventListener('click', function () {
        console.log('hello');
        tabContent[index].classList.toggle('hidden');
        tabContent[index].classList.toggle('flex');
    })
})
