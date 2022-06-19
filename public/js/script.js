//Paginas
let resultadoDeCartas = document.getElementById("resultadoDeCartas");
let muchosBotones = document.getElementById("muchosBotones");
let animacion = document.getElementById("animacion");
let paginaMatch = document.getElementById("paginaMatch");
let paginaInicio = document.getElementById("paginaInicio");
let validacion = document.getElementById("validacion");
//Botones
let voyATenerSuerte = document.getElementById("voyATenerSuerte");
let resultadosAnteriores = document.getElementById("resultadosAnteriores");
let volverATirar = document.getElementById("volverATirar");
let verResultados = document.getElementById("verResultados");
let irAResultados = document.getElementById("irAResultados");
let salir = document.getElementById("salir");
let guardar = document.getElementById("guardar");
let carousel = document.getElementById("carouselTiradas");
let inicio = document.getElementById("inicio");
let ayuda = document.getElementById("ayuda");
let mostrarAyuda = document.getElementById("mostrarAyuda");
let cerrarAyuda = document.getElementById("cerrarAyuda");

//Jugadores y cartas
let inputJ1 = document.getElementById("inputJ1");
let inputJ2 = document.getElementById("inputJ2");
let jugador1 = document.getElementById("jugador1");
let jugador2 = document.getElementById("jugador2");
let hayMatch = document.getElementById("hayMatch");
let carta1 = document.getElementById("carta1");
let carta2 = document.getElementById("carta2");
let carta3 = document.getElementById("carta3");
let carta4 = document.getElementById("carta4");
let carta5 = document.getElementById("carta5");
let carta6 = document.getElementById("carta6");

//Pagina donde muestro la tirada
let jugador1_1 = document.getElementById("jugador1_1");
let jugador1_2 = document.getElementById("jugador1_2");
let jugador1_3 = document.getElementById("jugador1_3");
let jugador2_1 = document.getElementById("jugador2_1");
let jugador2_2 = document.getElementById("jugador2_2");
let jugador2_3 = document.getElementById("jugador2_3");
let img0 = document.getElementById("img0");
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let img4 = document.getElementById("img4");
let img5 = document.getElementById("img5");
let nombreCarta0 = document.getElementById("nombreCarta0");
let detalleCarta0 = document.getElementById("detalleCarta0");
let nombreCarta1 = document.getElementById("nombreCarta1");
let detalleCarta1 = document.getElementById("detalleCarta1");
let nombreCarta2 = document.getElementById("nombreCarta2");
let detalleCarta2 = document.getElementById("detalleCarta2");
let nombreCarta3 = document.getElementById("nombreCarta3");
let detalleCarta3 = document.getElementById("detalleCarta3");
let nombreCarta4 = document.getElementById("nombreCarta4");
let detalleCarta4 = document.getElementById("detalleCarta4");
let nombreCarta5 = document.getElementById("nombreCarta5");
let detalleCarta5 = document.getElementById("detalleCarta5");

//Arreglo donde almaceno la tirada
let tiradas = new Array();

ayuda.addEventListener("click", () =>{
  mostrarAyuda.style.display="flex"
})

cerrarAyuda.addEventListener("click", () =>{
  mostrarAyuda.style.display="none"
})

voyATenerSuerte.addEventListener("click", (e) => {
  tiradas = [];
  e.preventDefault();
  validarDatos();
  volverATirar.style.display="block"
  guardar.style.display="block"
});


function validarDatos(e) {
  if (inputJ1.value == "" || inputJ2.value == "") {
    validacion.style.display = "block";
    e.preventDefault();
  } else {
    //console.log(inputJ1.value);
    paginaAnimacion();
    setTimeout(() => {
      animacion.style.display = "none";
      resultadoDeCartas.style.display = "block";
    }, 3000);
    tirarCartas();
  }
}

const paginaAnimacion = () => {
  animacion.style.display = "block";
  paginaInicio.style.display = "none";
  resultadoDeCartas.style.display = "none";
  muchosBotones.style.display = "none";
  resultadosAnteriores.style.display = "none";
  paginaMatch.style.display = "none";
};

