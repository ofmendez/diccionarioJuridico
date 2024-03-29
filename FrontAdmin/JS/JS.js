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

// Definición Altura Contenido Home
function definirAlturaMensajeEstadisticas() {
    var alturaMensajeEstadisticas = document.getElementById('SeccionMensajeEstadisticas').clientHeight;
    var valorPadding = getComputedStyle(document.documentElement).getPropertyValue('--PaddingElementos').replace("px", "");
    document.getElementById('SeccionContenidoHome').style.height = (window.innerHeight - (alturaMensajeEstadisticas + (valorPadding * 2))) + 'px';
}

definirAlturaMensajeEstadisticas();
addEventListener("resize", (event) => {
    definirAlturaMensajeEstadisticas();
});

// PÁGINA BUSCADOR - Funcionamiento Botón Filtros Movil
function desplegarFiltros() {
    document.getElementById('SeccionFiltros').style.display = "block";
    document.getElementById('BotonAbrirFiltros').style.display = "none";
    document.getElementById('BotonCerrarFiltros').style.display = "block";
    
}
function contraerFiltros() {
    document.getElementById('SeccionFiltros').style.display = "none";
    document.getElementById('BotonAbrirFiltros').style.display = "block";
    document.getElementById('BotonCerrarFiltros').style.display = "none";
    
}
