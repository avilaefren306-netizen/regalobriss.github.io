// Al cargar, conectamos eventos a todos los botones
document.addEventListener("DOMContentLoaded", () => {
  const botones = document.querySelectorAll(".btn");
  const resultado = document.getElementById("resultado");

  const mensajes = {
    "sin-duda": "¡Sabía que sí! 😍 Gracias por quererme tanto.",
    "claro": "Eres lo mejor, mi amor 💖 Siempre contigo.",
    "no-opcion": "Jajaja, esa opción no existe 😘 Solo hay sí (y sí con besos)."
  };

  botones.forEach(boton => {
    boton.addEventListener("click", () => {
      const clave = boton.dataset.respuesta;
      resultado.textContent = mensajes[clave];
    });
  });
});