function tirarCartas() {
  //Variables para sacar las cartas
  let uno = -1;
  let dos = -1;
  let tres = -1;
  let cuatro = -1;
  let cinco = -1;
  let seis = -1;

  //Contador
  let n = 0;
  let carta;
  do {
    carta = Math.floor(Math.random(0, 22) * 22);
    if (
      carta != uno &&
      carta != dos &&
      carta != tres &&
      carta != cuatro &&
      carta != cinco &&
      carta != seis
    ) {
      tiradas.push(carta);
      n++;
      if (n == 1) {
        uno = carta;
      }
      if (n == 2) {
        dos = carta;
      }
      if (n == 3) {
        tres = carta;
      }
      if (n == 4) {
        cuatro = carta;
      }
      if (n == 5) {
        cinco = carta;
      }
      if (n == 6) {
        seis = carta;
      }
    }
  } while (n < 6);
  //console.log(tiradas);
  mostrarResultados();
  iterarJugadores1()
}

function mostrarResultados() {
  imprimirJugadores();

  let cero = tiradas[0];
  let uno = tiradas[1];
  let dos = tiradas[2];
  let tres = tiradas[3];
  let cuatro = tiradas[4];
  let cinco = tiradas[5];

  nombreCarta0.innerHTML = arcanos[cero].nombreCarta;
  nombreCarta1.innerHTML = arcanos[uno].nombreCarta;
  nombreCarta2.innerHTML = arcanos[dos].nombreCarta;
  nombreCarta3.innerHTML = arcanos[tres].nombreCarta;
  nombreCarta4.innerHTML = arcanos[cuatro].nombreCarta;
  nombreCarta5.innerHTML = arcanos[cinco].nombreCarta;

  detalleCarta0.innerHTML = arcanos[cero].detalleCarta;
  detalleCarta1.innerHTML = arcanos[uno].detalleCarta;
  detalleCarta2.innerHTML = arcanos[dos].detalleCarta;
  detalleCarta3.innerHTML = arcanos[tres].detalleCarta;
  detalleCarta4.innerHTML = arcanos[cuatro].detalleCarta;
  detalleCarta5.innerHTML = arcanos[cinco].detalleCarta;

  img0.setAttribute("src", arcanos[cero].img);
  img1.setAttribute("src", arcanos[uno].img);
  img2.setAttribute("src", arcanos[dos].img);
  img3.setAttribute("src", arcanos[tres].img);
  img4.setAttribute("src", arcanos[cuatro].img);
  img5.setAttribute("src", arcanos[cinco].img);
}
function iterarJugadores1(){
  jugador1_1.value = inputJ1.value;
  jugador1_2.value = inputJ1.value;
  jugador1_3.value = inputJ1.value;
  jugador2_1.value = inputJ2.value;
  jugador2_2.value = inputJ2.value;
  jugador2_3.value = inputJ2.value;
  imprimirJugadores()
  matchJugadores()
}

function iterarJugadores2(j1, j2) {
  jugador1_1.value = j1;
  jugador1_2.value = j1;
  jugador1_3.value = j1;
  jugador2_1.value = j2;
  jugador2_2.value = j2;
  jugador2_3.value = j2;
  imprimirJugadores();
  matchJugadores()
}

function imprimirJugadores() {
  jugador1_1.innerHTML = `${jugador1_1.value}`;
  jugador1_2.innerHTML = `${jugador1_1.value}`;
  jugador1_3.innerHTML = `${jugador1_1.value}`;
  jugador2_1.innerHTML = `${jugador2_1.value}`;
  jugador2_2.innerHTML = `${jugador2_1.value}`;
  jugador2_3.innerHTML = `${jugador2_1.value}`;
}

irAResultados.addEventListener("click", () => {
  resultadoDeCartas.style.display = "none";
  muchosBotones.style.display = "block";
});

