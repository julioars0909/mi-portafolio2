// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
        // active navbar Links
        navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*= '+ id +']').classList.add('active');
        });
        // active sections for Animation on scroll
        sec.classList.add('show-animate')

    }
    // if want to use animation that repeats on scroll use this
    else {
      sec.classList.remove('show-animate')
    }
  });

  // sticky header
  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);


  // remove toggle icon and navbar when click navbar links (scroll)

  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');

  // animation footer on scroll
  let footer = document.querySelector('footer')

  footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);

}

var swiper = new Swiper(".slide-content", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita la acción predeterminada de envío del formulario

    // Realiza aquí cualquier acción adicional que desees, como validar los datos del formulario o mostrar un mensaje de confirmación al usuario

    // Luego, puedes enviar los datos del formulario a Formsubmit utilizando Fetch API o cualquier otra forma que prefieras
    fetch("https://formsubmit.io/send/aristyjulio0909@gmail.com", {
      method: "POST",
      body: new FormData(form),
    })
      .then((response) => response.json())
      .then((data) => {
        // Maneja la respuesta de Formsubmit si es necesario
        console.log(data);
        // Puedes mostrar un mensaje de éxito o error al usuario
      })
      .catch((error) => {
        // Maneja los errores si es necesario
        console.error(error);
        // Puedes mostrar un mensaje de error al usuario
      });
  });
});
