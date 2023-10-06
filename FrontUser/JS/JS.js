// Definición altura barra fija
function definirMedidasBarras() {
   var AlturaBarraFija = document.getElementById('SeccionHeaderFija').clientHeight;
   document.getElementById('MedidaAlturaBarraFija').style.height = AlturaBarraFija + 'px';
   // Definición altura atajos
   var AlturaAtajos = document.getElementById('AlturaMenuAtajos').clientHeight;
   document.getElementById('AlturaAtajosAsignada').style.height = AlturaAtajos + 'px';
}
definirMedidasBarras();
addEventListener("resize", (event) => {
   definirMedidasBarras();
});
// Definición Medida Ancho Menu Lateral
function definirMedidaMenuLateral() {
   var anchoMenuLateral = document.getElementById('MenuLateral').clientWidth;
   if (window.innerWidth > 1250) {
       document.documentElement.style.setProperty('--SeccionDerechaTamanoAutomatico', window.innerWidth - anchoMenuLateral + 'px');
       document.documentElement.style.setProperty('--SeccionesDerechaMenuAncho', anchoMenuLateral + 'px');
   } else if (window.innerWidth > 991) {
       document.documentElement.style.setProperty('--SeccionesDerechaMenuAncho', anchoMenuLateral + 'px');
   } else if (window.innerWidth < 990) {
       document.documentElement.style.setProperty('--SeccionesDerechaMenuAncho', '0px');
   }
}
definirMedidaMenuLateral();
addEventListener("resize", (event) => {
   definirMedidaMenuLateral();
});

// Definición altura Listado Descripciones
   function definirAlturaDescripciones() {
     var AlturaBarraFijaSetteada = document.getElementById('SeccionHeaderFija').clientHeight;
     var AlturaAEscribir = window.innerHeight - AlturaBarraFijaSetteada;
     document.getElementById('ListadoDescripcionesWidget').style.height = (window.innerHeight - (AlturaBarraFijaSetteada + 250)) + 'px';
}
definirAlturaDescripciones();
addEventListener("resize", (event) => {
definirAlturaDescripciones();
});

// Funacionamientos Menús
function abrirMenuLateral() {
    document.getElementById('MenuLateral').classList.add('slide-in');
    document.getElementById('MenuLateral').classList.remove('slide-out');
    document.getElementById('OverlayMenu').classList.add('overlay-in');
    document.getElementById('OverlayMenu').classList.remove('overlay-out');
    document.getElementById('MenuConfiguracion').classList.add('slide-down');
    document.getElementById('MenuConfiguracion').classList.remove('slide-up');
}

function cerrarMenuLateral() {
    document.getElementById('MenuLateral').classList.add('slide-out');
    document.getElementById('MenuLateral').classList.remove('slide-in');
    document.getElementById('OverlayMenu').classList.add('overlay-out');
    document.getElementById('OverlayMenu').classList.remove('overlay-in');
    document.getElementById('MenuConfiguracion').classList.add('slide-down');
    document.getElementById('MenuConfiguracion').classList.remove('slide-up');
    document.getElementById('ContenedorMenuConfiguracion').classList.add('z-index-down');
    document.getElementById('ContenedorMenuConfiguracion').classList.remove('z-index-up');
}

function abrirMenuConfiguracion() {
    document.getElementById('MenuLateral').classList.add('slide-out');
    document.getElementById('MenuLateral').classList.remove('slide-in');
    document.getElementById('OverlayMenu').classList.add('overlay-in');
    document.getElementById('OverlayMenu').classList.remove('overlay-out');
    document.getElementById('MenuConfiguracion').classList.add('slide-up');
    document.getElementById('MenuConfiguracion').classList.remove('slide-down');
    document.getElementById('ContenedorMenuConfiguracion').classList.add('z-index-up');
    document.getElementById('ContenedorMenuConfiguracion').classList.remove('z-index-down');
}

function ejecutarModoClaro() {
    document.getElementById('TablaModoClaro').classList.add('ModoActivo');
    document.getElementById('TablaModoOscuro').classList.remove('ModoActivo');
    document.documentElement.style.setProperty('--ColorFondos', '#F0F2F1');
    document.documentElement.style.setProperty('--ColorSecundario', '#ffffff');
    document.documentElement.style.setProperty('--ColorTexto', '#000000');
    document.documentElement.style.setProperty('--FiltroNegativo', 'none');
    document.documentElement.style.setProperty('--FiltroNegativoInvertido', 'invert(1)');
    document.documentElement.style.setProperty('--ColorFondosHover', '#dfdfdf');
}

function ejecutarModoOscuro() {
    document.getElementById('TablaModoOscuro').classList.add('ModoActivo');
    document.getElementById('TablaModoClaro').classList.remove('ModoActivo');
    document.documentElement.style.setProperty('--ColorFondos', '#282828');
    document.documentElement.style.setProperty('--ColorSecundario', '#000000');
    document.documentElement.style.setProperty('--ColorTexto', '#ffffff');
    document.documentElement.style.setProperty('--FiltroNegativo', 'invert(1)');
    document.documentElement.style.setProperty('--FiltroNegativoInvertido', 'none');
    document.documentElement.style.setProperty('--ColorFondosHover', '#141414');
}

function decrecerTamañoFuente() {
    var getTamanoH2 = getComputedStyle(document.documentElement).getPropertyValue('--TamanoFuenteTitulosH2').replace("px", "");
    var getTamanoFuente = getComputedStyle(document.documentElement).getPropertyValue('--TamanoFuenteParrafos').replace("px", "");
    var getTamanoPadding = getComputedStyle(document.documentElement).getPropertyValue('--PaddingElementos').replace("%", "");
    if (getTamanoFuente <= 11) {
        getTamanoFuente = 11;
    } else {
        document.documentElement.style.setProperty('--TamanoFuenteTitulosH2', Number(getTamanoH2) - 1 + 'px');
        document.documentElement.style.setProperty('--TamanoFuenteParrafos', Number(getTamanoFuente) - 1 + 'px');
        document.documentElement.style.setProperty('--PaddingElementos', Number(getTamanoPadding) - 0.1 + '%');
        definirMedidasBarras();
    }
}

function incrementarTamañoFuente() {
    var getTamanoH2 = getComputedStyle(document.documentElement).getPropertyValue('--TamanoFuenteTitulosH2').replace("px", "");
    var getTamanoFuente = getComputedStyle(document.documentElement).getPropertyValue('--TamanoFuenteParrafos').replace("px", "");
    var getTamanoPadding = getComputedStyle(document.documentElement).getPropertyValue('--PaddingElementos').replace("%", "");
    if (getTamanoFuente >= 18) {
        getTamanoFuente = 18;
    } else {
        document.documentElement.style.setProperty('--TamanoFuenteTitulosH2', Number(getTamanoH2) + 1 + 'px');
        document.documentElement.style.setProperty('--TamanoFuenteParrafos', Number(getTamanoFuente) + 1 + 'px');
        document.documentElement.style.setProperty('--PaddingElementos', Number(getTamanoPadding) + 0.1 + '%');
        definirMedidasBarras();
    }
}