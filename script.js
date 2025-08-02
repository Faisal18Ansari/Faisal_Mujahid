let icon = document.querySelector("#menu");
let navb = document.querySelector(".navbar");
icon.onclick = () => {
    icon.classList.toggle('bx-x');
    navb.classList.toggle('active');
};

let sections = document.querySelectorAll('sections');
let nav = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            nav.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 100);
    icon.classList.remove('bx-x');
    navb.classList.remove('active');
};
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.home-body, .about-body>h2, .skills>h2, .project>h2, .contact>h2', { origin: 'top' });
ScrollReveal().reveal('.image, .skills-container, .project-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-body h1, .about img', { origin: 'left' });
ScrollReveal().reveal('.home-body h2, .about-body', { origin: 'right' });

const typed = new Typed('.multi', {
    strings: [' Passionate Game Creator','Game Design Enthusiast','Building Worlds, One Game at a Time'],
    typeSpeed: 60,
    backSpeed: 60,
    backDelay: 60,
    loop: true
});
function showPopup() {
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default reload

    const form = event.target;
    const formData = new FormData(form);

    fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            showPopup();    // Show your popup
            form.reset();   // Clear the form after sending
        } else {
            alert("There was an error sending your message. Please try again.");
        }
    }).catch(error => {
        alert("There was an error sending your message. Please try again.");
    });
});





