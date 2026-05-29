/* ============================================================
   scripts.js — Funciones compartidas de Impronta
   ============================================================ */

/* Inicializar iconos Lucide */
if (typeof lucide !== 'undefined') lucide.createIcons();

/* ── Menú hamburguesa ── */
function abrirMenu() {
  var menu = document.getElementById('menuMovil');
  menu.classList.toggle('abierto');
}

/* ── Modo oscuro ── */
function cambiarTema() {
  var activo = document.body.classList.toggle('oscuro');
  localStorage.setItem('tema', activo ? 'oscuro' : 'claro');
  var btn = document.getElementById('btnTema');
  if (btn) btn.textContent = activo ? '☀️' : '🌙';
}

/* Restaurar tema guardado al cargar la página */
if (localStorage.getItem('tema') === 'oscuro') {
  document.body.classList.add('oscuro');
  var btnTema = document.getElementById('btnTema');
  if (btnTema) btnTema.textContent = '☀️';
}

/* ── Formulario multi-paso (presupuesto.html) ── */
var pasoActual = 1;

function validarPaso(n) {
  if (n === 1) {
    var srv = document.querySelector('input[name="servicio"]:checked');
    var errSrv = document.getElementById('error-servicio');
    if (!srv) {
      if (errSrv) errSrv.style.display = 'block';
      return false;
    }
    if (errSrv) errSrv.style.display = 'none';
  }
  if (n === 2) {
    var desc = document.getElementById('descripcion');
    var errDesc = document.getElementById('error-descripcion');
    if (desc && !desc.value.trim()) {
      if (errDesc) errDesc.style.display = 'block';
      desc.classList.add('invalido');
      return false;
    }
    if (errDesc) errDesc.style.display = 'none';
    if (desc) desc.classList.remove('invalido');
  }
  return true;
}

function irPaso(n) {
  if (n > pasoActual && !validarPaso(pasoActual)) return;

  var secActual = document.getElementById('seccion' + pasoActual);
  var secNueva  = document.getElementById('seccion' + n);
  if (secActual) secActual.classList.remove('visible');
  if (secNueva)  secNueva.classList.add('visible');

  for (var i = 1; i <= 3; i++) {
    var el = document.getElementById('paso' + i);
    if (!el) continue;
    el.classList.remove('activo', 'completado');
    if (i < n) el.classList.add('completado');
    else if (i === n) el.classList.add('activo');
  }

  pasoActual = n;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* Envío del formulario — muestra confirmación visual */
(function () {
  var form = document.getElementById('formPresupuesto');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var nombre     = document.getElementById('nombre');
    var email      = document.getElementById('email');
    var privacidad = document.getElementById('privacidad');
    var ok = true;

    var errNombre = document.getElementById('error-nombre');
    if (nombre && !nombre.value.trim()) {
      if (errNombre) errNombre.style.display = 'block';
      nombre.classList.add('invalido'); ok = false;
    } else {
      if (errNombre) errNombre.style.display = 'none';
      if (nombre) nombre.classList.remove('invalido');
    }

    var errEmail = document.getElementById('error-email');
    var emailVal = email ? email.value.trim() : '';
    if (!emailVal || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
      if (errEmail) errEmail.style.display = 'block';
      if (email) email.classList.add('invalido'); ok = false;
    } else {
      if (errEmail) errEmail.style.display = 'none';
      if (email) email.classList.remove('invalido');
    }

    var errPriv = document.getElementById('error-privacidad');
    if (privacidad && !privacidad.checked) {
      if (errPriv) errPriv.style.display = 'block'; ok = false;
    } else {
      if (errPriv) errPriv.style.display = 'none';
    }

    if (!ok) return;

    var caja = document.querySelector('.caja-formulario');
    var conf = document.getElementById('confirmacion');
    if (caja) caja.style.display = 'none';
    if (conf) conf.classList.add('visible');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();

/* ── Acordeón FAQ ── */
document.querySelectorAll('.faq-pregunta').forEach(function(pregunta) {
  pregunta.addEventListener('click', function() {
    var elemento = this.parentElement;
    var estaAbierto = elemento.classList.contains('abierto');
    /* Cierra todos los que estén abiertos */
    document.querySelectorAll('.faq-elemento.abierto').forEach(function(el) {
      el.classList.remove('abierto');
      el.querySelector('.faq-pregunta').setAttribute('aria-expanded', 'false');
    });
    /* Si no estaba abierto, lo abre */
    if (!estaAbierto) {
      elemento.classList.add('abierto');
      this.setAttribute('aria-expanded', 'true');
    }
  });
});

/* ── Banner de cookies ── */
function aceptarCookies() {
  localStorage.setItem('cookies', 'aceptado');
  document.getElementById('bannerCookies').classList.add('oculto');
}

/* Ocultar el banner si el usuario ya lo aceptó antes */
(function () {
  var banner = document.getElementById('bannerCookies');
  if (banner && localStorage.getItem('cookies') === 'aceptado') {
    banner.classList.add('oculto');
  }
})();
