document.getElementById('rsvpForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('mensaje-confirmacion').textContent =
        '¡Gracias por confirmar tu asistencia! ❤️';
    this.reset();
});
