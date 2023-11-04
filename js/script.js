// aca se manejan o se declaran el menu y la barra de navegacion
let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

// cuando uno le da clic debe de aparecer el listado con la barra de navegacion
menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

// este maneja el desplazamiento de la ventana principal como tal y la del menu de busqueda
window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}

// cuando se eliga el icono de busqueda o se le de clic, se abre la ventana de busqueda
document.querySelector('#search-icon').onclick = () =>{
  document.querySelector('#search-form').classList.toggle('active');
}

// cuando se le de a la X de la derecha se "remueve o borra" esa ventana de busqueda y pasa a la pagina principal
document.querySelector('#close').onclick = () =>{
  document.querySelector('#search-form').classList.remove('active');
}


// iniciamos las imagenes que cambian al inicio
var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop:true,
});
// terminamos eso

// Iniciamos temporizador

// definicion de variables
let horas= 7;
let minutos = 0;
let segundos = 0;
cargarSegundo();

// definimos y ejecutamos los segundos
function cargarSegundo(){
  let txtSegundos;

// mostramos segundos en pantalla
  if (segundos < 0){
    segundos = 59
  }

  if (segundos < 10){
    txtSegundos = `0${segundos}`;
  }else{
    txtSegundos = segundos;
  }
  document.getElementById('segundos').innerHTML = txtSegundos;
  segundos--;

  cargarMinutos(segundos);
}

// definimos y ejecutamos minutos
function cargarMinutos(segundos) {
  let txtMinutos;

  if (segundos == -1 && minutos !== 0) {
      setTimeout(() => {
          minutos--;
      }, 500);
  } else if (segundos == -1 && minutos == 0) {
      setTimeout(() => {
          minutos = 59;
      }, 500);
  }
// los mostramos en pantalla
  if (minutos < 10) {
      txtMinutos = `0${minutos}`;
  } else {
      txtMinutos = minutos;
  }
  document.getElementById('minutos').innerHTML = txtMinutos;
  cargarHoras(segundos, minutos);
}
// ahora definimos y ejecutamos las horas
function cargarHoras(segundos, minutos) {
  let txtHoras;
  if (segundos == -1 && minutos == 0 && horas !== 0) {
      setTimeout(() => {
          horas--;
      }, 500);
  } else if (segundos == -1 && minutos == 0 && horas == 0) {
      setTimeout(() => {
          horas = 2;
      }, 500);
  }
// mostrar en pantalla
  if (horas < 10) {
      txtHoras = `0${horas}`;
  } else {
      txtHoras = horas;
  }
  document.getElementById('horas').innerHTML = txtHoras;
}
// ejecutamos cada segundo
setInterval(cargarSegundo, 1000);
// terminamos temporizador