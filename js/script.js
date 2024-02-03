// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

// dark mode
const btnSwitch = document.querySelector('#switch')

btnSwitch.addEventListener('click', ()=> {
  document.body.classList.toggle('dark');
  btnSwitch.classList.toggle('active-switch');
  // const aboutDark = document.getElementById('#about')
  // aboutDark.classList.remove('about')
  // console.log(aboutDark.classList.remove('about'))
  // aboutDark.classList.add('about-2')
})




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
  let body = document.querySelector('body')

  function handleScroll() {
    //Obtener la posicion actual de desplazamiento
    let scrollPosition = window.scrollY;
    //Verificar si el body tiene la clase dark
    let isDarkMode = body.classList.contains('dark')
    //Agregar la clase 'sticky' al header si la posicion de desplazamiento es mayor que 100
    //o si esta en modo oscuro, de lo contrario eliminarla 
    header.classList.toggle('sticky', scrollPosition > 100 || isDarkMode);
      
    //cambiar el color del header dependiendo del modo oscuro
    if (isDarkMode) {
      header.style.background = '#000'

    } else {
      header.style.background = '#112e42'
    }
  }
  //Agregar un listener para el evento de desplazamiento 
  window.addEventListener('scroll', handleScroll);
  handleScroll();

//Cambiar el color de las animaciones 
let isDarkMode = body.classList.contains('dark')
let  animationDarkMode = document.querySelectorAll('.animate')
if(isDarkMode){
  animationDarkMode.forEach(animation => animation.classList.remove('animate'))
}

//Cambiar el color de la animacion del span con la clase Circle-spin 
let circleSpin = document.getElementById('circle-spin');

if(isDarkMode){
  circleSpin.style.borderTop = '.2rem solid #000'
  circleSpin.style.borderBottom = '.2rem solid #000'
} else{
  circleSpin.style.borderTop = '.2rem solid #112e42'
  circleSpin.style.borderBottom = '.2rem solid #112e42'
}

  // remove toggle icon and navbar when click navbar links (scroll)
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');

  // animation footer on scroll
  let footer = document.querySelector('footer')

  footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);

}
//Swiper library

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



