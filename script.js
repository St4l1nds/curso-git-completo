function cambiarColor() {
    const colores = ['#f44336', '#2196F3'];
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.backgroundColor = colorAleatorio;
  }
  