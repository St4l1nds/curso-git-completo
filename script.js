function cambiarColor() {
    const colores = ['#f44336', '#2196F3', '#4CAF50', '#FFEB3B', '#9C27B0', '#FF9800'];
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.backgroundColor = colorAleatorio;
  }
  