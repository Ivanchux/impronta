// lucide — solo si está cargado en la página
if (typeof lucide !== 'undefined') lucide.createIcons();

// menú móvil
function abrirMenu() {
  var menu = document.getElementById('menuMovil');
  menu.classList.toggle('abierto');
}

// modo oscuro — guarda preferencia en localStorage
function cambiarTema() {
  var activo = document.body.classList.toggle('oscuro');
  localStorage.setItem('tema', activo ? 'oscuro' : 'claro');
  var btn = document.getElementById('btnTema');
  if (btn) btn.textContent = activo ? '☀️' : '🌙';
}

// aplica el tema oscuro al cargar si el usuario ya lo eligió antes
if (localStorage.getItem('tema') === 'oscuro') {
  document.body.classList.add('oscuro');
  var btnTema = document.getElementById('btnTema');
  if (btnTema) btnTema.textContent = '☀️';
}

// presupuesto.html — formulario en 3 pasos
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

// envío del formulario de presupuesto
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

// acordeón de preguntas frecuentes (servicios.html)
document.querySelectorAll('.faq-pregunta').forEach(function(pregunta) {
  pregunta.addEventListener('click', function() {
    var elemento = this.parentElement;
    var estaAbierto = elemento.classList.contains('abierto');
    // primero cierra todo
    document.querySelectorAll('.faq-elemento.abierto').forEach(function(el) {
      el.classList.remove('abierto');
      el.querySelector('.faq-pregunta').setAttribute('aria-expanded', 'false');
    });
    if (!estaAbierto) {
      elemento.classList.add('abierto');
      this.setAttribute('aria-expanded', 'true');
    }
  });
});

// formulario de contacto (contacto.html)
function enviarFormulario(e) {
  e.preventDefault();
  var form    = document.getElementById('formulario');
  var nombre  = document.getElementById('nombre');
  var email   = document.getElementById('email');
  var proyecto = document.getElementById('proyecto');
  var privacidad = document.getElementById('privacidad');
  var ok = true;

  // limpia los errores del intento anterior
  form.querySelectorAll('.campo-error-inline').forEach(function(el) { el.remove(); });
  form.querySelectorAll('.invalido').forEach(function(el) { el.classList.remove('invalido'); });

  function marcarError(input, msg) {
    input.classList.add('invalido');
    var err = document.createElement('p');
    err.className = 'campo-error campo-error-inline';
    err.textContent = msg;
    err.style.display = 'block';
    input.parentNode.appendChild(err);
    ok = false;
  }

  if (!nombre || !nombre.value.trim())  marcarError(nombre, 'Indica tu nombre.');
  var emailVal = email ? email.value.trim() : '';
  if (!emailVal || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) marcarError(email, 'Introduce un email válido.');
  if (!proyecto || !proyecto.value.trim()) marcarError(proyecto, 'Cuéntanos tu proyecto.');
  if (privacidad && !privacidad.checked) {
    var errPriv = document.createElement('p');
    errPriv.className = 'campo-error campo-error-inline';
    errPriv.textContent = 'Debes aceptar la política de privacidad.';
    errPriv.style.display = 'block';
    privacidad.parentNode.parentNode.appendChild(errPriv);
    ok = false;
  }

  if (!ok) return;

  var caja = document.querySelector('#formulario');
  var conf = document.getElementById('mensajeExito');
  if (caja) caja.style.display = 'none';
  if (conf) { conf.style.display = 'block'; conf.classList.add('visible'); }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// cookies
function aceptarCookies() {
  localStorage.setItem('cookies', 'aceptado');
  document.getElementById('bannerCookies').classList.add('oculto');
}

// si ya aceptó, oculta el banner sin mostrarlo
(function () {
  var banner = document.getElementById('bannerCookies');
  if (banner && localStorage.getItem('cookies') === 'aceptado') {
    banner.classList.add('oculto');
  }
})();
