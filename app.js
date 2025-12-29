// Al cargar, conectamos eventos a todos los botones
document.addEventListener("DOMContentLoaded", () => {
  const botones = document.querySelectorAll(".btn");
  const resultado = document.getElementById("resultado");

  // Un solo objeto de audio
  const musica = new Audio();
  musica.volume = 0.9;

  // Mensajes con HTML para que se vean más bonitos
  const mensajes = {
    "sin-duda": `
      <div class="respuesta-card feliz">
        <h2>¡Sabía que sí! 😍✨</h2>
        <p>Eres mi felicidad infinita 💕</p>
      </div>
    `,
    "claro": `
      <div class="respuesta-card dulce">
        <h2>Eres lo mejor, mi amor 💖🌹</h2>
        <p>sabia que dirias eso ✨</p>
      </div>
    `,
    "no-opcion": `
      <div class="respuesta-card divertida">
        <h2>okey va culera</h2>
        <p>come caca</p>
      </div>
    `
  };

  // Canciones para cada respuesta
  const canciones = {
    "sin-duda":"regalo briss/assets/musica/Loco.mp3",
    "claro": "assets/musica/musica-dulce.mp3",
    "no-opcion": "assets/musica/musica-divertida.mp3"
  };

  botones.forEach(boton => {
    boton.addEventListener("click", () => {
      const clave = boton.dataset.respuesta;
      resultado.innerHTML = mensajes[clave];

      // Reproduce la canción correspondiente
      musica.pause();
      musica.currentTime = 0;
      musica.src = canciones[clave];
      musica.play().catch(() => {});
    });
  });
});