function matchJugadores() {
  suma = 0;
  tiradas.forEach(function (tirada) {
    suma += tirada;
  });
  //console.log(suma);

  let match;
  if (suma % 2 == 0) {
    match = "SI";
    //console.log("Hay Match!! :)");
  } else {
    match = "NO";
    //console.log("No hay Match :(");
  }
  jugador1.innerHTML = `Cartas de ${jugador1_1.value}`;
  jugador2.innerHTML = `Cartas de ${jugador2_1.value}`;
  hayMatch.innerHTML = `${match}`;
  miniCarta();
}
function miniCarta() {
  let cero = tiradas[0];
  let uno = tiradas[1];
  let dos = tiradas[2];
  let tres = tiradas[3];
  let cuatro = tiradas[4];
  let cinco = tiradas[5];

  carta1.innerHTML = `<img src="${arcanos[cero].mini_img}">`;
  carta2.innerHTML = `<img src="${arcanos[uno].mini_img}">`;
  carta3.innerHTML = `<img src="${arcanos[dos].mini_img}">`;

  carta4.innerHTML = `<img src="${arcanos[tres].mini_img}">`;
  carta5.innerHTML = `<img src="${arcanos[cuatro].mini_img}">`;
  carta6.innerHTML = `<img src="${arcanos[cinco].mini_img}">`;
}

verResultados.addEventListener("click", () => {
  resultadoDeCartas.style.display = "none";
  muchosBotones.style.display = "none";
  paginaMatch.style.display = "block";
});
salir.addEventListener("click", () => {
  inputJ1.value = "";
  inputJ2.value = "";
  paginaInicio.style.display = "block";
  paginaMatch.style.display = "none";
  if (resultadosAnteriores.hasChildNodes) {
    resultadosAnteriores.style.display = "block";
  }else {
    resultadosAnteriores.style.display = "none";
  }
});

guardar.addEventListener("click", () => {
  guardarPartida();
  paginaInicio.style.display = "block";
  resultadosAnteriores.style.display = "block";
  paginaMatch.style.display = "none";
});

const guardada = {
  cartas: [],
  j1: jugador1_1.value,
  j2: jugador2_1.value,
};

function guardarPartida() {
  let jugadaGuardada = document.createElement("div");

  guardada.j1 = jugador1_1.value;
  guardada.j2 = jugador2_1.value;
  guardada.cartas = tiradas;

  jugadaGuardada.innerHTML = `${guardada.j1} & ${guardada.j2}
    <button onclick = "iterarJugadores2()"
      data-j1="${guardada.j1}" 
      data-j2="${guardada.j2}"
    <i class="fas fa-angle-right m-1" 
      onclick="verGuardada()" 
      data-cartass="[,${guardada.cartas}]"></i> </button>`;

  resultadosAnteriores.appendChild(jugadaGuardada);
  inputJ1.value = "";
  inputJ2.value = "";
  tiradas = [];
}

resultadosAnteriores.addEventListener("click", (e) => {
  e.preventDefault()
  if (e.target.getAttribute("data-j1")) {

    verGuardada(
      e.target.getAttribute("data-cartass"));

    iterarJugadores2(
      e.target.getAttribute("data-j1"),
      e.target.getAttribute("data-j2")
    );
    volverATirar.style.display="none"
    guardar.style.display="none"
  }
});

function verGuardada(cartass) {
  tiradas = cartass.split(',').map(function (item) {
    return parseInt(item, Number);
  });
  tiradas.shift();
  //console.log(tiradas);
  mostrarResultados(tiradas);
  paginaInicio.style.display = "none";
  resultadosAnteriores.style.display = "none";
  resultadoDeCartas.style.display = "block";
}

volverATirar.addEventListener("click", () => {
  tiradas = [];
  validarDatos();
});

inicio.addEventListener("click", () => {
  inputJ1.value = "";
  inputJ2.value = "";
  paginaInicio.style.display = "block";
  muchosBotones.style.display = "none";
  if (resultadosAnteriores.hasChildNodes) {
    resultadosAnteriores.style.display = "block";
  } else {
    resultadosAnteriores.style.display = "none";
  }
});